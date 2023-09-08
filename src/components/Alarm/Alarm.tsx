/* Thirds-party Import */
import React from 'react';
/* Components Import */
import { Clock } from './Clock';
import { AlarmList } from './AlarmList';

import { IAlarmProps } from '.';

const Alarm: React.FC<IAlarmProps> = () => {
  return (
    <>
      <Clock />
      <AlarmList />
    </>
  );
};

export default Alarm;
