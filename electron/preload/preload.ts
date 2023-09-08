// Say something
console.log('[EVite] : preload executed');

// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

export type Channels = 'ipc-example';

const electronHandler = {
  ipcRenderer: {
    sendMessage(channel: Channels, ...args: unknown[]) {
      ipcRenderer.send(channel, ...args);
    },
    on(channel: Channels, func: (...args: unknown[]) => void) {
      const subscription = (_event: IpcRendererEvent, ...args: unknown[]) => func(...args);
      ipcRenderer.on(channel, subscription);

      return () => {
        ipcRenderer.removeListener(channel, subscription);
      };
    },
    once(channel: Channels, func: (...args: unknown[]) => void) {
      ipcRenderer.once(channel, (_event, ...args) => func(...args));
    },
  },
};

contextBridge.exposeInMainWorld('electron', electronHandler);

export type ElectronHandler = typeof electronHandler;

// NOTE: never use eval here because it can cause security issues.

// // notification example:
// contextBridge.exposeInMainWorld('e_notification', {
//   sendNotification(message) {
//     ipcRenderer.invoke('notify', message);
//   },
// });

// // Export the apis per feature here:
// contextBridge.exposeInMainWorld('api_todos', {
//   async getTodos() {
//     const result = await ipcRenderer.invoke('get-todos');
//     return result;
//   },
//   async addTodo(description) {
//     await ipcRenderer.invoke('add-todo', description);
//   },
//   async updateTodo(args) {
//     await ipcRenderer.invoke('update-todo', args);
//   },
//   async deleteTodo(todoId) {
//     await ipcRenderer.invoke('delete-todo', todoId);
//   },
//   async deleteTodos() {
//     await ipcRenderer.invoke('delete-todos');
//   },
// });
