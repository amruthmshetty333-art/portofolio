import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use relative paths in production to ensure the site loads correctly on both:
  // - https://<username>.github.io/
  // - https://<username>.github.io/<repo-name>/
  base: '/portofolio/',
});
