import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

/**
 * GitHub Pages deployment base path:
 * - Defaults to './' so assets resolve properly on any GitHub Pages subpath or local preview.
 * - Can be overridden explicitly via VITE_BASE_PATH (e.g., VITE_BASE_PATH=/repo-name/).
 */
export default defineConfig({
  base: process.env.VITE_BASE_PATH || './',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'react-vendor';
          }
          if (id.includes('node_modules/lucide-react')) return 'icons';
          if (id.includes('node_modules/motion') || id.includes('node_modules/gsap')) return 'motion';
        },
      },
    },
  },
});
