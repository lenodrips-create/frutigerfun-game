import * as THREE from 'three';
import { GeoBuilder, addPrism, addBox, addCylinder, rectPts, circlePts, roundedRectPts } from './geometry.js';
import { facadeTexture, paverTexture, grassDetailTexture } from './textures.js';
import { blockCenters, isParkBlock, BLOCK, PITCH, PARK, CITY, SLAB_H } from './layout.js';
import { mulberry32, clamp } from './util.js';
import { leafTint } from './nature.js';

// The city around the park: blocks, towers, roads, street trees and lamps.

const hex = (h) => new THREE.Color(h);
const C = (r, g, b) => new THREE.Color(r, g, b);
const WHITE = C(1, 1, 1);
// The tower with the apartment you can visit, and the blue circle in front.
const APARTMENT_BLOCK = { x: 0, z: -210 };
export const APARTMENT_DOOR = { x: 0, z: -195 };

const FACADES = ['apartment', 'apartment', 'glass', 'glass', 'office', 'dark'];
const ROOF = hex(0xd5dade);
const TRIM_WHITE = hex(0xf4f8fb);

function chamferPts(cx, cz, w, d, c) {
  const hw = w / 2, hd = d / 2;
  return [
    [cx - hw + c, cz + hd], [cx + hw - c, cz + hd], [cx + hw, cz + hd - c], [cx + hw, cz - hd + c],
    [cx + hw - c, cz - hd], [cx - hw + c, cz - hd], [cx - hw, cz - hd + c], [cx - hw, cz + hd - c],
  ];
}

function flatRect(b, cx, y, cz, sx, sz, color) {
  const A = b.vert(cx - sx / 2, y, cz + sz / 2, 0, 1, 0, 0, 0, color);
  const B = b.vert(cx + sx / 2, y, cz + sz / 2, 0, 1, 0, 1, 0, color);
  const Cc = b.vert(cx + sx / 2, y, cz - sz / 2, 0, 1, 0, 1, 1, color);
  const D = b.vert(cx - sx / 2, y, cz - sz / 2, 0, 1, 0, 0, 1, color);
  b.quad(A, B, Cc, D);
}

export function buildCity(scene, { foliage, colliders, props }) {
  const rnd = mulberry32(4242);
  const pick = (arr) => arr[Math.floor(rnd() * arr.length)];
  const B = {
    glass: new GeoBuilder(), apartment: new GeoBuilder(), office: new GeoBuilder(), dark: new GeoBuilder(),
    trim: new GeoBuilder(), roof: new GeoBuilder(), slab: new GeoBuilder(),
    lawn: new GeoBuilder(), marks: new GeoBuilder(), pool: new GeoBuilder(),
  };

  const footprint = (shape, x, z, w, d) => {
    switch (shape) {
      case 'round': return roundedRectPts(x, z, w, d, Math.min(w, d) * 0.28, 5);
      case 'cyl': return circlePts(x, z, Math.min(w, d) / 2, 28);
      case 'chamfer': return chamferPts(x, z, w, d, Math.min(w, d) * 0.2);
      default: return rectPts(x, z, w, d);
    }
  };

  // A high-rise like the ones in real skylines: a lobby of dark glass, a
  // windowed shaft (white concrete, blue glass, stone or dark glass), maybe
  // a setback, then a crown: a parapet frame, rooftop plant, or a spire.
  function tower(x, z, w, d, h, forceKind) {
    const picked = pick(FACADES);
    const kind = forceKind ?? picked;
    const b = B[kind];
    const shade = 0.92 + rnd() * 0.1;
    const tint = C(shade, shade, shade * (kind === 'apartment' ? 0.99 : 1.02));
    const shape = kind === 'glass' ? pick(['box', 'box', 'chamfer', 'cyl', 'round']) : pick(['box', 'box', 'box', 'chamfer']);
    const fp = (sw, sd) => footprint(shape, x, z, sw, sd);
    const opt = { tileW: 12, tileH: 14, uOff: Math.floor(rnd() * 8) / 8, smooth: shape === 'cyl' || shape === 'round', roofBuilder: B.roof, roofColor: ROOF, yBase: SLAB_H };
    // lobby
    addPrism(B.dark, fp(w + 0.6, d + 0.6), SLAB_H, SLAB_H + 6, C(0.75, 0.8, 0.8), { ...opt, roof: false });
    let top = h;
    if (h > 70 && rnd() < 0.5) {
      const h1 = h * (0.6 + rnd() * 0.2);
      addPrism(b, fp(w, d), SLAB_H + 6, h1, tint, opt);
      const s2 = 0.72 + rnd() * 0.12;
      addPrism(b, fp(w * s2, d * s2), h1, h, tint, opt);
      w *= s2; d *= s2;
    } else {
      addPrism(b, fp(w, d), SLAB_H + 6, h, tint, opt);
    }
    // slab edge at the top
    addPrism(B.trim, fp(w + 0.4, d + 0.4), top, top + 0.9, TRIM_WHITE, { roofBuilder: B.roof, roofColor: ROOF });
    const crown = rnd();
    if (crown < 0.4) {
      // open parapet frame around a plant room
      addPrism(B.roof, fp(w * 0.55, d * 0.55), top + 0.9, top + 5.5, ROOF, {});
      const fh = 6 + rnd() * 5;
      for (const [ox, oz, sx, sz] of [[0, d / 2 - 0.3, w, 0.5], [0, -d / 2 + 0.3, w, 0.5], [w / 2 - 0.3, 0, 0.5, d], [-w / 2 + 0.3, 0, 0.5, d]]) {
        addBox(B.trim, x + ox, top + 0.9 + fh - 0.6, z + oz, sx, 1.2, sz, TRIM_WHITE);
      }
      for (const [ox, oz] of [[w / 2 - 0.3, d / 2 - 0.3], [-w / 2 + 0.3, d / 2 - 0.3], [w / 2 - 0.3, -d / 2 + 0.3], [-w / 2 + 0.3, -d / 2 + 0.3]]) {
        addBox(B.trim, x + ox, top + 0.9 + fh / 2, z + oz, 0.6, fh, 0.6, TRIM_WHITE);
      }
    } else if (crown < 0.7 || shape === 'cyl') {
      for (let i = 0; i < 4; i++) {
        addBox(B.roof, x + (rnd() - 0.5) * w * 0.45, top + 2, z + (rnd() - 0.5) * d * 0.45, 3 + rnd() * 4, 2.4 + rnd() * 2, 3 + rnd() * 4, ROOF);
      }
      if (h > 110 && rnd() < 0.5) addCylinder(B.trim, new THREE.Vector3(x, top + 0.9, z), new THREE.Vector3(x, top + 18 + rnd() * 14, z), 0.45, 0.08, 8, TRIM_WHITE);
    } else {
      addPrism(b, fp(w * 0.8, d * 0.8), top + 0.9, top + 7, tint, { ...opt, yBase: SLAB_H });
      addPrism(B.trim, fp(w * 0.84, d * 0.84), top + 7, top + 7.8, TRIM_WHITE, { roofBuilder: B.roof, roofColor: ROOF });
    }
    if (shape === 'cyl') colliders.addCircle(x, z, Math.min(w, d) / 2 + 0.3, h);
    else colliders.addBox(x - w / 2 - 0.3, z - d / 2 - 0.3, x + w / 2 + 0.3, z + d / 2 + 0.3, h);
  }

  function tvTower(x, z) {
    const y0 = SLAB_H;
    const V = (yy) => new THREE.Vector3(x, yy, z);
    addCylinder(B.trim, V(y0), V(y0 + 12), 7, 5.5, 20, TRIM_WHITE);
    addCylinder(B.trim, V(y0 + 12), V(y0 + 150), 4.6, 2.7, 20, TRIM_WHITE);
    addCylinder(B.trim, V(y0 + 138), V(y0 + 144), 3, 9, 28, TRIM_WHITE);
    addPrism(B.glass, circlePts(x, z, 9.6, 28), y0 + 144, y0 + 152, C(0.75, 0.9, 1), { tileW: 8, tileH: 16, smooth: true, roof: false });
    addCylinder(B.trim, V(y0 + 152), V(y0 + 157), 9.4, 6, 28, TRIM_WHITE);
    addCylinder(B.trim, V(y0 + 157), V(y0 + 186), 2.2, 1.5, 14, TRIM_WHITE);
    for (let i = 0; i < 6; i++) {
      const a = y0 + 186 + i * 7, r0 = 1.1 - i * 0.14;
      addCylinder(B.trim, V(a), V(a + 7), r0, r0 - 0.14, 10, i % 2 ? TRIM_WHITE : hex(0xe0473f));
    }
    colliders.addCircle(x, z, 7.2, 230);
  }

  function lawn(x, z, w, d) {
    addBox(B.lawn, x, SLAB_H + 0.02, z, w, 0.05, d, WHITE, 0, 0.25);
  }

  function pocketPark(cx, cz, withFountain) {
    lawn(cx, cz, BLOCK - 9, BLOCK - 9);
    for (let i = 0; i < 9; i++) {
      const x = cx + (rnd() - 0.5) * 38, z = cz + (rnd() - 0.5) * 38;
      if (withFountain && Math.hypot(x - cx, z - cz) < 11) continue;
      const v = Math.floor(rnd() * 3), s = 0.75 + rnd() * 0.3;
      const tv = foliage.addTree(x, SLAB_H, z, s, v, rnd() * 6.28, leafTint(rnd));
      colliders.addCircle(x, z, tv.trunkR * s + 0.1, 4, false);
      colliders.addCanopy(x, SLAB_H + tv.canopyY * s, z, tv.canopyR * s * 0.85);
    }
    for (let i = 0; i < 10; i++) {
      const a = rnd() * 6.28, r = 13 + rnd() * 8;
      foliage.addBush(cx + Math.cos(a) * r, SLAB_H, cz + Math.sin(a) * r, 0.8 + rnd() * 0.5, rnd() * 6.28, C(1, 1, 1), rnd() < 0.4);
    }
    if (withFountain) {
      addPrism(B.trim, circlePts(cx, cz, 7, 36), SLAB_H, SLAB_H + 0.65, TRIM_WHITE, { smooth: true });
      addPrism(B.pool, circlePts(cx, cz, 6.4, 36), SLAB_H + 0.6, SLAB_H + 0.67, WHITE, { roof: true });
      addCylinder(B.trim, new THREE.Vector3(cx, SLAB_H, cz), new THREE.Vector3(cx, SLAB_H + 2.2, cz), 0.9, 0.5, 16, TRIM_WHITE);
      addCylinder(B.trim, new THREE.Vector3(cx, SLAB_H + 2.2, cz), new THREE.Vector3(cx, SLAB_H + 2.5, cz), 2.2, 1.6, 20, TRIM_WHITE);
      colliders.addCircle(cx, cz, 7.1, 0.7, false);
    }
  }

  // ---- blocks ----
  for (const cx of blockCenters) {
    for (const cz of blockCenters) {
      if (isParkBlock(cx, cz)) continue;
      addBox(B.slab, cx, SLAB_H / 2, cz, BLOCK, SLAB_H, BLOCK, WHITE, 0, 0.25);

      // street trees and lamps along the sidewalks
      for (const [sx, sz, along] of [[0, -1, 'x'], [0, 1, 'x'], [-1, 0, 'z'], [1, 0, 'z']]) {
        for (const t of [-18, 0, 18]) {
          const x = along === 'x' ? cx + t : cx + sx * (BLOCK / 2 - 2.4);
          const z = along === 'x' ? cz + sz * (BLOCK / 2 - 2.4) : cz + t;
          const s = 0.85 + rnd() * 0.3;
          if (Math.hypot(x - APARTMENT_DOOR.x, z - APARTMENT_DOOR.z) < 14) continue;
          const tv = foliage.addTree(x, SLAB_H, z, s, 3, rnd() * 6.28, leafTint(rnd));
          colliders.addCircle(x, z, tv.trunkR * s + 0.1, 4, false);
          colliders.addCanopy(x, SLAB_H + tv.canopyY * s, z, tv.canopyR * s * 0.8);
        }
        for (const t of [-9, 9]) {
          const x = along === 'x' ? cx + t : cx + sx * (BLOCK / 2 - 1.2);
          const z = along === 'x' ? cz + sz * (BLOCK / 2 - 1.2) : cz + t;
          props.lamp(x, SLAB_H, z);
          colliders.addCircle(x, z, 0.2, 5, false);
        }
      }

      const north = clamp((-cz - 140) / 210, 0, 1);
      const hm = 0.55 + 0.55 * north + rnd() * 0.25;
      if (cx === -70 && cz === -350) {
        pocketPark(cx, cz, false);
        tvTower(cx, cz);
        continue;
      }
      if (cx === APARTMENT_BLOCK.x && cz === APARTMENT_BLOCK.z) {
        tower(cx, cz - 4, 24, 24, 110, 'apartment');
        continue;
      }
      const r = rnd();
      if (r < 0.12) {
        pocketPark(cx, cz, rnd() < 0.7);
        continue;
      }
      const layout = rnd();
      if (layout < 0.3) {
        tower(cx, cz, 20 + rnd() * 8, 20 + rnd() * 8, (85 + rnd() * 75) * hm);
        lawn(cx, cz + 18, 30, 6);
      } else if (layout < 0.65) {
        const vertical = rnd() < 0.5;
        for (const sgn of [-1, 1]) {
          const ox = vertical ? sgn * 11 : 0, oz = vertical ? 0 : sgn * 11;
          const w = vertical ? 16 : 24, d = vertical ? 24 : 16;
          tower(cx + ox + (rnd() - 0.5) * 3, cz + oz + (rnd() - 0.5) * 3, w, d, (60 + rnd() * 70) * hm);
        }
      } else {
        for (const [ox, oz] of [[-11, -11], [11, -11], [-11, 11], [11, 11]]) {
          if (rnd() < 0.22) {
            lawn(cx + ox, cz + oz, 16, 16);
            continue;
          }
          tower(cx + ox, cz + oz, 13 + rnd() * 3, 13 + rnd() * 3, (40 + rnd() * 60) * hm);
        }
      }
    }
  }

  // ---- road markings ----
  const roadLines = [];
  for (let k = 0; k <= 11; k++) roadLines.push(-385 + PITCH * k);
  const noMarking = (x, z) => (Math.abs(x) < PARK && Math.abs(z) < PARK) || Math.abs(x) > CITY - 2 || Math.abs(z) > CITY - 2;
  const markY = 0.015;
  for (const a of roadLines) {
    for (let m = 0; m < roadLines.length - 1; m++) {
      const z0 = roadLines[m] + 12, z1 = roadLines[m + 1] - 12;
      if (noMarking(a, (z0 + z1) / 2)) continue;
      for (let z = z0; z < z1; z += 6) {
        flatRect(B.marks, a, markY, z + 1.5, 0.2, 3, WHITE);
        flatRect(B.marks, z + 1.5, markY, a, 3, 0.2, WHITE);
      }
    }
    for (const b of roadLines) {
      for (const sgn of [-1, 1]) {
        if (!noMarking(a, b + sgn * 9.5)) {
          for (let s = -5.25; s <= 5.3; s += 1.5) flatRect(B.marks, a + s, markY, b + sgn * 9.5, 0.7, 3, WHITE);
        }
        if (!noMarking(b + sgn * 9.5, a)) {
          for (let s = -5.25; s <= 5.3; s += 1.5) flatRect(B.marks, b + sgn * 9.5, markY, a + s, 3, 0.7, WHITE);
        }
      }
    }
  }

  // ---- meshes ----
  const facade = (kind, seed, glassy) => new THREE.MeshStandardMaterial({
    map: facadeTexture(kind, seed), vertexColors: true,
    metalness: glassy ? 0.35 : 0.05, roughness: glassy ? 0.18 : 0.6, envMapIntensity: glassy ? 1.1 : 0.5,
  });
  const glassMat = facade('glass', 5, true);
  const trimMat = new THREE.MeshStandardMaterial({ color: 0xffffff, vertexColors: true, roughness: 0.35, metalness: 0.1 });
  const roofMat = new THREE.MeshStandardMaterial({ color: 0xffffff, vertexColors: true, roughness: 0.85 });
  const slabMat = new THREE.MeshStandardMaterial({ map: paverTexture(), roughness: 0.85 });
  const lawnTex = grassDetailTexture();
  const lawnMat = new THREE.MeshStandardMaterial({ color: 0x86d64a, map: lawnTex, roughness: 0.95 });
  const markMat = new THREE.MeshStandardMaterial({ color: 0xf2f6f8, roughness: 0.6, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
  const poolMat = new THREE.MeshStandardMaterial({ color: 0x4fd0ef, roughness: 0.04, metalness: 0.3, envMapIntensity: 1.4 });
  const add = (b, mat, cast = true) => {
    if (!b.count) return;
    const mesh = new THREE.Mesh(b.build(), mat);
    mesh.castShadow = cast;
    mesh.receiveShadow = true;
    scene.add(mesh);
  };
  add(B.glass, glassMat);
  add(B.apartment, facade('apartment', 6, false));
  add(B.office, facade('office', 7, false));
  add(B.dark, facade('dark', 8, true));
  add(B.trim, trimMat);
  add(B.roof, roofMat);
  add(B.slab, slabMat, false);
  add(B.lawn, lawnMat, false);
  add(B.marks, markMat, false);
  add(B.pool, poolMat, false);
  return { materials: { glassMat } };
}
