// Bundles src/ into dist/ so index.html runs straight from disk, no server needed.
//   node build.mjs           one-off minified build
//   node build.mjs --watch   rebuild on change
//   node build.mjs --serve   rebuild on change and serve on http://localhost:8080
import * as esbuild from 'esbuild';
import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

const dev = process.argv.includes('--watch') || process.argv.includes('--serve');
const common = { bundle: true, minify: !dev, target: ['es2022'], logLevel: 'info', legalComments: 'eof' };
const builds = [
  { ...common, entryPoints: ['src/main.js'], outfile: 'dist/frutiger-fun.js', format: 'iife' },
  { ...common, entryPoints: ['src/style.css'], outfile: 'dist/frutiger-fun.css', loader: { '.woff2': 'dataurl', '.woff': 'empty' } },
];

if (dev) {
  const ctxs = await Promise.all(builds.map((b) => esbuild.context(b)));
  await Promise.all(ctxs.map((c) => c.watch()));
  if (process.argv.includes('--serve')) {
    const { port } = await ctxs[0].serve({ servedir: '.', port: 8080 });
    console.log(`Frutiger Fun on http://localhost:${port}`);
  }
} else {
  await Promise.all(builds.map((b) => esbuild.build(b)));
  // stamp index.html with a content hash so browsers never use a stale copy
  const hash = createHash('sha1').update(readFileSync('dist/frutiger-fun.js')).update(readFileSync('dist/frutiger-fun.css')).digest('hex').slice(0, 10);
  const html = readFileSync('index.html', 'utf8').replace(/dist\/frutiger-fun\.(js|css)(\?v=[0-9a-f]+)?/g, `dist/frutiger-fun.$1?v=${hash}`);
  writeFileSync('index.html', html);
}
