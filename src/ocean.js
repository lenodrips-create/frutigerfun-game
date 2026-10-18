import * as THREE from 'three';
import { makePortal } from './apartment.js';
import { Bubbles } from './bubbles.js';
import { Colliders } from './physics.js';
import { softDotTexture } from './textures.js';
import { mulberry32 } from './util.js';

// Under the water: open blue sea lit from a rippling, sunlit surface, with
// light rays, a rippled sand floor with caustics, rocks and coral, schools
// of clownfish and butterflyfish, floating glass bubbles and streams of
// little ones. Hold Space to swim up; let go to sink slowly.

const SURFACE = 16;
const RADIUS = 70;
const TAU = Math.PI * 2;

// ---- textures ----------------------------------------------------------------

// Tileable caustics: bright lines where Voronoi cells meet.
function causticsTexture() {
  const S = 256, N = 18;
  const rnd = mulberry32(404);
  const pts = Array.from({ length: N }, () => [rnd() * S, rnd() * S]);
  const c = document.createElement('canvas');
  c.width = c.height = S;
  const g = c.getContext('2d');
  const img = g.createImageData(S, S);
  for (let y = 0; y < S; y++) {
    for (let x = 0; x < S; x++) {
      let f1 = 1e9, f2 = 1e9;
      for (const [px, py] of pts) {
        for (let ox = -S; ox <= S; ox += S) {
          for (let oy = -S; oy <= S; oy += S) {
            const d = Math.hypot(x - px - ox, y - py - oy);
            if (d < f1) { f2 = f1; f1 = d; } else if (d < f2) f2 = d;
          }
        }
      }
      const v = Math.max(0, 1 - (f2 - f1) / 9) ** 2.2 * 255;
      const o = (y * S + x) * 4;
      img.data[o] = img.data[o + 1] = img.data[o + 2] = v;
      img.data[o + 3] = 255;
    }
  }
  g.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}

function rayTexture() {
  const c = document.createElement('canvas');
  c.width = 64;
  c.height = 256;
  const g = c.getContext('2d');
  const v = g.createLinearGradient(0, 0, 0, 256);
  v.addColorStop(0, 'rgba(255,255,255,0.9)');
  v.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = v;
  g.fillRect(0, 0, 64, 256);
  g.globalCompositeOperation = 'destination-in';
  const h = g.createLinearGradient(0, 0, 64, 0);
  h.addColorStop(0, 'rgba(0,0,0,0)');
  h.addColorStop(0.5, 'rgba(0,0,0,1)');
  h.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = h;
  g.fillRect(0, 0, 64, 256);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

// ---- fish ---------------------------------------------------------------------

// Bands of colour along the body, nose at +z = 1, tail at z = -1.
const KINDS = {
  clown: {
    size: 1.35, shape: [0.42, 0.5, 1],
    color(z) {
      const orange = [1, 0.36, 0.02], white = [1, 1, 1], black = [0.05, 0.03, 0.02];
      for (const [c, w] of [[0.5, 0.11], [0.02, 0.13], [-0.6, 0.08]]) {
        const d = Math.abs(z - c);
        if (d < w) return white;
        if (d < w + 0.045) return black;
      }
      return orange;
    },
    fin: [1, 0.33, 0.02], finEdge: [0.05, 0.03, 0.02],
  },
  butterfly: {
    size: 1.6, shape: [0.22, 0.85, 1],
    color(z, y) {
      const white = [0.97, 0.97, 0.95], yellow = [1, 0.82, 0.05], black = [0.05, 0.05, 0.06];
      if (Math.abs(z - 0.62) < 0.07) return black;
      if (z < -0.3 + y * 0.35) return yellow;
      // fine diagonal stripes on the white body
      return Math.sin((z * 1.2 + y) * 26) > 0.85 ? [0.55, 0.55, 0.58] : white;
    },
    fin: [1, 0.82, 0.05], finEdge: [0.05, 0.05, 0.06],
  },
};

// Let the fish's own colours shine a little, so they stay bright when lit
// from above.
function glow(mat, amount) {
  mat.onBeforeCompile = (sh) => {
    sh.fragmentShader = sh.fragmentShader.replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
      totalEmissiveRadiance += vColor * ${amount.toFixed(2)};`);
  };
  mat.customProgramCacheKey = () => 'fishglow' + amount;
  return mat;
}

function colorize(geo, fn) {
  const p = geo.attributes.position;
  const col = new Float32Array(p.count * 3);
  for (let i = 0; i < p.count; i++) {
    const c = fn(p.getZ(i), p.getY(i), p.getX(i));
    col.set(c, i * 3);
  }
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  return geo;
}

function finGeometry(points, kind) {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(points.flat(), 3));
  g.computeVertexNormals();
  const k = KINDS[kind];
  return colorize(g, (z) => (z < -1.2 || z > 0.6 ? k.finEdge : k.fin));
}

function makeFish(kind, mats) {
  const k = KINDS[kind];
  const fish = new THREE.Group();
  const body = new THREE.SphereGeometry(1, 28, 18);
  body.scale(k.shape[0], k.shape[1], k.shape[2]);
  colorize(body, (z, y) => k.color(z, y));
  const b = new THREE.Mesh(body, mats.body);
  fish.add(b);
  const tail = new THREE.Group();
  tail.position.z = -0.92;
  tail.add(new THREE.Mesh(finGeometry([[0, 0, 0], [0, 0.45, -0.55], [0, 0.02, -0.38], [0, 0, 0], [0, 0.02, -0.38], [0, -0.45, -0.55]], kind), mats.fin));
  fish.add(tail);
  fish.add(new THREE.Mesh(finGeometry([[0, k.shape[1] * 0.85, 0.35], [0, k.shape[1] * 1.25, -0.2], [0, k.shape[1] * 0.7, -0.65]], kind), mats.fin));
  for (const sx of [-1, 1]) {
    const eye = new THREE.Mesh(mats.eyeGeo, mats.eye);
    eye.position.set(sx * k.shape[0] * 0.78, k.shape[1] * 0.22, 0.72);
    fish.add(eye);
    const shine = new THREE.Mesh(mats.eyeGeo, mats.shine);
    shine.scale.setScalar(0.35);
    shine.position.set(sx * k.shape[0] * 0.86, k.shape[1] * 0.28, 0.76);
    fish.add(shine);
  }
  fish.scale.setScalar(k.size);
  fish.userData.tail = tail;
  return fish;
}

// ---- the sea ------------------------------------------------------------------

export class Ocean {
  constructor() {
    const scene = (this.scene = new THREE.Scene());
    this.colliders = new Colliders();
    this.floorY = 0;
    this.ceiling = SURFACE - 0.8;
    this.swim = true;
    this.speedScale = 0.7;
    this.spawn = { x: 0, z: 10, facing: Math.PI, y: 5 };
    this.exit = new THREE.Vector3(0, 0, 15);
    this.time = 0;
    scene.fog = new THREE.Fog(0x1580d8, 8, 95);

    // water all around: bright above, deep blue below
    const sky = new THREE.Mesh(new THREE.SphereGeometry(400, 32, 16), new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false, fog: false,
      vertexShader: 'varying vec3 vDir; void main() { vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
      fragmentShader: `varying vec3 vDir;
        void main() {
          float h = vDir.y;
          vec3 deep = vec3(0.01, 0.16, 0.42), mid = vec3(0.05, 0.47, 0.84), top = vec3(0.55, 0.88, 1.0);
          vec3 c = h < 0.0 ? mix(mid, deep, smoothstep(0.0, -0.6, h)) : mix(mid, top, smoothstep(0.0, 0.85, h));
          c += vec3(1.0, 1.0, 0.95) * pow(max(h, 0.0), 12.0) * 0.6;
          gl_FragColor = vec4(c, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,
    }));
    sky.frustumCulled = false;
    this.sky = sky;
    scene.add(sky);

    // the rippling, sunlit surface seen from below
    this.surfaceUniforms = { uTime: { value: 0 } };
    const surface = new THREE.Mesh(new THREE.PlaneGeometry(600, 600, 160, 160), new THREE.ShaderMaterial({
      uniforms: this.surfaceUniforms, transparent: true, side: THREE.DoubleSide, depthWrite: false, fog: false,
      vertexShader: `uniform float uTime; varying vec2 vXY; varying float vH; varying vec3 vWorld;
        void main() {
          vec3 p = position;
          float h = sin(p.x * 0.18 + uTime * 1.3) * 0.6 + sin(p.y * 0.23 - uTime * 1.1) * 0.5 + sin((p.x + p.y) * 0.5 + uTime * 2.0) * 0.18;
          p.z += h;
          vXY = position.xy; vH = h;
          vWorld = (modelMatrix * vec4(p, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }`,
      fragmentShader: `uniform float uTime; varying vec2 vXY; varying float vH; varying vec3 vWorld;
        void main() {
          // soft bright bands where the waves focus the sunlight, and a few glints
          float bands = pow(0.5 + 0.5 * sin(vXY.x * 0.45 + vH * 2.2 + uTime * 0.8) * sin(vXY.y * 0.38 - vH * 1.8 - uTime * 0.6), 3.0);
          float glints = pow(max(sin(vXY.x * 0.9 - uTime * 1.6 + vH * 4.0) * sin(vXY.y * 0.8 + uTime * 1.3), 0.0), 60.0);
          vec3 c = mix(vec3(0.25, 0.68, 0.98), vec3(0.8, 0.95, 1.0), smoothstep(-0.9, 1.1, vH));
          c += vec3(0.9, 0.97, 1.0) * (bands * 0.45 + glints * 1.5);
          float d = length(vWorld.xz - cameraPosition.xz);
          float a = mix(0.92, 0.0, smoothstep(60.0, 220.0, d));
          gl_FragColor = vec4(c, a);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,
    }));
    surface.rotation.x = Math.PI / 2;
    surface.position.y = SURFACE;
    surface.renderOrder = 2;
    this.surface = surface;
    scene.add(surface);

    // light: sun from above, a cool fill, cyan bounce from the sand
    const sun = new THREE.DirectionalLight(0xe8fbff, 2.4);
    sun.position.set(8, 40, 6);
    scene.add(sun, sun.target);
    scene.add(new THREE.HemisphereLight(0x9fe2ff, 0x0b4f8f, 1.5));

    // rippled sand floor with moving caustics
    const floorGeo = new THREE.PlaneGeometry(260, 260, 120, 120);
    floorGeo.rotateX(-Math.PI / 2);
    const fp = floorGeo.attributes.position;
    for (let i = 0; i < fp.count; i++) {
      const x = fp.getX(i), z = fp.getZ(i);
      const r = Math.hypot(x, z);
      fp.setY(i, Math.sin(x * 0.35 + z * 0.12) * 0.08 + Math.sin(z * 0.08) * 0.6 + Math.max(0, r - RADIUS + 10) * 0.35 - 0.1);
    }
    floorGeo.computeVertexNormals();
    this.caustics = causticsTexture();
    this.caustics.repeat.set(26, 26);
    const floor = new THREE.Mesh(floorGeo, new THREE.MeshStandardMaterial({
      color: 0xe8d9b0, roughness: 1, emissive: 0x9ff0ff, emissiveIntensity: 0.55, emissiveMap: this.caustics,
    }));
    scene.add(floor);

    // light rays slanting down from the surface
    const rayMat = new THREE.MeshBasicMaterial({ map: rayTexture(), transparent: true, opacity: 0.22, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, fog: false });
    this.rays = [];
    const rnd = mulberry32(17);
    for (let i = 0; i < 22; i++) {
      const ray = new THREE.Mesh(new THREE.PlaneGeometry(2 + rnd() * 4, 22), rayMat);
      ray.position.set((rnd() - 0.5) * 70, SURFACE - 10, (rnd() - 0.5) * 70);
      ray.rotation.z = 0.25;
      ray.userData = { phase: rnd() * TAU, base: ray.position.clone() };
      this.rays.push(ray);
      scene.add(ray);
    }

    // rocks and coral
    const rockMat = new THREE.MeshStandardMaterial({ color: 0x8a95a6, roughness: 0.9, flatShading: true });
    const coralMats = [0xff6f91, 0xffa94d, 0xb57bff, 0x4fd1c5].map((c) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.6 }));
    for (let i = 0; i < 26; i++) {
      const a = rnd() * TAU, r = 12 + rnd() * 50;
      const x = Math.cos(a) * r, z = Math.sin(a) * r;
      if (Math.hypot(x, z - 12) < 7) continue;
      const s = 0.8 + rnd() * 2.2;
      const rock = new THREE.Mesh(new THREE.IcosahedronGeometry(s, 1), rockMat);
      rock.scale.y = 0.6;
      rock.position.set(x, 0, z);
      rock.rotation.y = rnd() * TAU;
      scene.add(rock);
      this.colliders.addCircle(x, z, s * 0.85, s * 0.5, false);
      for (let k = 0; k < 4; k++) {
        const h = 0.5 + rnd() * 1.4;
        const coral = new THREE.Mesh(new THREE.CapsuleGeometry(0.12 + rnd() * 0.12, h, 4, 10), coralMats[Math.floor(rnd() * 4)]);
        coral.position.set(x + (rnd() - 0.5) * s, s * 0.45 + h / 2, z + (rnd() - 0.5) * s);
        coral.rotation.set((rnd() - 0.5) * 0.6, 0, (rnd() - 0.5) * 0.6);
        scene.add(coral);
      }
    }
    // swaying seaweed
    this.weeds = [];
    const weedMat = new THREE.MeshStandardMaterial({ color: 0x5fd06a, emissive: 0x1d6b2a, emissiveIntensity: 0.6, roughness: 0.7, side: THREE.DoubleSide });
    for (let i = 0; i < 60; i++) {
      const a = rnd() * TAU, r = 6 + rnd() * 55;
      const h = 2 + rnd() * 5;
      const weed = new THREE.Mesh(new THREE.PlaneGeometry(0.5, h, 1, 8), weedMat);
      weed.geometry.translate(0, h / 2, 0);
      weed.position.set(Math.cos(a) * r, 0, Math.sin(a) * r);
      weed.rotation.y = rnd() * TAU;
      weed.userData = { phase: rnd() * TAU, base: weed.geometry.attributes.position.array.slice() };
      this.weeds.push(weed);
      scene.add(weed);
    }

    // fish in schools, each school looping its own path
    const mats = {
      body: glow(new THREE.MeshPhysicalMaterial({ vertexColors: true, roughness: 0.25, clearcoat: 1, clearcoatRoughness: 0.1 }), 0.55),
      fin: glow(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.5, side: THREE.DoubleSide, transparent: true, opacity: 0.92 }), 0.5),
      eye: new THREE.MeshStandardMaterial({ color: 0x050505, roughness: 0.1 }),
      shine: new THREE.MeshBasicMaterial({ color: 0xffffff }),
      eyeGeo: new THREE.SphereGeometry(0.08, 12, 8),
    };
    this.schools = [];
    const schoolDefs = [['clown', 6, 9, 5], ['clown', 5, 16, 9], ['clown', 4, 24, 4], ['butterfly', 4, 13, 7], ['butterfly', 5, 30, 11], ['clown', 5, 38, 6]];
    schoolDefs.forEach(([kind, n, radius, height], si) => {
      const fish = [];
      for (let i = 0; i < n; i++) {
        const f = makeFish(kind, mats);
        f.userData.offset = new THREE.Vector3((rnd() - 0.5) * 3, (rnd() - 0.5) * 2, (rnd() - 0.5) * 3);
        f.userData.phase = rnd() * TAU;
        scene.add(f);
        fish.push(f);
      }
      this.schools.push({ fish, radius, height, speed: (0.15 + rnd() * 0.12) * (si % 2 ? -1 : 1), phase: rnd() * TAU });
    });

    // big floating glass bubbles you can pop, and streams of little ones
    this.bubbles = new Bubbles(scene, new THREE.Vector3(0.2, 1, 0.1).normalize(), 30, { ground: () => this.floorY, top: SURFACE - 1 });
    this.bubbles.radius = 26;
    this.bubbles.reset(new THREE.Vector3(0, 0, 0));
    this.streams = [];
    const N = 900;
    const pos = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      const vent = i % 9;
      const a = vent * 2.4, r = 8 + vent * 5;
      pos.set([Math.cos(a) * r + (rnd() - 0.5) * 0.6, rnd() * SURFACE, Math.sin(a) * r + (rnd() - 0.5) * 0.6], i * 3);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    this.points = new THREE.Points(g, new THREE.PointsMaterial({ size: 0.22, map: softDotTexture(), transparent: true, depthWrite: false, color: 0xeefcff, opacity: 0.9 }));
    this.points.frustumCulled = false;
    scene.add(this.points);

    // the way back
    this.portal = makePortal('Back to land');
    this.portal.position.copy(this.exit);
    scene.add(this.portal);
  }

  inside(x, z, margin = 0.3) {
    return Math.hypot(x, z) < RADIUS - margin;
  }

  update(t, dt = 1 / 60, camera, player, onPop) {
    this.surfaceUniforms.uTime.value = t;
    this.caustics.offset.set(t * 0.02, t * 0.013);
    this.portal.userData.update(t);
    if (camera) this.sky.position.copy(camera.position);
    for (const r of this.rays) {
      r.position.x = r.userData.base.x + Math.sin(t * 0.3 + r.userData.phase) * 2;
      r.material.opacity = 0.22;
      if (camera) r.rotation.y = Math.atan2(camera.position.x - r.position.x, camera.position.z - r.position.z);
    }
    for (const w of this.weeds) {
      const p = w.geometry.attributes.position, b = w.userData.base;
      for (let i = 0; i < p.count; i++) {
        const y = b[i * 3 + 1];
        p.setX(i, b[i * 3] + Math.sin(t * 1.2 + w.userData.phase + y * 0.6) * y * 0.08);
      }
      p.needsUpdate = true;
    }
    for (const s of this.schools) {
      const a = t * s.speed + s.phase;
      const center = new THREE.Vector3(Math.cos(a) * s.radius, s.height + Math.sin(a * 2) * 1.5, Math.sin(a * 1.3) * s.radius * 0.8);
      const ahead = new THREE.Vector3(Math.cos(a + 0.05 * Math.sign(s.speed)) * s.radius, s.height + Math.sin((a + 0.05 * Math.sign(s.speed)) * 2) * 1.5, Math.sin((a + 0.05 * Math.sign(s.speed)) * 1.3) * s.radius * 0.8);
      for (const f of s.fish) {
        const o = f.userData.offset;
        f.position.copy(center).add(o).add(new THREE.Vector3(0, Math.sin(t * 2 + f.userData.phase) * 0.15, 0));
        f.lookAt(ahead.clone().add(o));
        f.userData.tail.rotation.y = Math.sin(t * 9 + f.userData.phase) * 0.45;
      }
    }
    const pos = this.points.geometry.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      let y = pos.getY(i) + dt * (1.2 + (i % 5) * 0.25);
      if (y > SURFACE - 0.5) y = 0.2;
      pos.setY(i, y);
      pos.setX(i, pos.getX(i) + Math.sin(t * 2 + i) * 0.004);
    }
    pos.needsUpdate = true;
    if (player) {
      const chest = player.pos.clone().add(new THREE.Vector3(0, 1, 0));
      this.bubbles.update(dt, t, player.pos, chest, onPop);
    }
  }
}

export const OCEAN_SURFACE = SURFACE;
