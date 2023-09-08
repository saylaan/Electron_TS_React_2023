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
  window.electron.ipcRenderer.sendMessage('create-alarm', { ...data });
  window.electron.ipcRenderer.once('create-alarm', (arg) => console.log(arg));
};

export const updateAlarmRequest = async (data: any, id: number) => {
  // try {
  //   const res: AxiosResponse = await axiosInstance.patch(`${API_ADMIN_URL}/${id}`, data);
  //   return res.data;
  // } catch (err) {
  //   if (err instanceof AxiosError) {
  //     throw new AxiosError(err.response?.data?.error);
  //   } else {
  //     throw new Error('Unexpected error');
  //   }
  // }
};

export const deleteAlarmRequest = async (timerId: AlarmModel['id']) => {
  // try {
  //   const res = await axiosInstance.delete(`${API_ADMIN_URL}/${userId}`);
  //   return res.data;
  // } catch (err) {
  //   if (err instanceof AxiosError) {
  //     throw new AxiosError(err.response?.data?.error);
  //   } else {
  //     throw new Error('Unexpected error');
  //   }
  // }
};
3;
