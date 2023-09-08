/* Thirds-party Import */
import { createContext } from 'react';
/* Models Import */
import { AlarmModel } from '../api-client/models/alarms/alarm.model';

export const AlarmContext = createContext<AlarmModel[]>([]);
