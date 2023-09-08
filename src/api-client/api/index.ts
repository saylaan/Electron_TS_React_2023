import {
  getAlarmsRequest,
  updateAlarmRequest,
  deleteAlarmRequest,
  createAlarmRequest,
} from './alarms/alarms.api';

export function api() {
  return Object.freeze({
    getAlarms: () => getAlarmsRequest(),
    createAlarm: (data: any) => createAlarmRequest(data),
    deleteAlarm: (id: any) => deleteAlarmRequest(id),
    updateAlarm: (data: any, id: any) => updateAlarmRequest(data, id),
  });
}
