/* Thirds-party Import */
import React, { useContext } from 'react';
import { Button } from '@chakra-ui/react';
/* API Import */
import { api } from '../../../api-client/api';
/* Contexts Import */
import { AlarmContext } from '../../../contexts/AlarmContext';

import { IAlarmListProps } from '.';

const AlarmList: React.FC<IAlarmListProps> = () => {
  const alarms = useContext(AlarmContext);

  const handleAlarm = async () => {
    api().createAlarm({ timestamp: 131344141 });
  };

  return (
    <>
      <span>List:</span>
      <br></br>
      <div>
        {alarms.map((alarm, index) => (
          <span key={index}>{alarm.id}</span>
        ))}
      </div>
      <br></br>
      <Button onClick={handleAlarm}>Click me</Button>
    </>
  );
};

export default AlarmList;
