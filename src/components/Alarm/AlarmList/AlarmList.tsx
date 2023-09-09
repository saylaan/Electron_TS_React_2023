/* Thirds-party Import */
import React, { useContext, useState, useLayoutEffect } from 'react';
import { Button, VStack, StackDivider } from '@chakra-ui/react';
/* API Import */
import { api } from '../../../api-client/api';
/* Contexts Import */
import { AlarmContext } from '../../../contexts/AlarmContext';
/* Components Import */
import { AlarmItem } from '../AlarmItem';
import { AlarmModal } from '../../AlarmModal';
/* Models Import */
import { AlarmModel } from '../../../api-client/models/alarms/alarm.model';
/* Constant Import */
import {
  API_CREATE_ALARM,
  API_DELETE_ALARM,
  API_UPDATE_ALARM,
} from '../../../api-client/api/api.contants';

import { IAlarmListProps } from '.';

const AlarmList: React.FC<IAlarmListProps> = () => {
  const alarmContext = useContext(AlarmContext);
  const [modal, setModal] = useState(false);
  const [alarms, setAlarms] = useState<AlarmModel[]>([]);
  const [edit, setEdit] = useState<AlarmModel>();

  const toggleModal = () => {
    if (modal) {
      setEdit(undefined);
    }
    setModal(!modal);
  };
  const onSave = (alarm: AlarmModel) => {
    const update = alarms.find((el) => el.id === alarm.id);
    if (update) {
      const updatedAlarm = alarms.map((el) => {
        if (el.id === alarm.id) {
          return alarm;
        }
        return el;
      });
      setAlarms(updatedAlarm);
    }
    api().createAlarm({ timestamp: 1313441410 });
    window.electron.ipcRenderer.once(`${API_CREATE_ALARM}`, (arg) => console.log(arg));
    setAlarms([...alarms, alarm]);
    toggleModal();
  };

  const onDelete = async (id: number) => {
    setAlarms(alarms.filter((alarm) => alarm.id !== id));
    api().deleteAlarm(id);
    window.electron.ipcRenderer.once(`${API_DELETE_ALARM}`, (arg) => console.log(arg));
  };

  const onChange = async (id: number) => {
    const newState = alarms.map((alarm) => {
      if (alarm.id === id) {
        return {
          ...alarm,
          is_active: !alarm.is_active,
        };
      }

      return alarm;
    });
    setAlarms(newState);
    api().updateAlarm(newState[id - 1], id);
  };

  const onEdit = async (id: number) => {
    const editAlarm = alarms.find((alarm) => alarm.id === id);
    if (editAlarm) {
      setEdit(editAlarm);
    }
    toggleModal();
    // api().updateAlarm({ timestamp: 1313441410 }, id);
    // window.electron.ipcRenderer.once(`${API_UPDATE_ALARM}`, (arg) => console.log(arg));
  };

  useLayoutEffect(() => {
    if (alarmContext) setAlarms(alarmContext);
  }, [alarmContext]);

  return (
    <>
      {modal && (
        <AlarmModal
          toggleModal={toggleModal}
          onSave={onSave}
          initialData={edit}
        />
      )}
      <VStack
        divider={<StackDivider borderColor="gray.500" />}
        spacing={4}
        align="stretch">
        {alarms &&
          alarms.map((alarm, index) => (
            <AlarmItem
              key={index}
              alarm={alarm}
              idAlarm={alarm.id}
              onDelete={onDelete}
              onChange={onChange}
              onEdit={onEdit}
            />
          ))}
      </VStack>
      <Button
        bg="whiteAlpha.800"
        onClick={toggleModal}>
        Add Alarm
      </Button>
    </>
  );
};

export default AlarmList;
