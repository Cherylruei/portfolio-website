import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // eslint-disable-next-line no-undef
  base: process.env.NODE_ENV === 'production' ? '/portfolio-website/' : '/',
  plugins: [react()],
  server: {
    port: 3000,
  },
});
