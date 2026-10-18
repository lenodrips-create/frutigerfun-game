import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { clamp, lerp } from './util.js';

// "Aero", the player character: a glossy blue buddy in the style of the
// classic messenger icon. A round head on a bell-shaped body with little arm
// bumps, bright cyan in the middle and deep blue at the edges.
//
// If assets/character.glb exists (for example the Sketchfab "Frutiger Aero
// Character V2" exported as glTF), it is loaded and used instead.

// Glossy jelly: cyan glow facing the camera, a dark blue outline at the rim.
function jelly(color) {
  const m = new THREE.MeshPhysicalMaterial({
    color, roughness: 0.15, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.03,
    emissive: 0x0060ff, emissiveIntensity: 0.25,
  });
  m.onBeforeCompile = (sh) => {
    sh.fragmentShader = sh.fragmentShader.replace('#include <opaque_fragment>', `
      // paint the icon gradient ourselves, keep only the light's shading and gloss
      float facing = clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0);
      vec3 jellyCol = mix(vec3(0.0, 0.025, 0.2), vec3(0.0, 0.2, 0.95), smoothstep(0.04, 0.42, facing));
      jellyCol = mix(jellyCol, vec3(0.08, 0.85, 1.0), pow(facing, 3.5) * 0.75);
      float lit = dot(totalDiffuse, vec3(0.333)) / max(dot(diffuseColor.rgb, vec3(0.333)), 0.001);
      vec3 gloss = totalSpecular;
      #ifdef USE_CLEARCOAT
        gloss += (clearcoatSpecularDirect + clearcoatSpecularIndirect) * material.clearcoat;
      #endif
      outgoingLight = jellyCol * clamp(lit * 0.35, 0.6, 1.15) + gloss * 0.7;
      #include <opaque_fragment>`);
  };
  m.customProgramCacheKey = () => 'aero-jelly';
  return m;
}

const mat = { body: jelly(0x0a6cff) };

function part(parent, geo, material, x = 0, y = 0, z = 0, sx = 1, sy = 1, sz = 1) {
  const m = new THREE.Mesh(geo, material);
  m.position.set(x, y, z);
  m.scale.set(sx, sy, sz);
  m.castShadow = true;
  parent.add(m);
  return m;
}

function pivot(parent, x, y, z) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  parent.add(g);
  return g;
}

export class Character {
  constructor() {
    this.root = new THREE.Group();
    this.state = { speed: 0, grounded: true, vy: 0, wave: false };
    this.phase = 0;
    this.amp = 0;
    this.air = 0;
    this.waveAmt = 0;
    this.time = 0;
    this.mixer = null;
    this.buildProcedural();
  }

  buildProcedural() {
    const model = (this.model = new THREE.Group());
    this.root.add(model);
    // the bounce group: everything squashes and hops together
    const hips = (this.hips = pivot(model, 0, 0, 0));
    const torso = (this.torso = pivot(hips, 0, 0, 0));
    const profile = [[0, 0], [0.4, 0], [0.47, 0.03], [0.5, 0.1], [0.5, 0.36], [0.48, 0.58], [0.42, 0.76], [0.31, 0.89], [0.16, 0.96], [0, 0.98]]
      .map(([r, y]) => new THREE.Vector2(r, y));
    const bell = new THREE.LatheGeometry(new THREE.SplineCurve(profile).getPoints(40), 48);
    part(torso, bell, mat.body, 0, 0, 0, 1, 1, 0.82);
    this.head = pivot(torso, 0, 1.0, 0);
    part(this.head, new THREE.SphereGeometry(0.33, 48, 32), mat.body, 0, 0.3, 0);
    this.arms = [];
    for (const sx of [1, -1]) {
      const shoulder = pivot(torso, sx * 0.43, 0.74, 0);
      const arm = part(shoulder, new THREE.CapsuleGeometry(0.115, 0.34, 10, 20), mat.body, 0, -0.27, 0, 1, 1, 0.85);
      arm.rotation.z = sx * 0.08;
      this.arms.push({ shoulder, side: sx });
    }
  }

  // Swap in a glTF model if one is provided. Resolves true when it loaded.
  async tryLoadModel(url) {
    if (location.protocol === 'file:') return false;
    try {
      const head = await fetch(url, { method: 'HEAD' });
      if (!head.ok) return false;
      const gltf = await new GLTFLoader().loadAsync(url);
      const obj = gltf.scene;
      const box = new THREE.Box3().setFromObject(obj);
      const size = box.getSize(new THREE.Vector3());
      const s = 1.75 / (size.y || 1);
      obj.scale.setScalar(s);
      obj.position.set(-((box.min.x + box.max.x) / 2) * s, -box.min.y * s, -((box.min.z + box.max.z) / 2) * s);
      obj.traverse((o) => {
        if (o.isMesh) o.castShadow = true;
      });
      this.root.remove(this.model);
      this.model = new THREE.Group();
      this.model.add(obj);
      this.root.add(this.model);
      this.hips = null;
      if (gltf.animations.length) {
        this.mixer = new THREE.AnimationMixer(obj);
        const find = (re) => gltf.animations.find((a) => re.test(a.name));
        this.clips = {
          idle: find(/idle|stand/i) ?? gltf.animations[0],
          walk: find(/walk/i),
          run: find(/run|jog/i),
        };
        this.actions = {};
        for (const [k, clip] of Object.entries(this.clips)) {
          if (!clip) continue;
          const a = this.mixer.clipAction(clip);
          a.play();
          a.setEffectiveWeight(k === 'idle' ? 1 : 0);
          this.actions[k] = a;
        }
      }
      return true;
    } catch {
      return false;
    }
  }

  update(dt) {
    this.time += dt;
    const st = this.state;
    if (!this.hips) return this.updateLoaded(dt);
    const t = this.time;
    const k = 1 - Math.exp(-dt * 10);
    const run = clamp((st.speed - 4.5) / 3.5, 0, 1);
    this.amp = lerp(this.amp, st.grounded ? clamp(st.speed / 4, 0, 1) : 0, k);
    this.air = lerp(this.air, st.grounded ? 0 : 1, 1 - Math.exp(-dt * 12));
    this.waveAmt = lerp(this.waveAmt, st.wave ? 1 : 0, 1 - Math.exp(-dt * 5));
    if (st.speed > 0.15 && st.grounded) this.phase += dt * (st.speed * 2.3 + 1.5) / (1 + run * 0.3);
    const a = this.amp, air = this.air, sw = Math.sin(this.phase);
    const hop = Math.abs(sw);

    // waddle: little hops, side to side rocking, squash on landing
    const breathe = Math.sin(t * 2.2) * 0.015;
    this.hips.position.y = hop * 0.13 * a;
    this.hips.rotation.z = Math.cos(this.phase) * 0.09 * a;
    this.torso.rotation.x = run * 0.18 + a * 0.05 - air * 0.08;
    const squash = 1 + breathe + (1 - hop) * 0.07 * a - air * 0.06 * (st.vy > 0 ? -1 : 1);
    this.torso.scale.set(1 / Math.sqrt(squash), squash, 1 / Math.sqrt(squash));
    this.head.rotation.y = (1 - a) * Math.sin(t * 0.45) * 0.25 * (1 - this.waveAmt);
    this.head.rotation.z = this.waveAmt * 0.12 + Math.sin(t * 1.1) * 0.03;
    this.head.position.y = 1.0 + Math.sin(t * 2.2 + 0.6) * 0.01;

    for (const arm of this.arms) {
      const s = arm.side;
      const wave = s < 0 ? this.waveAmt : 0;
      arm.shoulder.rotation.x = lerp(sw * s * a * 0.7, -0.2, wave);
      arm.shoulder.rotation.z = lerp(s * (0.05 + 0.04 * Math.sin(t * 1.3)) + s * air * 0.9, -2.5 + Math.sin(t * 8) * 0.3, wave);
    }
  }

  updateLoaded(dt) {
    if (!this.mixer) {
      this.model.position.y = Math.abs(Math.sin(this.time * this.state.speed * 1.5)) * 0.05;
      return;
    }
    const sp = this.state.speed;
    const w = { idle: clamp(1 - sp / 2, 0, 1), walk: clamp(1 - Math.abs(sp - 3.5) / 3, 0, 1), run: clamp((sp - 4) / 3, 0, 1) };
    if (!this.actions.run) w.walk = Math.max(w.walk, w.run);
    if (!this.actions.walk) w.idle = 1;
    const sum = Object.keys(this.actions).reduce((s, k2) => s + w[k2], 0) || 1;
    for (const [k2, act] of Object.entries(this.actions)) act.setEffectiveWeight(w[k2] / sum);
    this.mixer.update(dt);
  }
}
