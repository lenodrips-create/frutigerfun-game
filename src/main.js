import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { Colliders } from './physics.js';
import { Foliage } from './nature.js';
import { Props } from './props.js';
import { populatePark, populateCountryside, MENU } from './park.js';
import { Windmills } from './windmills.js';
import { Grass } from './grass.js';
import { buildCity, APARTMENT_DOOR } from './city.js';
import { Apartment, makePortal } from './apartment.js';
import { Computer } from './computer.js';
import { Ocean } from './ocean.js';
import { Multiplayer } from './multiplayer.js';
import { buildTerrain } from './terrain.js';
import { Sky, LensFlare, SKY_COLORS, makeSkyMaterial } from './sky.js';
import { Lake } from './water.js';
import { Bubbles } from './bubbles.js';
import { Character } from './character.js';
import { Player, Input } from './player.js';
import { AeroAudio } from './audio.js';
import { UI } from './ui.js';
import { clamp } from './util.js';
import { bridge, SLAB_H, lakePoint, terrainHeight } from './layout.js';

const SETTINGS_KEY = 'frutiger-fun-settings';
const DEFAULTS = { quality: 'high', music: 0.6, sfx: 0.8, sensitivity: 1, invertY: false, showFps: false };

function loadSettings() {
  try {
    return { ...DEFAULTS, ...JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}') };
  } catch {
    return { ...DEFAULTS };
  }
}

function saveSettings(s) {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(s));
  } catch {
    // private mode: settings just won't stick
  }
}

// A touch more saturation and a soft vignette, for that glossy postcard look.
const GradeShader = {
  name: 'AeroGrade',
  uniforms: { tDiffuse: { value: null }, saturation: { value: 1.0 }, vignette: { value: 0.08 } },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform float saturation, vignette;
    varying vec2 vUv;
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      float l = dot(c.rgb, vec3(0.2126, 0.7152, 0.0722));
      c.rgb = max(mix(vec3(l), c.rgb, saturation), 0.0);
      float d = distance(vUv, vec2(0.5));
      c.rgb *= mix(1.0, 1.0 - vignette, smoothstep(0.42, 0.95, d));
      gl_FragColor = c;
    }`,
};

const nextFrame = () => new Promise((r) => requestAnimationFrame(() => setTimeout(r, 0)));
const ease = (t) => t * t * (3 - 2 * t);

class Game {
  constructor() {
    this.settings = loadSettings();
    this.audio = new AeroAudio(this.settings);
    this.ui = new UI(this);
    this.canvas = document.getElementById('scene');
    const r = (this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, powerPreference: 'high-performance' }));
    r.toneMapping = THREE.NeutralToneMapping;
    r.toneMappingExposure = 1.25;
    r.shadowMap.enabled = true;
    r.shadowMap.type = THREE.PCFSoftShadowMap;
    r.setSize(innerWidth, innerHeight, false);

    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog(SKY_COLORS.horizon.clone(), 450, 2400);
    this.camera = new THREE.PerspectiveCamera(52, innerWidth / innerHeight, 0.15, 8000);
    this.sunDir = new THREE.Vector3(-0.5, 0.5, 0.56).normalize();

    this.hemi = new THREE.HemisphereLight(0xe4f7ff, 0xb2dc88, 2.3);
    this.sun = new THREE.DirectionalLight(0xfff8ea, 2.6);
    this.sun.castShadow = true;
    const sc = this.sun.shadow.camera;
    sc.left = sc.bottom = -75;
    sc.right = sc.top = 75;
    sc.near = 1;
    sc.far = 600;
    this.sun.shadow.bias = -0.0004;
    this.sun.shadow.normalBias = 0.05;
    this.scene.add(this.hemi, this.sun, this.sun.target);

    this.state = 'loading';
    this.time = 0;
    this.stateTime = 0;
    this.clock = new THREE.Clock();
    this.fpsFrames = 0;
    this.fpsTime = 0;
    this.focus = new THREE.Vector3();
    addEventListener('resize', () => this.resize());
    document.addEventListener('pointerlockchange', () => {
      if (!document.pointerLockElement && this.state === 'playing' && this.hadLock && !this.seated) this.pause();
      this.hadLock = !!document.pointerLockElement;
      this.ui.hint(this.state === 'playing' && !this.seated && !document.pointerLockElement);
    });
    this.canvas.addEventListener('click', () => {
      if (this.state === 'playing' && !this.seated && !document.pointerLockElement) this.canvas.requestPointerLock?.();
    });
  }

  async build() {
    const step = async (f, text) => {
      this.ui.progress(f, text);
      await nextFrame();
    };
    await step(0.04, 'Painting the sky…');
    this.colliders = new Colliders();
    this.foliage = new Foliage();
    this.props = new Props();
    this.sky = new Sky(this.scene, this.sunDir);
    this.windmills = new Windmills(this.scene);
    await step(0.14, 'Planting the park…');
    const ao = populatePark(this);
    populateCountryside(this);
    await step(0.32, 'Raising the skyline…');
    buildCity(this.scene, this);
    await step(0.52, 'Rolling out the hills…');
    buildTerrain(this.scene, ao);
    await step(0.68, 'Building the boardwalk…');
    this.props.boardwalk();
    this.props.build(this.scene);
    this.foliage.build(this.scene);
    this.grass = new Grass(this.scene);
    this.grassFar = new Grass(this.scene, { L: 230, density: 2.6, width: 0.16, seed: 777, fadeFrom: 0.3 });
    await step(0.78, 'Filling the lake…');
    this.lake = new Lake(this.scene, this.sunDir, 0.5);
    this.bubbles = new Bubbles(this.scene, this.sunDir, 70);
    this.character = new Character();
    this.scene.add(this.character.root);
    this.apartment = new Apartment();
    this.door = new THREE.Vector3(APARTMENT_DOOR.x, SLAB_H, APARTMENT_DOOR.z);
    this.doorPortal = makePortal();
    this.doorPortal.position.copy(this.door);
    this.scene.add(this.doorPortal);
    this.inside = false;
    this.zone = null; // null (outdoors) | 'apartment' | 'ocean'
    this.worldObj = null;
    this.portalArmed = true;
    // the ocean teleporter, on the south shore of the lake
    this.ocean = new Ocean();
    const [sx, sz] = lakePoint(Math.PI / 2, 14.5);
    this.shore = new THREE.Vector3(sx, terrainHeight(sx, sz), sz);
    this.shorePortal = makePortal('Ocean');
    this.shorePortal.position.copy(this.shore);
    this.scene.add(this.shorePortal);
    this.seated = false;
    this.computer = new Computer(document.getElementById('pc-screen'));
    this.multi = new Multiplayer(this);
    document.getElementById('pc-screen').addEventListener('mousedown', () => this.computer.click());
    addEventListener('keydown', (e) => {
      if (e.code === 'KeyE' && this.state === 'playing' && !this.seated && this.nearSeat()) this.sit();
    });
    // a tall, faint beacon so the entrance can be found from across the park
    const beacon = new THREE.Mesh(
      new THREE.CylinderGeometry(0.6, 1.1, 90, 24, 1, true),
      new THREE.MeshBasicMaterial({ color: 0x6cc8ff, transparent: true, opacity: 0.16, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending }),
    );
    beacon.position.set(this.door.x, 45, this.door.z);
    this.scene.add(beacon);
    await this.character.tryLoadModel('assets/character.glb');
    this.input = new Input(this.canvas);
    this.player = new Player(this.character, this.camera, this.colliders, this.input, this.settings);
    this.player.onJump = () => this.audio.jump();
    this.flare = new LensFlare(document.getElementById('flare'), this.colliders);
    await step(0.88, 'Polishing the glass…');
    this.buildEnvironment();
    this.apartment.prepare(this.renderer);
    this.setupComposer();
    this.applyQuality();
    this.enterMenu(true);
    this.renderer.compile(this.scene, this.camera);
    await step(1, 'Ready!');
  }

  buildEnvironment() {
    const env = new THREE.Scene();
    env.add(new THREE.Mesh(new THREE.SphereGeometry(100, 32, 16), makeSkyMaterial(this.sunDir)));
    const ground = new THREE.Mesh(new THREE.CircleGeometry(95, 32), new THREE.MeshBasicMaterial({ color: 0x86bf74 }));
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -8;
    env.add(ground);
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    this.scene.environment = pmrem.fromScene(env, 0.02, 0.1, 500).texture;
    this.scene.environmentIntensity = 0.75;
    pmrem.dispose();
  }

  setupComposer() {
    const rt = new THREE.WebGLRenderTarget(innerWidth, innerHeight, { type: THREE.HalfFloatType, samples: 4 });
    this.composer = new EffectComposer(this.renderer, rt);
    this.renderPass = new RenderPass(this.scene, this.camera);
    this.composer.addPass(this.renderPass);
    this.bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 0.24, 0.55, 1.05);
    this.composer.addPass(this.bloom);
    this.composer.addPass(new ShaderPass(GradeShader));
    this.composer.addPass(new OutputPass());
  }

  applyQuality() {
    const high = this.settings.quality === 'high';
    const pr = Math.min(devicePixelRatio || 1, high ? 1.75 : 1);
    this.renderer.setPixelRatio(pr);
    this.renderer.setSize(innerWidth, innerHeight, false);
    this.composer.setPixelRatio(pr);
    this.composer.setSize(innerWidth, innerHeight);
    const size = high ? 2048 : 1024;
    if (this.sun.shadow.mapSize.x !== size) {
      this.sun.shadow.mapSize.set(size, size);
      this.sun.shadow.map?.dispose();
      this.sun.shadow.map = null;
    }
    this.lake.setResolution(high ? 0.5 : 0.3);
    this.useComposer = high;
    this.grass.setQuality(high);
    this.grassFar.setQuality(high);
  }

  settingsChanged(key) {
    saveSettings(this.settings);
    if (key === 'quality') this.applyQuality();
    if (key === 'music' || key === 'sfx') this.audio.applyVolumes();
    if (key === 'showFps' && !this.settings.showFps) this.ui.setFps('');
  }

  resize() {
    this.camera.aspect = innerWidth / innerHeight;
    this.camera.updateProjectionMatrix();
    this.applyQuality();
    this.lake.resize();
  }

  // ---- states ----

  menuCamera(t, outPos, outLook) {
    const { spot, f, right } = MENU;
    const sway = Math.sin(t * 0.09) * 0.5;
    outPos.copy(spot).addScaledVector(f, -4.6).addScaledVector(right, -1.8 + sway);
    outPos.y = spot.y + 1.4 + Math.sin(t * 0.13) * 0.08;
    outLook.copy(outPos).addScaledVector(f, 100).addScaledVector(right, sway * 2);
    outLook.y += 8.5;
  }

  // Step into a blue circle: swap the whole world for the apartment or the sea.
  enterWorld(name) {
    this.switching = true;
    this.audio.whoosh();
    this.ui.fade(true);
    setTimeout(() => {
      this.setWorld(name);
      const s = this.worldObj.spawn;
      this.player.place(s.x, s.z, s.facing);
      if (s.y) this.player.pos.y = s.y;
      this.player.camYaw = s.facing + Math.PI;
      this.player.camDist = name === 'ocean' ? 5 : 3.4;
      this.player.camPitch = name === 'ocean' ? 0.15 : 0.32;
      this.player.updateCamera(0, true);
      this.ui.fade(false);
      this.switching = false;
    }, 420);
  }

  enterApartment() {
    this.enterWorld('apartment');
  }

  leaveWorld() {
    const from = this.zone;
    this.switching = true;
    this.audio.whoosh();
    this.ui.fade(true);
    setTimeout(() => {
      this.setWorld(null);
      if (from === 'ocean') {
        // step back onto the grass, facing the water
        const [x, z] = lakePoint(Math.PI / 2, 18.5);
        this.player.place(x, z, Math.PI);
        this.player.camYaw = 0;
      } else {
        this.player.place(this.door.x, this.door.z + 4.5, 0);
        this.player.camYaw = Math.PI;
      }
      this.player.camDist = 6.5;
      this.player.updateCamera(0, true);
      this.ui.fade(false);
      this.switching = false;
    }, 420);
  }

  leaveApartment() {
    this.leaveWorld();
  }

  setWorld(name) {
    this.zone = name;
    this.inside = !!name;
    this.worldObj = name === 'apartment' ? this.apartment : name === 'ocean' ? this.ocean : null;
    this.portalArmed = false;
    const scene = this.worldObj ? this.worldObj.scene : this.scene;
    scene.add(this.character.root);
    this.player.world = this.worldObj;
    this.renderPass.scene = scene;
  }

  setInside(inside) {
    this.setWorld(inside ? 'apartment' : null);
  }

  nearSeat() {
    if (this.zone !== 'apartment') return false;
    const s = this.apartment.seat.pos, p = this.player.pos;
    return Math.hypot(p.x - s.x, p.z - s.z) < 2.2;
  }

  // Sit on the clear chair: the camera glides to the screen and the
  // computer comes alive.
  sit() {
    this.seated = true;
    this.seatT = 0;
    if (document.pointerLockElement) document.exitPointerLock();
    const s = this.apartment.seat;
    this.player.place(s.pos.x, s.pos.z, s.facing);
    this.player.pos.y = s.pos.y - 0.05;
    this.player.syncCharacter();
    this.character.state.speed = 0;
    this.seatFrom = { pos: this.camera.position.clone(), look: this.player.target.clone() };
    this.ui.hint(false);
  }

  standUp() {
    this.seated = false;
    this.computer.show(false);
    this.input.consume();
    this.ui.prompt('');
    const s = this.apartment.seat;
    const back = new THREE.Vector3(Math.sin(s.facing), 0, Math.cos(s.facing)).multiplyScalar(-1.3);
    this.player.place(s.pos.x + back.x, s.pos.z + back.z, s.facing);
    this.player.updateCamera(0, true);
  }

  // Where the camera sits to look straight at the computer screen.
  screenView() {
    const c = this.apartment.screenCorners();
    const center = c[0].clone().add(c[2]).multiplyScalar(0.5);
    const normal = new THREE.Vector3().subVectors(c[1], c[0]).cross(new THREE.Vector3().subVectors(c[3], c[0])).normalize();
    if (normal.dot(new THREE.Vector3().subVectors(this.player.pos, center)) < 0) normal.negate();
    const height = c[0].distanceTo(c[3]);
    const dist = height / (2 * Math.tan(THREE.MathUtils.degToRad(this.camera.fov / 2)) * 0.62);
    return { pos: center.clone().addScaledVector(normal, dist), look: center, corners: c };
  }

  updateSeated(dt) {
    this.seatT += dt;
    const k = ease(clamp(this.seatT / 0.8, 0, 1));
    const v = this.screenView();
    this.camera.position.lerpVectors(this.seatFrom.pos, v.pos, k);
    this.camera.lookAt(new THREE.Vector3().lerpVectors(this.seatFrom.look, v.look, k));
    this.camera.updateMatrixWorld();
    if (k >= 1) {
      this.computer.show(true);
      const pts = v.corners.map((p) => p.clone().project(this.camera));
      const xs = pts.map((p) => (p.x * 0.5 + 0.5) * innerWidth), ys = pts.map((p) => (-p.y * 0.5 + 0.5) * innerHeight);
      const x0 = Math.min(...xs), y0 = Math.min(...ys);
      this.computer.place(x0, y0, Math.max(...xs) - x0, Math.max(...ys) - y0);
      this.ui.prompt('Esc to stand up');
    }
  }

  // Arrow at the top of the HUD pointing the way to the apartment.
  updateGuide() {
    const show = this.state === 'playing' && !this.inside;
    const d = new THREE.Vector3(this.door.x - this.player.pos.x, 0, this.door.z - this.player.pos.z);
    const dist = d.length();
    if (!show || dist < 6) return this.ui.guide(null);
    const yaw = this.player.camYaw;
    const ahead = -(d.x * Math.sin(yaw) + d.z * Math.cos(yaw)), side = d.x * Math.cos(yaw) - d.z * Math.sin(yaw);
    this.ui.guide(Math.atan2(side, ahead), `Apartment · ${Math.round(dist)} m`);
  }

  checkPortals() {
    const p = this.player.pos;
    const portals = this.inside
      ? [[this.worldObj.exit, () => this.leaveWorld()]]
      : [[this.door, () => this.enterWorld('apartment')], [this.shore, () => this.enterWorld('ocean')]];
    let nearest = Infinity;
    for (const [at, go] of portals) {
      const d = Math.hypot(p.x - at.x, p.z - at.z);
      // underwater you also have to be down near the circle on the sea floor
      const low = !this.worldObj?.swim || p.y < at.y + 2.5;
      nearest = Math.min(nearest, d);
      if (d < 0.9 && low && this.portalArmed && !this.switching) go();
    }
    if (nearest > 1.8) this.portalArmed = true;
  }

  enterMenu(first = false) {
    if (!first) this.multi.disconnect();
    if (this.seated) this.standUp();
    if (this.inside) this.setInside(false);
    this.ui.prompt('');
    this.ui.guide(null);
    this.state = 'menu';
    this.stateTime = 0;
    const { spot, f, right } = MENU;
    this.player.place(spot.x, spot.z, 0);
    const cam = this.camera.position, look = (this.menuLookNow ??= new THREE.Vector3());
    this.menuCamera(0, cam, look);
    this.camera.lookAt(look);
    const toCam = new THREE.Vector3(cam.x - spot.x, 0, cam.z - spot.z).normalize().addScaledVector(right, -0.35);
    this.player.facing = Math.atan2(toCam.x, toCam.z);
    this.player.syncCharacter();
    this.character.state.speed = 0;
    this.character.state.grounded = true;
    this.bubbles.reset(spot.clone().addScaledVector(f, 10));
    if (!first) this.ui.show('menu');
  }

  startPlay() {
    if (this.state !== 'menu') return;
    this.audio.whoosh();
    this.state = 'intro';
    this.stateTime = 0;
    this.introFrom = { pos: this.camera.position.clone(), look: this.menuLookNow.clone() };
    const { along } = MENU;
    this.player.facing = Math.atan2(along.x, along.z);
    this.player.camYaw = this.player.facing + Math.PI;
    this.player.camPitch = 0.22;
    this.player.camDist = 6.5;
    this.player.syncCharacter();
    this.ui.show('hud');
    this.ui.hint(true);
    this.ui.helpFade(false);
    clearTimeout(this.helpTimer);
    this.helpTimer = setTimeout(() => this.ui.helpFade(true), 12000);
    this.bubbles.popped = 0;
    this.ui.setCount(0);
    this.canvas.requestPointerLock?.();
    this.multi.connect();
  }

  pause() {
    if (this.state !== 'playing') return;
    this.state = 'paused';
    this.pausedAt = performance.now();
    if (document.pointerLockElement) document.exitPointerLock();
    this.ui.show('pause');
  }

  resume() {
    if (this.state !== 'paused') return;
    this.state = 'playing';
    this.ui.show('hud');
    this.canvas.requestPointerLock?.();
  }

  toMenu() {
    if (document.pointerLockElement) document.exitPointerLock();
    this.ui.fade(true);
    setTimeout(() => {
      this.enterMenu();
      this.ui.fade(false);
    }, 450);
  }

  quit() {
    this.ui.fade(true);
    setTimeout(() => {
      this.state = 'goodbye';
      this.ui.show('goodbye');
      this.ui.fade(false);
    }, 450);
  }

  // ---- frame ----

  frame() {
    const dt = Math.min(this.clock.getDelta(), 1 / 20);
    this.time += dt;
    this.stateTime += dt;
    this.step(dt);
    this.render();
    if (this.settings.showFps) {
      this.fpsFrames++;
      this.fpsTime += dt;
      if (this.fpsTime > 0.5) {
        this.ui.setFps(Math.round(this.fpsFrames / this.fpsTime) + ' fps');
        this.fpsFrames = this.fpsTime = 0;
      }
    }
  }

  step(dt) {
    const t = this.time;
    const p = this.player;
    const st = this.state;
    if (st === 'menu' || st === 'goodbye') {
      const cam = this.camera.position, look = (this.menuLookNow ??= new THREE.Vector3());
      this.menuCamera(this.stateTime, cam, look);
      this.camera.lookAt(look);
      this.character.state.wave = st === 'menu' && (this.stateTime % 9) > 1.2 && (this.stateTime % 9) < 4.6;
      this.focus.copy(MENU.spot);
    } else if (st === 'intro') {
      const k = ease(clamp(this.stateTime / 1.4, 0, 1));
      p.update(dt, false);
      p.updateCamera(dt, true);
      const toPos = this.camera.position.clone();
      const toLook = p.target.clone();
      this.camera.position.lerpVectors(this.introFrom.pos, toPos, k);
      this.camera.lookAt(new THREE.Vector3().lerpVectors(this.introFrom.look, toLook, k));
      p.camPos.copy(toPos);
      if (k >= 1) {
        this.state = 'playing';
        this.input.consume();
      }
      this.focus.copy(p.pos);
    } else if (st === 'playing') {
      if (this.seated) {
        this.updateSeated(dt);
      } else {
        p.update(dt, true);
        p.updateCamera(dt);
        this.checkPortals();
        this.ui.prompt(this.nearSeat() ? 'Press E to sit at the computer' : '');
      }
      this.updateGuide();
      this.focus.copy(p.pos);
    } else if (st === 'paused') {
      p.updateCamera(dt);
    }

    this.character.update(st === 'paused' ? 0 : dt);
    this.foliage.update(t);
    this.windmills.update(st === 'paused' ? 0 : dt);
    this.multi.update(dt);
    const grassAt = st === 'menu' || st === 'goodbye' ? this.camera.position.clone().addScaledVector(MENU.f, 14) : this.focus;
    this.grass.update(t, grassAt);
    this.grassFar.update(t, grassAt);
    this.sky.update(dt, this.camera);
    this.lake.update(dt, t);
    this.doorPortal.userData.update(t);
    this.shorePortal.userData.update(t);
    if (this.zone === 'apartment') this.apartment.update(t);
    if (this.zone === 'ocean') {
      this.ocean.update(t, dt, this.camera, st === 'playing' ? p : null, () => {
        this.bubbles.popped++;
        this.audio.pop();
        this.ui.setCount(this.bubbles.popped);
      });
    }
    const chest = st === 'playing' && !this.inside ? p.pos.clone().add(new THREE.Vector3(0, 1, 0)) : null;
    this.bubbles.update(st === 'paused' ? 0 : dt, t, st === 'menu' ? MENU.spot.clone().addScaledVector(MENU.f, 10) : this.focus, chest, () => {
      this.audio.pop();
      this.ui.setCount(this.bubbles.popped);
    });

    // keep the sun's shadow box centred on the action
    const sun = this.sun;
    sun.target.position.copy(this.focus);
    sun.position.copy(this.focus).addScaledVector(this.sunDir, 250);

    this.flare.update(dt, this.camera, this.sunDir, st !== 'loading' && !this.inside);

    if (st === 'menu') {
      const head = this.character.root.position.clone().add(new THREE.Vector3(0, 2.05, 0)).project(this.camera);
      const x = (head.x * 0.5 + 0.5) * innerWidth, y = (-head.y * 0.5 + 0.5) * innerHeight;
      this.ui.placeSpeech(x + 10, y, this.character.state.wave);
    }
  }

  render() {
    if (this.useComposer) this.composer.render();
    else this.renderer.render(this.worldObj ? this.worldObj.scene : this.scene, this.camera);
  }

  run() {
    this.running = true;
    const loop = () => {
      if (!this.running) return;
      this.frame();
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }

  // For tools (screenshots, debugging): stop the loop and step time by hand.
  freeze() {
    this.running = false;
  }

  advance(seconds, fps = 30, render = true) {
    const dt = 1 / fps;
    for (let t = 0; t < seconds; t += dt) {
      this.time += dt;
      this.stateTime += dt;
      this.step(dt);
    }
    if (render) this.render();
  }
}

async function main() {
  const game = new Game();
  window.frutigerFun = game;
  game.bridgeSamples = bridge.samples;
  try {
    await game.build();
  } catch (err) {
    console.error(err);
    game.ui.progress(1, 'Sorry, this browser could not start the game (WebGL 2 is needed).');
    return;
  }
  game.ui.show('menu');
  game.clock.getDelta();
  game.run();
}

main();
