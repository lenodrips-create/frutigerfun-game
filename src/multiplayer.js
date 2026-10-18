import * as THREE from 'three';
import { Character } from './character.js';

// Online play. Connects to the Frutiger Fun server (a Ruby WebSocket hub),
// sends where you are ten times a second, and shows everyone else as a
// coloured buddy with a name tag. You only see players in the same place as
// you: out in the city, or in the apartment.
//
// The server address comes from <meta name="frutiger-server"> in index.html,
// or ?server=wss://... in the page address. With neither, the game is
// single player.

const SEND_EVERY = 0.1;
const COLORS = [0x23c46b, 0xff8a1f, 0xc04bff, 0xff3f78, 0x14c4d6, 0xf2c200, 0x6f5cff, 0x8ad11c];

export function serverUrl() {
  const fromQuery = new URLSearchParams(location.search).get('server');
  const fromMeta = document.querySelector('meta[name="frutiger-server"]')?.content;
  return (fromQuery || fromMeta || '').trim();
}

function nameTag(text) {
  const c = document.createElement('canvas');
  c.width = 256;
  c.height = 64;
  const g = c.getContext('2d');
  g.fillStyle = 'rgba(10,90,160,0.8)';
  g.beginPath();
  g.roundRect(4, 4, 248, 56, 28);
  g.fill();
  g.strokeStyle = 'rgba(255,255,255,0.9)';
  g.lineWidth = 4;
  g.stroke();
  g.fillStyle = '#fff';
  g.font = '800 34px Nunito, sans-serif';
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.fillText(text, 128, 34);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false }));
  s.scale.set(1.5, 0.375, 1);
  s.position.y = 2.15;
  s.renderOrder = 10;
  return s;
}

export class Multiplayer {
  constructor(game) {
    this.game = game;
    this.url = serverUrl();
    this.ws = null;
    this.me = null;
    this.remotes = new Map();
    this.sendTimer = 0;
    this.wanted = false;
    this.retry = 1;
  }

  get enabled() {
    return !!this.url;
  }

  connect() {
    if (!this.enabled) return;
    this.wanted = true;
    if (this.ws) return;
    let ws;
    try {
      ws = this.ws = new WebSocket(this.url);
    } catch (err) {
      console.warn('Multiplayer: bad server address', err);
      return;
    }
    this.game.ui.online('Connecting…');
    ws.onopen = () => {
      this.retry = 1;
    };
    ws.onmessage = (e) => {
      let msg;
      try {
        msg = JSON.parse(e.data);
      } catch {
        return;
      }
      this.handle(msg);
    };
    ws.onclose = () => {
      if (this.ws !== ws) return;
      this.ws = null;
      this.me = null;
      this.clear();
      if (this.wanted) {
        this.game.ui.online('Offline · reconnecting…');
        setTimeout(() => this.wanted && this.connect(), this.retry * 1000);
        this.retry = Math.min(this.retry * 2, 15);
      } else {
        this.game.ui.online('');
      }
    };
  }

  disconnect() {
    this.wanted = false;
    const ws = this.ws;
    this.ws = null;
    this.me = null;
    this.clear();
    ws?.close();
    this.game.ui.online('');
  }

  handle(msg) {
    switch (msg.type) {
      case 'welcome':
        this.me = { id: msg.id, name: msg.name, room: msg.room };
        for (const p of msg.players || []) this.add(p.id, p.name);
        break;
      case 'join':
        this.add(msg.id, msg.name);
        break;
      case 'leave':
        this.remove(msg.id);
        break;
      case 'states':
        for (const s of msg.players || []) {
          if (s.id === this.me?.id) continue;
          const r = this.remotes.get(s.id) || this.add(s.id, `Player ${s.id}`);
          r.target = s;
        }
        break;
      case 'full':
        this.wanted = false;
        this.game.ui.online('Game is full, playing solo');
        return;
    }
    this.updateLabel();
  }

  add(id, name) {
    if (this.remotes.has(id)) return this.remotes.get(id);
    const ch = new Character({ color: COLORS[(id - 1) % COLORS.length] });
    ch.root.add(nameTag(name));
    ch.root.visible = false;
    const r = { id, name, ch, target: null, inside: null, ready: false };
    this.remotes.set(id, r);
    return r;
  }

  remove(id) {
    const r = this.remotes.get(id);
    if (!r) return;
    r.ch.root.removeFromParent();
    this.remotes.delete(id);
  }

  clear() {
    for (const id of [...this.remotes.keys()]) this.remove(id);
  }

  updateLabel() {
    if (!this.me) return;
    const n = this.remotes.size + 1;
    const room = this.me.room ? `Server ${this.me.room} · ` : '';
    this.game.ui.online(`${room}You are ${this.me.name} · ${n} online`);
  }

  update(dt) {
    const g = this.game;
    // send ours
    if (this.ws?.readyState === WebSocket.OPEN && this.me && (g.state === 'playing' || g.state === 'paused')) {
      this.sendTimer -= dt;
      if (this.sendTimer <= 0) {
        this.sendTimer = SEND_EVERY;
        const p = g.player.pos, st = g.character.state;
        this.ws.send(JSON.stringify({
          type: 'state', x: p.x, y: p.y, z: p.z, facing: g.player.facing,
          speed: st.speed, grounded: st.grounded, inside: g.inside, wave: st.wave, seated: g.seated,
        }));
      }
    }
    // move everyone else smoothly towards their latest reported spot
    const k = 1 - Math.exp(-dt * 10);
    for (const r of this.remotes.values()) {
      const t = r.target;
      if (!t) continue;
      const root = r.ch.root;
      const scene = t.inside ? g.apartment.scene : g.scene;
      if (root.parent !== scene) scene.add(root);
      root.visible = !!t.inside === !!g.inside;
      if (!r.ready || r.inside !== t.inside) {
        root.position.set(t.x, t.y, t.z);
        root.rotation.y = t.facing;
        r.ready = true;
        r.inside = t.inside;
      } else {
        root.position.lerp(new THREE.Vector3(t.x, t.y, t.z), k);
        let d = t.facing - root.rotation.y;
        d = Math.atan2(Math.sin(d), Math.cos(d));
        root.rotation.y += d * k;
      }
      Object.assign(r.ch.state, { speed: t.speed, grounded: t.grounded, wave: t.wave, vy: 0 });
      r.ch.update(dt);
    }
  }
}
