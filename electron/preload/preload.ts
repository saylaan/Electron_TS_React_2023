console.log('Preload has been load');

import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

export type Channels = ['create-timer', 'update-timer', 'delete-timer', 'get-timers'];

const matchChannel = (channel: string) => {
  switch (channel) {
    case 'create-timer':
      return 'create-timer';
    case 'get-timers':
      return 'get-timers';
    case 'update-timer':
      return 'update-timer';
    case 'delete-timer':
      return 'delete-timers';
    default:
      return 'ipc';
  }
};

const electronHandler = {
  ipcRenderer: {
    sendMessage(channel: string, ...args: unknown[]) {
      ipcRenderer.send(matchChannel(channel), ...args);
    },
    on(channel: string, func: (...args: unknown[]) => void) {
      const subscription = (_event: IpcRendererEvent, ...args: unknown[]) => func(...args);
      ipcRenderer.on(matchChannel(channel), subscription);

      return () => {
        ipcRenderer.removeListener(matchChannel(channel), subscription);
      };
    },
    once(channel: string, func: (...args: unknown[]) => void) {
      ipcRenderer.once(matchChannel(channel), (_event, ...args) => func(...args));
    },
  },
};

contextBridge.exposeInMainWorld('electron', electronHandler);

export type ElectronHandler = typeof electronHandler;
