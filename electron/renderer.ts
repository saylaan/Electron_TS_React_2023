import '../src/index';

declare global {
  interface Window {
    electron: {
      sendAlarms: (str: string) => void;
      receiveAlarms: () => string;
    };
  }
}
