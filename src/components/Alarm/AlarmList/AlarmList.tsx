/* Thirds-party Import */
import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';

import { IAlarmListProps } from '.';

const AlarmList: React.FC<IAlarmListProps> = () => {
  const [alarms, setAlarms] = useState('');

  const handleAlarm = async () => {
    window.electron.ipcRenderer.once('create-timer', (arg) => {
      console.log(arg);
    });
    window.electron.ipcRenderer.sendMessage('create-timer', ['ping']);
  };

  return (
    <>
      <span>List: {alarms}</span>
      <br></br>
      <Button onClick={handleAlarm}>Click me</Button>
    </>
  );
};

export default AlarmList;