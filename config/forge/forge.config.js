/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const rootDir = process.cwd();

module.exports = {
  packagerConfig: {
    asar: false,
    executableName: 'MyAlarm',
    appCopyright: 'Copyright (C) 2023 Huck Geoffroy, MyAlarm',
    icon: path.resolve(__dirname, 'assets/volta'),
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      // config: {
      //   setupIcon: path.resolve(__dirname, 'assets/volta.png'),
      // },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
      config: {
        name: 'myalarm',
        icon: path.resolve(__dirname, 'assets/volta.png'),
      },
    },
    {
      name: '@electron-forge/maker-deb',
      config: {
        options: {
          icon: path.resolve(__dirname, 'assets/volta.png'),
        },
      },
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {
        options: {
          icon: path.resolve(__dirname, 'assets/volta.png'),
        },
      },
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-vite',
      config: {
        build: [
          {
            entry: path.join(rootDir, 'electron/main.ts'),
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
