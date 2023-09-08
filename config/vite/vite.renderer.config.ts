import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import renderer from 'vite-plugin-electron-renderer';

// Project root directory path.
const rootDir = process.cwd();

/**
 * Renderer process - Vite configuration
 */
export default defineConfig(({ mode }) => {
  process.env.NODE_ENV = mode; // Force use mode (fixes HMR for vite plugins)

  return {
    plugins: [
      react(),
      renderer({
        resolve: {
          // C/C++ modules must be pre-bundle
          serialport: { type: 'cjs' },
          // `esm` modules only if Vite does not pre-bundle them correctly
          got: { type: 'esm' },
        },
      }),
    ],
    server: {
      hmr: true,
    },
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src'),
        $src: path.join(rootDir, 'src'),
        $main: path.join(rootDir, 'electron/main'),
        $renderer: path.join(rootDir, 'electron/renderer'),
        $assets: path.join(rootDir, 'public/assets'),
        $components: path.join(rootDir, 'src/components'),
        $styles: path.join(rootDir, 'src/styles'),
      },
    },
    build: {
      rollupOptions: {
        external: ['serialport', 'sqlite3'],
        // input: {
        //   main: path.join(__dirname, 'index.html'),
        // },
      },
    },
  };
});
