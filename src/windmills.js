import * as THREE from 'three';
import { GeoBuilder, addTube, addBox, addGeometry } from './geometry.js';

// Modern three-bladed wind turbines on the hills and in the fields.

const WHITE = new THREE.Color(1, 1, 1);

function bladeGeometry(len) {
  const b = new GeoBuilder();
  // a long, slightly twisted, tapered blade along +y
  const pts = [];
  for (let i = 0; i <= 8; i++) {
    const t = i / 8;
    pts.push([t * len, 1.5 * (1 - t) ** 0.8 + 0.25, 0.35 * (1 - t) + 0.08, t * 0.35]);
  }
  for (const side of [1, -1]) {
    for (let i = 0; i < pts.length - 1; i++) {
      const [y0, w0, th0, tw0] = pts[i], [y1, w1, th1, tw1] = pts[i + 1];
      const corner = (y, w, th, tw, u) => [Math.cos(tw) * w * u, y, side * th * 0.5 + Math.sin(tw) * w * u * 0.3];
      const q = [corner(y0, w0, th0, tw0, -0.3), corner(y0, w0, th0, tw0, 0.7), corner(y1, w1, th1, tw1, 0.7), corner(y1, w1, th1, tw1, -0.3)];
      const ids = q.map(([x, y, z]) => b.vert(x, y, z, 0, 0, side, 0, 0, WHITE));
      if (side > 0) b.quad(ids[0], ids[1], ids[2], ids[3]);
      else b.quad(ids[0], ids[3], ids[2], ids[1]);
    }
  }
  const g = b.build();
  g.computeVertexNormals();
  return g;
}

export class Windmills {
  constructor(scene) {
    this.scene = scene;
    this.rotors = [];
    this.mat = new THREE.MeshStandardMaterial({ color: 0xf4f7f9, roughness: 0.45, metalness: 0.05, side: THREE.DoubleSide });
    this.blade = bladeGeometry(30);
    const tower = new GeoBuilder();
    addTube(tower, [new THREE.Vector3(0, -2, 0), new THREE.Vector3(0, 66, 0)], [2.1, 1.15], 20, WHITE);
    addBox(tower, 0, 67.6, -1.5, 3.2, 3.4, 9, WHITE);
    this.towerGeo = tower.build();
    this.hub = new THREE.SphereGeometry(1.5, 20, 14);
    this.hub.scale(1, 1, 1.4);
  }

  // facing: the direction (radians about y) the rotor looks towards
  add(x, y, z, facing, scale = 1) {
    const g = new THREE.Group();
    g.position.set(x, y, z);
    g.rotation.y = facing;
    g.scale.setScalar(scale);
    const t = new THREE.Mesh(this.towerGeo, this.mat);
    t.castShadow = t.receiveShadow = true;
    g.add(t);
    const rotor = new THREE.Group();
    rotor.position.set(0, 67.6, 3.4);
    const hub = new THREE.Mesh(this.hub, this.mat);
    hub.castShadow = true;
    rotor.add(hub);
    for (let i = 0; i < 3; i++) {
      const bl = new THREE.Mesh(this.blade, this.mat);
      bl.rotation.z = (i / 3) * Math.PI * 2;
      bl.castShadow = true;
      rotor.add(bl);
    }
    rotor.rotation.z = Math.random() * 6;
    rotor.userData.speed = 0.9 + Math.random() * 0.4;
    g.add(rotor);
    this.rotors.push(rotor);
    this.scene.add(g);
  }

  update(dt) {
    for (const r of this.rotors) r.rotation.z -= r.userData.speed * dt;
  }
}
