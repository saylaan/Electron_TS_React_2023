console.log('Preload has been load');

import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

export type Channels = ['create-alarm', 'update-alarm', 'delete-alarm', 'get-alarms'];

const matchChannel = (channel: string) => {
  switch (channel) {
    case 'get-alarms':
      return 'get-alarms';
    case 'create-alarm':
      return 'create-alarm';
    case 'update-alarm':
      return 'update-alarm';
    case 'delete-alarm':
      return 'delete-alarm';
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
