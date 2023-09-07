/* Thirds-party Import */
import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';
import { ipcRenderer } from 'electron';

import { IAlarmListProps } from '.';

const AlarmList: React.FC<IAlarmListProps> = () => {
  const [alarms, setAlarms] = useState('');

  // const ipcRenderer = window.require('electron');

  const handleAlarm = async () => {
    // ipcRenderer.send('request-alarm');
    // const alarms = window.electron.receiveAlarms();
    // setAlarms(alarms);
  };

  // ipcRenderer.on('response-alarm', (event, arg) => {
  //   setAlarms(arg);
  // });

  return (
    <>
      <span>List: {alarms}</span>
      <br></br>
      <Button onClick={handleAlarm}>Click me</Button>
    </>
  );
};

export default AlarmList;
