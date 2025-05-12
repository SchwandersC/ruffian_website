import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // ← 👈 VERY IMPORTANT for GitHub Pages!
  plugins: [react()],
  server: {
    port: 3000
  }
});
