import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Static informational site. Build output goes to dist/ — drop it on any
// static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages).
export default defineConfig({
  plugins: [react()],
});
