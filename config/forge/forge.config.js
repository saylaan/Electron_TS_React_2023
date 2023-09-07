/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const rootDir = process.cwd();

module.exports = {
  packagerConfig: {
    asar: false,
    executableName: 'MyAlarm',
    appCopyright: 'Copyright (C) 2023 Huck Geoffroy, MyAlarm',
    icon: path.resolve('assets/vite.svg'),
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-vite',
      config: {
        build: [
          {
            entry: path.join(rootDir, 'electron/main/main.ts'),
            config: path.join(rootDir, 'config/vite/vite.main.config.ts'),
          },
          {
            entry: path.join(rootDir, 'electron/preload/preload.ts'),
            config: path.join(rootDir, 'config/vite/vite.preload.config.ts'),
          },
        ],
        renderer: [
          {
            name: 'main_window',
            config: path.join(rootDir, 'config/vite/vite.renderer.config.ts'),
          },
        ],
      },
    },
  ],
};
