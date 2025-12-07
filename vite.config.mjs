import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react()
  ],
  root: path.resolve(__dirname, 'brodan.biz'),
  publicDir: 'static',
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'brodan.biz/index.html'),
        now: path.resolve(__dirname, 'brodan.biz/now.html'),
        '404': path.resolve(__dirname, 'brodan.biz/404.html'),
        maintenance: path.resolve(__dirname, 'brodan.biz/503.html')
      }
    }
  }
});
