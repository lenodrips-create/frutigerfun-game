// The apartment computer runs the "Windows 7 Simulator" Scratch project
// (scratch.mit.edu/projects/554316635) with TurboWarp's scaffolding runtime,
// using the settings from its TurboWarp packager file. The runtime and the
// project are only downloaded the first time you sit down.

const PROJECT_ID = '554316635';
const SETTINGS = {
  width: 480,
  height: 360,
  framerate: 60,
  turbo: false,
  interpolation: false,
  highQualityPen: false,
  maxClones: 300,
  fencing: true,
  miscLimits: true,
  username: 'player####',
};

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src;
    s.onload = resolve;
    s.onerror = () => reject(new Error('Could not load ' + src));
    document.head.appendChild(s);
  });
}

async function fetchProject(id) {
  const meta = await fetch(`https://trampoline.turbowarp.org/api/projects/${id}`);
  if (!meta.ok) throw new Error(`project info: HTTP ${meta.status}`);
  const { project_token: token } = await meta.json();
  const res = await fetch(`https://projects.scratch.mit.edu/${id}?token=${token}`);
  if (!res.ok) throw new Error(`project: HTTP ${res.status}`);
  return res.arrayBuffer();
}

export class Computer {
  constructor(root) {
    this.root = root;
    this.stage = root.querySelector('.pc-stage');
    this.loading = root.querySelector('.pc-loading');
    this.bar = root.querySelector('.pc-bar i');
    this.message = root.querySelector('.pc-message');
    this.state = 'idle'; // idle | loading | ready | running | error
  }

  async boot() {
    if (this.state !== 'idle') return;
    this.state = 'loading';
    this.progress(0.05);
    try {
      if (location.protocol === 'file:') throw new Error('offline');
      if (!window.Scaffolding) await loadScript('dist/scaffolding-min.js');
      this.progress(0.35);
      const sc = (this.scaffolding = new window.Scaffolding.Scaffolding());
      sc.width = SETTINGS.width;
      sc.height = SETTINGS.height;
      sc.resizeMode = 'preserve-ratio';
      sc.editableLists = false;
      sc.usePackagedRuntime = true;
      sc.setup();
      sc.appendTo(this.stage);
      const vm = sc.vm;
      vm.setTurboMode(SETTINGS.turbo);
      vm.setFramerate(SETTINGS.framerate);
      vm.setInterpolation(SETTINGS.interpolation);
      vm.renderer.setUseHighQualityRender(SETTINGS.highQualityPen);
      vm.setRuntimeOptions({ maxClones: SETTINGS.maxClones, fencing: SETTINGS.fencing, miscLimits: SETTINGS.miscLimits });
      sc.setUsername(SETTINGS.username.replace(/#+/, (m) => String(Math.floor(Math.random() * 10 ** m.length)).padStart(m.length, '0')));
      const storage = sc.storage;
      storage.addWebStore(
        [storage.AssetType.ImageVector, storage.AssetType.ImageBitmap, storage.AssetType.Sound],
        (asset) => `https://assets.scratch.mit.edu/internalapi/asset/${asset.assetId}.${asset.dataFormat}/get/`,
      );
      vm.runtime.on('ASSET_PROGRESS', (done, total) => {
        if (total) this.progress(0.55 + 0.45 * (done / total));
      });
      const project = await fetchProject(PROJECT_ID);
      this.progress(0.55);
      await sc.loadProject(project);
      this.progress(1);
      this.state = 'ready';
      // autoplay is off in the packager settings: click the screen to start
      this.loading.classList.add('click-to-start');
      this.message.textContent = 'Click to start';
    } catch (err) {
      console.warn('Computer could not start the project:', err);
      this.state = 'error';
      this.message.textContent = location.protocol === 'file:'
        ? 'This computer needs the internet: play the online version to use it.'
        : 'Could not reach Scratch to load the project. Check your connection.';
      this.loading.classList.add('error');
    }
  }

  progress(f) {
    this.bar.style.width = `${Math.round(f * 100)}%`;
  }

  // Clicking the screen starts the project the first time.
  click() {
    if (this.state !== 'ready') return;
    this.state = 'running';
    this.loading.classList.add('hidden');
    this.scaffolding.start();
  }

  // Place the screen overlay over the computer's screen (pixels on the page).
  place(x, y, w, h) {
    const s = this.root.style;
    s.left = `${x}px`;
    s.top = `${y}px`;
    s.width = `${w}px`;
    s.height = `${h}px`;
    if (this.scaffolding && (this._w !== Math.round(w) || this._h !== Math.round(h))) {
      this._w = Math.round(w);
      this._h = Math.round(h);
      this.scaffolding.relayout();
    }
  }

  show(on) {
    this.root.classList.toggle('show', on);
    if (on) this.boot();
  }
}
