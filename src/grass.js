import * as THREE from 'three';
import { PARK, CITY, terrainHeight, lakeDist, pathDist } from './layout.js';
import { mulberry32 } from './util.js';

// A field of real grass blades around the player. The blades live in a
// square of side L that wraps around the focus point, so each blade stays put
// in the world as you walk and the field follows you. Heights and "is there
// grass here" come from a baked texture of the park; beyond the city it is
// open grassland everywhere.

const L = 72;
const DENSITY = 24; // blades per square metre

function bakeGround() {
  const N = 2 * PARK + 1;
  const data = new Uint16Array(N * N * 4);
  for (let j = 0; j < N; j++) {
    for (let i = 0; i < N; i++) {
      const x = -PARK + i, z = -PARK + j;
      const edge = Math.max(Math.abs(x), Math.abs(z)) > PARK - 5;
      const grass = !edge && lakeDist(x, z) > 0.6 && pathDist(x, z) > 0.15 ? 1 : 0;
      const o = (j * N + i) * 4;
      data[o] = THREE.DataUtils.toHalfFloat(terrainHeight(x, z));
      data[o + 1] = THREE.DataUtils.toHalfFloat(grass);
      data[o + 3] = THREE.DataUtils.toHalfFloat(1);
    }
  }
  const tex = new THREE.DataTexture(data, N, N, THREE.RGBAFormat, THREE.HalfFloatType);
  tex.magFilter = tex.minFilter = THREE.LinearFilter;
  tex.needsUpdate = true;
  return tex;
}

export class Grass {
  constructor(scene) {
    const count = Math.round(L * L * DENSITY);
    this.count = count;
    // one blade: a tapered strip, x across, y up
    const blade = new THREE.InstancedBufferGeometry();
    blade.setAttribute('position', new THREE.Float32BufferAttribute([-0.5, 0, 0, 0.5, 0, 0, -0.38, 0.45, 0, 0.38, 0.45, 0, -0.18, 0.8, 0, 0.18, 0.8, 0, 0, 1, 0], 3));
    blade.setAttribute('normal', new THREE.Float32BufferAttribute(new Array(21).fill(0).map((_, i) => (i % 3 === 1 ? 1 : 0)), 3));
    blade.setIndex([0, 1, 3, 0, 3, 2, 2, 3, 5, 2, 5, 4, 4, 5, 6]);
    const rnd = mulberry32(5150);
    const inst = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      inst[i * 3] = rnd() * L;
      inst[i * 3 + 1] = rnd() * L;
      inst[i * 3 + 2] = rnd();
    }
    blade.setAttribute('aBlade', new THREE.InstancedBufferAttribute(inst, 3));
    blade.instanceCount = count;
    this.geometry = blade;

    this.uniforms = {
      uCenter: { value: new THREE.Vector2() },
      uTime: { value: 0 },
      uGround: { value: bakeGround() },
    };
    const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.85, side: THREE.DoubleSide });
    mat.onBeforeCompile = (sh) => {
      Object.assign(sh.uniforms, this.uniforms);
      sh.vertexShader = sh.vertexShader
        .replace('void main() {', `
          attribute vec3 aBlade;
          uniform vec2 uCenter;
          uniform float uTime;
          uniform sampler2D uGround;
          varying float vT;
          varying float vR;
          void main() {`)
        .replace('#include <begin_vertex>', `
          vec2 wp = uCenter + mod(aBlade.xy - uCenter + ${(L / 2).toFixed(1)}, ${L.toFixed(1)}) - ${(L / 2).toFixed(1)};
          float r = aBlade.z;
          float fade = 1.0 - smoothstep(${(L * 0.34).toFixed(1)}, ${(L * 0.49).toFixed(1)}, length(wp - uCenter));
          float h = -0.02, mask = 1.0;
          if (abs(wp.x) < ${PARK.toFixed(1)} && abs(wp.y) < ${PARK.toFixed(1)}) {
            vec4 g = texture2D(uGround, (wp + ${PARK.toFixed(1)} + 0.5) / ${(2 * PARK + 1).toFixed(1)});
            h = g.r; mask = g.g;
          } else if (max(abs(wp.x), abs(wp.y)) < ${CITY.toFixed(1)}) {
            mask = 0.0;
          }
          float tall = (0.28 + r * r * 0.5) * fade * step(0.5, mask);
          float ang = r * 43.98;
          vec2 dir = vec2(cos(ang), sin(ang));
          float bend = position.y * position.y;
          vec2 wind = vec2(sin(uTime * 1.7 + wp.x * 0.13 + wp.y * 0.07), cos(uTime * 1.2 + wp.y * 0.15)) * 0.18
                    + (vec2(fract(r * 7.3), fract(r * 13.1)) - 0.5) * 0.5;
          vec3 transformed;
          transformed.xz = wp + dir * position.x * 0.055 + wind * bend * tall;
          transformed.y = h + position.y * tall;
          vT = position.y;
          vR = r;`)
        .replace('#include <beginnormal_vertex>', 'vec3 objectNormal = vec3(0.0, 1.0, 0.0);');
      sh.fragmentShader = sh.fragmentShader
        .replace('void main() {', 'varying float vT;\nvarying float vR;\nvoid main() {')
        .replace('#include <color_fragment>', `
          vec3 root = vec3(0.07, 0.2, 0.03);
          vec3 tip = mix(vec3(0.34, 0.62, 0.12), vec3(0.55, 0.7, 0.2), fract(vR * 5.7));
          diffuseColor.rgb *= mix(root, tip, smoothstep(0.0, 1.0, vT)) * (0.85 + 0.3 * fract(vR * 17.0));`);
    };
    mat.customProgramCacheKey = () => 'grass-blades';
    this.mesh = new THREE.Mesh(blade, mat);
    this.mesh.frustumCulled = false;
    this.mesh.receiveShadow = true;
    scene.add(this.mesh);
  }

  setQuality(high) {
    this.geometry.instanceCount = high ? this.count : Math.round(this.count * 0.45);
  }

  update(t, focus) {
    this.uniforms.uTime.value = t;
    this.uniforms.uCenter.value.set(focus.x, focus.z);
  }
}
