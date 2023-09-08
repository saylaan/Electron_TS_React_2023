import { defineConfig } from 'vite';

/**
 * Preload process - Vite configuration
 */
export default defineConfig({
  build: {
    rollupOptions: {
      external: ['serialport', 'sqlite3'],
    },
  },
});
