const fs = require('fs');
const path = require('path');

function ensure(filePath) {
  const dir = path.dirname(filePath);
  fs.mkdirSync(dir, { recursive: true });
  try {
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, '');
    }
  } catch (e) {
    console.error('Failed to ensure', filePath, e);
  }
}

const base = path.resolve(__dirname, '..', '.next', 'cache', 'webpack');
const clientDir = path.join(base, 'client-development');
const serverDir = path.join(base, 'server-development');

try {
  fs.mkdirSync(clientDir, { recursive: true });
  fs.mkdirSync(serverDir, { recursive: true });
  // create empty pack files that Next/webpack sometimes expects
  ensure(path.join(clientDir, '1.pack.gz'));
  ensure(path.join(serverDir, '0.pack.gz'));
  console.log('Ensured .next webpack cache directories and placeholder pack files');
} catch (e) {
  console.error('Error ensuring next cache dirs:', e);
  process.exitCode = 1;
}
