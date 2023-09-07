import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electron', {
  alarmApi: {
    sendAlarms() {
      ipcRenderer.send('response-alarm', 'test');
    },
    receiveAlarms() {
      ipcRenderer.send('response-alarm', 'test');
    },
  },
  // setTest: (result: string) => ipcRenderer.send('response-alarm', result),
});
