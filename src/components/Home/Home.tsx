/* Thirds-party Import */
import React, { useCallback, useEffect, useState } from 'react';
/* Components Import */
import { Alarm } from '../Alarm';
/* Contexts Import */
import { AlarmContext } from '../../contexts/AlarmContext';
/* API Import */
import { api } from '../../api-client/api';
/* Models Import */
import { AlarmModel } from '../../api-client/models/alarms/alarm.model';
/* Constants Import */
import { API_GET_ALARMS } from '../../api-client/api/api.contants';
/* Utils Import */
import { tryCatch } from '../..//utils/helpers';

import { IHomeProps, ErrorFetchAlarms } from '.';

const AlarmList: React.FC<IHomeProps> = () => {
  const [alarms, setAlarms] = useState<AlarmModel[]>([]);

  const getAlarm = async () => {
    await api().getAlarms();
    window.electron.ipcRenderer.once(`${API_GET_ALARMS}`, (arg) => {
      setAlarms(arg as unknown as AlarmModel[]);
    });
  };

  const onGetAlarms = useCallback(async () => tryCatch(getAlarm(), ErrorFetchAlarms), []);

  useEffect(() => {
    let isLoading = false;
    if (!isLoading) onGetAlarms();
    return () => {
      isLoading = true;
    };
  }, [onGetAlarms]);

  return (
    <AlarmContext.Provider value={alarms}>
      <Alarm />
    </AlarmContext.Provider>
  );
};

export default AlarmList;
