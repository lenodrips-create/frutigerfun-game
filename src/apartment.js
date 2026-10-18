import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { GeoBuilder, addPrism, roundedRectPts } from './geometry.js';
import { Colliders } from './physics.js';
import { mulberry32 } from './util.js';

// The apartment: a white-and-blue futuristic living room with a curved
// translucent sofa, a round window onto the skyline, glowing shelves,
// bubble chairs, glass pendant lights, and a clear desk with a Bondi Blue
// all-in-one computer. It is its own scene; you get in through a glowing
// blue circle outside one of the towers.

const W = 20, D = 17, H = 4.8, CORNER = 3;
const TAU = Math.PI * 2;

// ---- a glowing blue circle you step into -----------------------------------

export function makePortal() {
  const g = new THREE.Group();
  const disc = new THREE.Mesh(
    new THREE.CircleGeometry(1.05, 48),
    new THREE.MeshBasicMaterial({ color: 0x38b6ff, transparent: true, opacity: 0.55, depthWrite: false }),
  );
  disc.rotation.x = -Math.PI / 2;
  disc.position.y = 0.03;
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(1.08, 0.07, 12, 64),
    new THREE.MeshStandardMaterial({ color: 0xbfeaff, emissive: 0x2aa8ff, emissiveIntensity: 2.2 }),
  );
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = 0.05;
  // a soft column of light rising from the circle
  const c = document.createElement('canvas');
  c.width = 4;
  c.height = 128;
  const cg = c.getContext('2d');
  const grad = cg.createLinearGradient(0, 0, 0, 128);
  grad.addColorStop(0, 'rgba(120,210,255,0)');
  grad.addColorStop(1, 'rgba(120,210,255,0.75)');
  cg.fillStyle = grad;
  cg.fillRect(0, 0, 4, 128);
  const beamTex = new THREE.CanvasTexture(c);
  beamTex.colorSpace = THREE.SRGBColorSpace;
  const beam = new THREE.Mesh(
    new THREE.CylinderGeometry(1.05, 1.05, 4.5, 48, 1, true),
    new THREE.MeshBasicMaterial({ map: beamTex, transparent: true, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending }),
  );
  beam.position.y = 2.25;
  const halo = new THREE.Mesh(new THREE.TorusGeometry(1.3, 0.04, 8, 64), ring.material);
  halo.rotation.x = -Math.PI / 2;
  const sign = new THREE.Sprite(new THREE.SpriteMaterial({ map: canvasTex(512, 128, (g, w, h) => {
    g.fillStyle = 'rgba(20,120,210,0.85)';
    g.beginPath();
    g.roundRect(8, 8, w - 16, h - 16, 50);
    g.fill();
    g.strokeStyle = '#fff';
    g.lineWidth = 6;
    g.stroke();
    g.fillStyle = '#fff';
    g.font = '800 64px Nunito, sans-serif';
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    g.fillText('Apartment', w / 2, h / 2 + 4);
  }), transparent: true, depthWrite: false }));
  sign.scale.set(3.2, 0.8, 1);
  sign.position.y = 3.6;
  g.add(disc, ring, beam, halo, sign);
  g.userData.update = (t) => {
    const k = 0.5 + 0.5 * Math.sin(t * 3);
    disc.material.opacity = 0.4 + 0.25 * k;
    ring.material.emissiveIntensity = 1.6 + 1.2 * k;
    beam.scale.set(1 + 0.04 * k, 1, 1 + 0.04 * k);
    halo.position.y = 0.2 + ((t * 0.9) % 1) * 3.2;
    sign.position.y = 3.6 + Math.sin(t * 1.5) * 0.12;
  };
  return g;
}

// ---- textures ----------------------------------------------------------------

function canvasTex(w, h, draw) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

// The city seen through the round window.
function skylineTexture() {
  return canvasTex(1024, 1024, (g, w, h) => {
    const rnd = mulberry32(88);
    const sky = g.createLinearGradient(0, 0, 0, h);
    sky.addColorStop(0, '#2f8fe8');
    sky.addColorStop(0.55, '#8fd2ff');
    sky.addColorStop(1, '#e8f7ff');
    g.fillStyle = sky;
    g.fillRect(0, 0, w, h);
    for (let i = 0; i < 9; i++) {
      const x = rnd() * w, y = 120 + rnd() * 380, r = 40 + rnd() * 70;
      g.fillStyle = 'rgba(255,255,255,0.85)';
      for (let k = 0; k < 6; k++) {
        g.beginPath();
        g.arc(x + (k - 3) * r * 0.45, y - Math.sin((k / 5) * Math.PI) * r * 0.5, r * (0.5 + rnd() * 0.3), 0, TAU);
        g.fill();
      }
    }
    const tower = (x, bw, top, light) => {
      const grad = g.createLinearGradient(x, 0, x + bw, 0);
      grad.addColorStop(0, light ? '#cfe6f7' : '#3f79b8');
      grad.addColorStop(1, light ? '#8fb6d6' : '#1f4f8a');
      g.fillStyle = grad;
      g.fillRect(x, top, bw, h - top);
      g.fillStyle = light ? 'rgba(60,90,120,0.5)' : 'rgba(200,235,255,0.4)';
      for (let y = top + 8; y < h; y += 14) {
        for (let xx = x + 4; xx < x + bw - 6; xx += 9) g.fillRect(xx, y, 5, 7);
      }
    };
    for (let i = 0; i < 26; i++) {
      const bw = 40 + rnd() * 80;
      tower(rnd() * (w - bw), bw, 380 + rnd() * 420, rnd() < 0.45);
    }
    for (let i = 0; i < 10; i++) {
      const bw = 60 + rnd() * 90;
      tower(rnd() * (w - bw), bw, 150 + rnd() * 300, rnd() < 0.5);
    }
    const haze = g.createLinearGradient(0, h * 0.7, 0, h);
    haze.addColorStop(0, 'rgba(230,246,255,0)');
    haze.addColorStop(1, 'rgba(230,246,255,0.75)');
    g.fillStyle = haze;
    g.fillRect(0, 0, w, h);
  });
}

// An aero desktop for the computer's screen.
function screenTexture() {
  return canvasTex(512, 384, (g, w, h) => {
    const bg = g.createLinearGradient(0, 0, 0, h);
    bg.addColorStop(0, '#1d8fe8');
    bg.addColorStop(0.6, '#8fe0ff');
    bg.addColorStop(1, '#d9fbd0');
    g.fillStyle = bg;
    g.fillRect(0, 0, w, h);
    g.fillStyle = '#5fcf3a';
    g.beginPath();
    g.moveTo(0, h * 0.78);
    g.quadraticCurveTo(w * 0.5, h * 0.6, w, h * 0.8);
    g.lineTo(w, h);
    g.lineTo(0, h);
    g.fill();
    for (let i = 0; i < 9; i++) {
      const x = 40 + ((i * 97) % (w - 80)), y = 40 + ((i * 53) % 200), r = 10 + (i % 4) * 8;
      const b = g.createRadialGradient(x - r * 0.3, y - r * 0.3, 1, x, y, r);
      b.addColorStop(0, 'rgba(255,255,255,0.9)');
      b.addColorStop(0.6, 'rgba(255,255,255,0.1)');
      b.addColorStop(1, 'rgba(255,255,255,0.7)');
      g.fillStyle = b;
      g.beginPath();
      g.arc(x, y, r, 0, TAU);
      g.fill();
    }
    // a glossy window and a taskbar
    g.fillStyle = 'rgba(255,255,255,0.75)';
    g.fillRect(150, 90, 230, 150);
    g.fillStyle = 'rgba(40,140,220,0.85)';
    g.fillRect(150, 90, 230, 22);
    g.fillStyle = 'rgba(10,60,110,0.75)';
    g.fillRect(0, h - 26, w, 26);
    g.fillStyle = '#7ed321';
    g.beginPath();
    g.arc(18, h - 13, 9, 0, TAU);
    g.fill();
  });
}

// ---- the room -----------------------------------------------------------------

export class Apartment {
  constructor() {
    const scene = (this.scene = new THREE.Scene());
    scene.background = new THREE.Color(0xdcecf8);
    this.colliders = new Colliders();
    this.floorY = 0;
    this.ceiling = H;
    this.speedScale = 0.55;
    this.spawn = { x: 0, z: 5.2, facing: Math.PI };
    this.exit = new THREE.Vector3(-6.2, 0, 6.2);
    this.updaters = [];

    const M = this.mats = {
      floor: new THREE.MeshPhysicalMaterial({ color: 0xe9f2f9, roughness: 0.06, clearcoat: 1, clearcoatRoughness: 0.03, envMapIntensity: 1.2 }),
      wall: new THREE.MeshStandardMaterial({ color: 0xe3edf5, roughness: 0.4, side: THREE.BackSide }),
      white: new THREE.MeshPhysicalMaterial({ color: 0xf8fbfd, roughness: 0.18, clearcoat: 1, clearcoatRoughness: 0.05 }),
      blue: new THREE.MeshPhysicalMaterial({ color: 0x2b8fe8, roughness: 0.12, clearcoat: 1, clearcoatRoughness: 0.04, emissive: 0x0a3f8a, emissiveIntensity: 0.25 }),
      jelly: new THREE.MeshPhysicalMaterial({ color: 0x47aaff, roughness: 0.08, clearcoat: 1, transparent: true, opacity: 0.78, emissive: 0x0b4fae, emissiveIntensity: 0.3, side: THREE.DoubleSide }),
      glass: new THREE.MeshPhysicalMaterial({ color: 0xe8f7ff, roughness: 0.03, metalness: 0, transparent: true, opacity: 0.22, clearcoat: 1, depthWrite: false, side: THREE.DoubleSide }),
      glow: new THREE.MeshStandardMaterial({ color: 0xdff4ff, emissive: 0x6cc8ff, emissiveIntensity: 1.6 }),
      warm: new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xfff3dc, emissiveIntensity: 2.2 }),
      chrome: new THREE.MeshStandardMaterial({ color: 0xe6edf2, metalness: 1, roughness: 0.12 }),
      leaf: new THREE.MeshStandardMaterial({ color: 0x3f9a2c, roughness: 0.7 }),
      book: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.6, vertexColors: true }),
    };
    const add = (geo, mat, x = 0, y = 0, z = 0, cast = true) => {
      const m = new THREE.Mesh(geo, mat);
      m.position.set(x, y, z);
      m.castShadow = cast;
      m.receiveShadow = true;
      scene.add(m);
      return m;
    };

    // shell: glossy floor, rounded walls, ceiling with a skylight and cove light
    const outline = new THREE.Shape(roundedRectPts(0, 0, W, D, CORNER, 8).map(([x, z]) => new THREE.Vector2(x, -z)));
    const floor = add(new THREE.ShapeGeometry(outline, 12), M.floor, 0, 0, 0, false);
    floor.rotation.x = -Math.PI / 2;
    const ceil = add(new THREE.ShapeGeometry(outline, 12), M.wall, 0, H, 0, false);
    ceil.rotation.x = -Math.PI / 2;
    const walls = new GeoBuilder();
    addPrism(walls, roundedRectPts(0, 0, W, D, CORNER, 8), 0, H, new THREE.Color(1, 1, 1), { roof: false, smooth: true, tileW: 4, tileH: 4 });
    add(walls.build(), new THREE.MeshStandardMaterial({ color: 0xe6eff6, roughness: 0.4, side: THREE.BackSide, vertexColors: true }), 0, 0, 0, false);
    // glowing strip along the bottom of the walls
    const strip = new GeoBuilder();
    addPrism(strip, roundedRectPts(0, 0, W - 0.08, D - 0.08, CORNER - 0.04, 8), 0.02, 0.1, new THREE.Color(1, 1, 1), { roof: false, smooth: true });
    add(strip.build(), new THREE.MeshStandardMaterial({ color: 0xbfe8ff, emissive: 0x2a9cff, emissiveIntensity: 1.4, side: THREE.BackSide }), 0, 0, 0, false);
    const sky = add(new THREE.CircleGeometry(1.7, 48), M.warm, 1.5, H - 0.02, -2.6, false);
    sky.rotation.x = Math.PI / 2;
    const cove = add(new THREE.TorusGeometry(2.1, 0.06, 10, 72), M.glow, 1.5, H - 0.05, -2.6, false);
    cove.rotation.x = Math.PI / 2;

    // round window onto the skyline, set in a deep blue surround
    const wx = 1.6, wy = 2.45, wz = -D / 2 + 0.02, wr = 2.15;
    add(new THREE.CircleGeometry(wr, 64), new THREE.MeshBasicMaterial({ map: skylineTexture(), toneMapped: false }), wx, wy, wz, false);
    add(new THREE.TorusGeometry(wr, 0.09, 14, 96), M.white, wx, wy, wz + 0.05);
    add(new THREE.TorusGeometry(wr + 0.32, 0.26, 18, 96), M.blue, wx, wy, wz + 0.08);
    add(new THREE.BoxGeometry(0.07, wr * 2, 0.07), M.white, wx, wy, wz + 0.05);
    for (const dy of [-0.7, 0.7]) {
      const half = Math.sqrt(wr * wr - dy * dy);
      add(new THREE.BoxGeometry(half * 2, 0.07, 0.07), M.white, wx, wy + dy, wz + 0.05);
    }
    // daylight pouring in
    const sun = new THREE.DirectionalLight(0xfff6e8, 1.6);
    sun.position.set(wx + 2, 6, -12);
    sun.target.position.set(0, 0, 1);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    Object.assign(sun.shadow.camera, { left: -9, right: 9, top: 9, bottom: -9, near: 1, far: 30 });
    sun.shadow.bias = -0.0005;
    scene.add(sun, sun.target);
    scene.add(new THREE.HemisphereLight(0xffffff, 0xb9d9f5, 0.75));
    const fill = new THREE.PointLight(0x7cc6ff, 12, 14, 2);
    fill.position.set(-7.5, 2.6, -1.5);
    scene.add(fill);

    // shelving wall: a glossy blue panel with lit white shelves
    const sx = -W / 2 + 0.2;
    add(new RoundedBoxGeometry(0.36, 3.3, 5.6, 4, 0.16), M.blue, sx, 1.95, -0.8);
    const rnd = mulberry32(12);
    for (const y of [0.95, 1.75, 2.55, 3.3]) {
      add(new RoundedBoxGeometry(0.52, 0.07, 5.0, 2, 0.03), M.white, sx + 0.3, y, -0.8);
      add(new THREE.BoxGeometry(0.04, 0.025, 4.9), M.glow, sx + 0.52, y - 0.05, -0.8, false);
      for (let z = -3.0; z < 1.4; z += 0.55 + rnd() * 0.4) {
        const kind = rnd();
        if (kind < 0.35) {
          add(new THREE.CylinderGeometry(0.09, 0.07, 0.16, 16), M.white, sx + 0.32, y + 0.12, z);
          add(new THREE.IcosahedronGeometry(0.14, 1), M.leaf, sx + 0.32, y + 0.28, z);
        } else if (kind < 0.7) {
          const books = new GeoBuilder();
          let bz = z - 0.12;
          for (let i = 0; i < 4 + Math.floor(rnd() * 3); i++) {
            const hgt = 0.2 + rnd() * 0.08, t = 0.035 + rnd() * 0.02;
            const col = new THREE.Color().setHSL(0.55 + rnd() * 0.1, 0.5 + rnd() * 0.4, 0.55 + rnd() * 0.35);
            const g = new THREE.BoxGeometry(0.22, hgt, t);
            g.translate(sx + 0.3, y + 0.035 + hgt / 2, bz);
            const p = g.attributes.position;
            for (let k = 0; k < p.count; k++) books.vert(p.getX(k), p.getY(k), p.getZ(k), g.attributes.normal.getX(k), g.attributes.normal.getY(k), g.attributes.normal.getZ(k), 0, 0, col);
            const base = books.count - p.count;
            for (let k = 0; k < g.index.count; k++) books.idx.push(base + g.index.getX(k));
            bz += t + 0.005;
          }
          add(books.build(), M.book, 0, 0, 0);
        } else {
          add(new THREE.SphereGeometry(0.11, 20, 14), M.glass, sx + 0.32, y + 0.15, z, false);
        }
      }
    }
    this.colliders.addBox(-W / 2, -3.7, sx + 0.6, 2.1, 4);

    // the curved, translucent blue sofa wrapping round the coffee table
    const sofaC = new THREE.Vector3(0, 0, -1.6);
    const profile = [[2.25, 0], [2.25, 0.42], [2.4, 0.47], [2.95, 0.48], [3.0, 0.92], [3.18, 1.0], [3.35, 0.9], [3.4, 0.5], [3.38, 0]]
      .map(([r, y]) => new THREE.Vector2(r, y));
    const phi0 = -2.25, phiLen = 4.5;
    const sofa = add(new THREE.LatheGeometry(new THREE.SplineCurve(profile).getPoints(32), 96, phi0, phiLen), M.jelly, sofaC.x, 0, sofaC.z);
    sofa.castShadow = true;
    const capShape = new THREE.Shape(profile);
    for (const phi of [phi0, phi0 + phiLen]) {
      const cap = add(new THREE.ShapeGeometry(capShape), M.jelly, sofaC.x, 0, sofaC.z);
      cap.rotation.y = phi - Math.PI / 2;
    }
    // white seat cushions
    const seat = add(new THREE.LatheGeometry([new THREE.Vector2(2.32, 0.42), new THREE.Vector2(2.36, 0.52), new THREE.Vector2(2.85, 0.53), new THREE.Vector2(2.9, 0.47)], 96, phi0 + 0.05, phiLen - 0.1), M.white, sofaC.x, 0, sofaC.z);
    seat.castShadow = true;
    for (let a = phi0 + 0.1; a <= phi0 + phiLen - 0.05; a += 0.22) {
      this.colliders.addCircle(sofaC.x + Math.sin(a) * 2.85, sofaC.z + Math.cos(a) * 2.85, 0.6, 1.2, false);
    }
    // glowing ring set into the floor round the seating
    const inlay = add(new THREE.RingGeometry(3.6, 3.72, 96), M.glow, sofaC.x, 0.005, sofaC.z, false);
    inlay.rotation.x = -Math.PI / 2;

    // oval coffee table with a glowing base and a glass plant bowl
    const table = add(new THREE.CylinderGeometry(0.95, 0.95, 0.36, 64), M.white, 0, 0.2, -1.6);
    table.scale.set(1.45, 1, 0.9);
    const tableGlow = add(new THREE.TorusGeometry(0.9, 0.035, 10, 64), M.glow, 0, 0.04, -1.6, false);
    tableGlow.rotation.x = Math.PI / 2;
    tableGlow.scale.set(1.45, 0.9, 1);
    add(new THREE.SphereGeometry(0.22, 24, 16, 0, TAU, Math.PI * 0.35, Math.PI * 0.65), M.glass, 0.4, 0.55, -1.55, false);
    add(new THREE.IcosahedronGeometry(0.13, 1), M.leaf, 0.4, 0.5, -1.55);
    add(new RoundedBoxGeometry(0.34, 0.03, 0.24, 2, 0.01), M.white, -0.45, 0.4, -1.7);
    this.colliders.addCircle(0, -1.6, 1.25, 1, false);

    // hanging bubble chairs by the window
    for (const [x, z, ry] of [[6.0, -5.8, 0.5], [7.8, -3.6, 0.9]]) {
      const chair = new THREE.Group();
      chair.position.set(x, 1.15, z);
      chair.rotation.y = ry + Math.PI;
      const shell = new THREE.Mesh(new THREE.SphereGeometry(0.72, 40, 28, 0.55, TAU - 1.1), M.glass);
      const rim = new THREE.Mesh(new THREE.TorusGeometry(0.62, 0.035, 10, 48), M.chrome);
      rim.position.set(0, 0, 0.38);
      const cushion = new THREE.Mesh(new THREE.SphereGeometry(0.5, 24, 16), M.white);
      cushion.scale.set(1, 0.32, 0.9);
      cushion.position.y = -0.38;
      chair.add(shell, rim, cushion);
      scene.add(chair);
      add(new THREE.CylinderGeometry(0.02, 0.02, H - 1.87, 8), M.chrome, x, (H + 1.87) / 2, z, false);
      this.colliders.addCircle(x, z, 0.8, 2, false);
      this.updaters.push((t) => {
        chair.rotation.z = Math.sin(t * 0.7 + x) * 0.03;
      });
    }

    // glass pendant orbs over the table
    for (const [x, z, y] of [[-0.7, -2.1, 3.0], [0.6, -1.4, 3.3], [0.1, -2.5, 2.7], [-3.5, -5.2, 3.1]]) {
      add(new THREE.CylinderGeometry(0.008, 0.008, H - y, 6), M.chrome, x, (H + y) / 2, z, false);
      add(new THREE.SphereGeometry(0.34, 32, 20), M.glass, x, y - 0.34, z, false);
      add(new THREE.SphereGeometry(0.09, 16, 10), M.warm, x, y - 0.34, z, false);
    }
    const lamp = new THREE.PointLight(0xfff1dc, 10, 9, 2);
    lamp.position.set(0, 2.6, -2);
    scene.add(lamp);

    // a tall plant in a white pot by the shelves
    add(new THREE.CylinderGeometry(0.32, 0.24, 0.6, 28), M.white, -8.4, 0.3, -6.2);
    for (let i = 0; i < 7; i++) {
      const a = (i / 7) * TAU;
      const leaf = add(new THREE.SphereGeometry(0.3, 16, 10), M.leaf, -8.4 + Math.cos(a) * 0.22, 1.0 + (i % 3) * 0.28, -6.2 + Math.sin(a) * 0.22);
      leaf.scale.set(0.6, 1.4, 0.35);
      leaf.rotation.set(Math.sin(a) * 0.6, a, Math.cos(a) * 0.6);
    }
    this.colliders.addCircle(-8.4, -6.2, 0.5, 2, false);

    this.buildDesk(add);

    // exit circle by the door
    this.portal = makePortal();
    this.portal.position.copy(this.exit);
    scene.add(this.portal);

    scene.environment = null;
    this.envReady = false;
  }

  // A clear acrylic desk with the Bondi Blue computer, keyboard and mouse.
  buildDesk(add) {
    const M = this.mats;
    const acrylic = new THREE.MeshPhysicalMaterial({ color: 0xcdeeff, roughness: 0.02, transparent: true, opacity: 0.42, clearcoat: 1, depthWrite: false, side: THREE.DoubleSide });
    const bondi = new THREE.MeshPhysicalMaterial({ color: 0x0aa9ba, roughness: 0.12, clearcoat: 1, transparent: true, opacity: 0.82, emissive: 0x05505a, emissiveIntensity: 0.25 });
    const shell = new THREE.MeshPhysicalMaterial({ color: 0xe8edef, roughness: 0.2, clearcoat: 1, transparent: true, opacity: 0.95 });
    const keyMat = new THREE.MeshStandardMaterial({ color: 0x2b3236, roughness: 0.5 });
    const dx = W / 2 - 1.15, dz = 2.2;
    const desk = new THREE.Group();
    desk.position.set(dx, 0, dz);
    desk.rotation.y = -Math.PI / 2; // desk front faces into the room (-x)
    this.scene.add(desk);
    const put = (geo, mat, x, y, z, cast = true) => {
      const m = new THREE.Mesh(geo, mat);
      m.position.set(x, y, z);
      m.castShadow = cast;
      m.receiveShadow = true;
      desk.add(m);
      return m;
    };
    put(new RoundedBoxGeometry(1.8, 0.04, 0.8, 2, 0.015), acrylic, 0, 0.76, 0, false);
    for (const x of [-0.88, 0.88]) put(new RoundedBoxGeometry(0.04, 0.76, 0.8, 2, 0.015), acrylic, x, 0.38, 0, false);
    for (const z of [-0.39, 0.39]) put(new THREE.BoxGeometry(1.8, 0.012, 0.012), M.glow, 0, 0.78, z, false);
    for (const x of [-0.9, 0.9]) put(new THREE.BoxGeometry(0.012, 0.012, 0.8), M.glow, x, 0.78, 0, false);

    // the computer: translucent white face, a tapered Bondi Blue back
    const pc = new THREE.Group();
    pc.position.set(0, 0.78, -0.12);
    desk.add(pc);
    const back = new RoundedBoxGeometry(0.4, 0.4, 0.42, 4, 0.08);
    const p = back.attributes.position;
    for (let i = 0; i < p.count; i++) {
      const z = p.getZ(i);
      const k = z < 0 ? 1 + (z / 0.21) * 0.38 : 1;
      p.setXYZ(i, p.getX(i) * k, p.getY(i) * k, z);
    }
    back.computeVertexNormals();
    const b = new THREE.Mesh(back, bondi);
    b.position.set(0, 0.215, -0.08);
    b.castShadow = true;
    pc.add(b);
    const face = new THREE.Mesh(new RoundedBoxGeometry(0.42, 0.42, 0.08, 4, 0.035), shell);
    face.position.set(0, 0.215, 0.14);
    face.castShadow = true;
    pc.add(face);
    const screen = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 0.225), new THREE.MeshBasicMaterial({ map: screenTexture(), toneMapped: false }));
    screen.position.set(0, 0.25, 0.181);
    pc.add(screen);
    const bezel = new THREE.Mesh(new THREE.PlaneGeometry(0.33, 0.255), new THREE.MeshStandardMaterial({ color: 0x1a2328, roughness: 0.2 }));
    bezel.position.set(0, 0.25, 0.1805);
    pc.add(bezel);
    // the blue chin with its speaker grilles
    const chin = new THREE.Mesh(new RoundedBoxGeometry(0.42, 0.07, 0.085, 3, 0.03), bondi);
    chin.position.set(0, 0.065, 0.145);
    pc.add(chin);
    for (const sx of [-0.15, 0.15]) {
      const sp = new THREE.Mesh(new THREE.CircleGeometry(0.022, 20), new THREE.MeshStandardMaterial({ color: 0x067c88, roughness: 0.4 }));
      sp.position.set(sx, 0.065, 0.189);
      pc.add(sp);
    }
    const handle = new THREE.Mesh(new THREE.TorusGeometry(0.07, 0.014, 10, 24, Math.PI), bondi);
    handle.position.set(0, 0.43, -0.08);
    handle.rotation.y = Math.PI / 2;
    pc.add(handle);
    const foot = new THREE.Mesh(new RoundedBoxGeometry(0.3, 0.025, 0.3, 2, 0.01), shell);
    foot.position.set(0, 0.0125, 0);
    pc.add(foot);

    // keyboard with dark keys on a translucent blue base
    const kb = new THREE.Group();
    kb.position.set(0, 0.79, 0.2);
    desk.add(kb);
    kb.add(new THREE.Mesh(new RoundedBoxGeometry(0.44, 0.022, 0.15, 2, 0.008), bondi));
    const keys = new THREE.InstancedMesh(new RoundedBoxGeometry(0.022, 0.012, 0.022, 1, 0.004), keyMat, 15 * 5);
    let i = 0;
    const m4 = new THREE.Matrix4();
    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 15; c++) keys.setMatrixAt(i++, m4.makeTranslation(-0.19 + c * 0.027, 0.016, -0.054 + r * 0.027));
    }
    kb.add(keys);
    // the round "hockey puck" mouse
    const mouse = new THREE.Mesh(new THREE.CylinderGeometry(0.034, 0.034, 0.022, 28), bondi);
    mouse.position.set(0.33, 0.792, 0.2);
    desk.add(mouse);
    const mtop = new THREE.Mesh(new THREE.SphereGeometry(0.03, 20, 10, 0, TAU, 0, Math.PI / 2), shell);
    mtop.scale.y = 0.35;
    mtop.position.set(0.33, 0.803, 0.2);
    desk.add(mtop);

    // a clear chair to go with it
    const seat = put(new RoundedBoxGeometry(0.5, 0.05, 0.48, 2, 0.02), acrylic, 0, 0.47, 0.75, false);
    seat.castShadow = false;
    put(new RoundedBoxGeometry(0.5, 0.5, 0.04, 2, 0.02), acrylic, 0, 0.75, 0.98, false);
    for (const x of [-0.22, 0.22]) for (const z of [0.55, 0.95]) put(new THREE.CylinderGeometry(0.015, 0.015, 0.46, 8), acrylic, x, 0.23, z, false);

    this.colliders.addBox(dx - 0.45, dz - 0.95, dx + 0.45, dz + 0.95, 1.2);
    this.colliders.addCircle(dx - 0.75, dz, 0.35, 1, false);
  }

  // Build the room's reflections once a renderer exists.
  prepare(renderer) {
    if (this.envReady) return;
    const pmrem = new THREE.PMREMGenerator(renderer);
    this.scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.03).texture;
    this.scene.environmentIntensity = 0.45;
    pmrem.dispose();
    this.envReady = true;
  }

  // Is (x, z) inside the room, at least `margin` from the walls?
  inside(x, z, margin = 0.3) {
    const hw = W / 2 - margin, hd = D / 2 - margin, r = CORNER - margin;
    const qx = Math.abs(x) - (hw - r), qz = Math.abs(z) - (hd - r);
    if (qx <= 0 || qz <= 0) return Math.abs(x) <= hw && Math.abs(z) <= hd;
    return Math.hypot(qx, qz) <= r;
  }

  update(t) {
    this.portal.userData.update(t);
    for (const f of this.updaters) f(t);
  }
}
