/* Constant Import */
import {
  API_CREATE_ALARM,
  API_DELETE_ALARM,
  API_GET_ALARMS,
  API_UPDATE_ALARM,
} from '../api.contants';
/* Models Import */
import { AlarmModel } from '../../models/alarms/alarm.model';

export const getAlarmsRequest = async () => {
  window.electron.ipcRenderer.sendMessage(`${API_GET_ALARMS}`);
};

export const createAlarmRequest = async (data: any) => {
  window.electron.ipcRenderer.sendMessage(`${API_CREATE_ALARM}`, { ...data });
};

export const updateAlarmRequest = async (data: any, alarmId: number) => {
  window.electron.ipcRenderer.sendMessage(`${API_UPDATE_ALARM}`, {
    data: data,
    id: alarmId,
  });
};

export const deleteAlarmRequest = async (alarmId: AlarmModel['id']) => {
  window.electron.ipcRenderer.sendMessage(`${API_DELETE_ALARM}`, alarmId);
};
