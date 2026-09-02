import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves from /shekel-system-schedule/; Render serves from the domain root.
// Render sets the RENDER env var automatically during builds.
export default defineConfig({
  plugins: [react()],
  base: process.env.RENDER ? '/' : '/shekel-system-schedule/',
});
