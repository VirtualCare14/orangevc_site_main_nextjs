const fs = require('fs');
const path = require('path');

const base = path.resolve(__dirname, '..', '.next', 'cache', 'webpack');
const clientDir = path.join(base, 'client-development');
const serverDir = path.join(base, 'server-development');

try {
  fs.mkdirSync(clientDir, { recursive: true });
  fs.mkdirSync(serverDir, { recursive: true });
  console.log('Ensured .next webpack cache directories');
} catch (e) {
  console.error('Error ensuring next cache dirs:', e);
}

