/* Thirds-party Import */
import React from 'react';
import { Button, Radio, RadioGroup } from '@chakra-ui/react';

import { IAlarmItemProps } from '.';

const AlarmItem: React.FC<IAlarmItemProps> = ({ alarm, onChange, onDelete, onEdit, idAlarm }) => {
  const getHourAlarm = (timestamp: Date): string => {
    return new Date(timestamp).toLocaleTimeString();
  };

  function handleCheck() {
    idAlarm && onChange(idAlarm);
  }

  function handleEdit() {
    idAlarm && onEdit(idAlarm);
  }

  function handleDelete() {
    idAlarm && onDelete(idAlarm);
  }

  return (
    <>
      <div>
        <RadioGroup>
          <Radio onClick={handleCheck} />
        </RadioGroup>
        {<span>{getHourAlarm(alarm.timestamp)}</span>}
        <div>
          <Button onClick={handleDelete}>Delete</Button>
          <Button onClick={handleEdit}>Edit</Button>
        </div>
      </div>
    </>
  );
};

export default AlarmItem;
