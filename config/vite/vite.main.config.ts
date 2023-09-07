import { defineConfig } from 'vite';

/**
 * Main process - Vite configuration
 */
export default defineConfig({
  resolve: {
    // Some libs that can run in both Web and Node.js, such as `axios`, we need to tell Vite to build them in Node.js.
    browserField: false,
    mainFields: ['module', 'jsnext:main', 'jsnext'],
  },
  build: {
    rollupOptions: {
      external: ['serialport', 'sqlite3'],
      // input: {
      //   main: path.join(__dirname, 'index.html'),
      // },
    },
  },
});
