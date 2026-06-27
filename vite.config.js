import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Static informational site. Build output goes to dist/.
// GitHub Pages serves this project repo under a sub-path, so the production
// build uses base "/eduband-website/"; local dev stays at "/".
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/eduband-website/' : '/',
  plugins: [react()],
}));
