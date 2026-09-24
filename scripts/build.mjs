import { mkdir, copyFile } from 'node:fs/promises';

// Publish only the site's assets, never repository or deployment configuration.
await mkdir('dist', { recursive: true });
for (const file of ['index.html', 'README.md', 'moon.jpg']) {
  await copyFile(file, `dist/${file}`);
}
console.log('Built site in dist/');
