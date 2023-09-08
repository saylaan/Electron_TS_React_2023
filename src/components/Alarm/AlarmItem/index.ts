export { default as AlarmItem } from './AlarmItem';
/* Models Import */
import { AlarmModel } from '../../../api-client/models/alarms/alarm.model';

export interface IAlarmItemProps {
  idAlarm: number | undefined;
  alarm: AlarmModel;
  onChange: (id: number) => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  // handleToggle: (id: number) => MouseEventHandler<HTMLDivElement>;
  // handleEdit: (id: number) => MouseEventHandler<HTMLButtonElement>;
  // handleDelete: (id: number) => MouseEventHandler<HTMLButtonElement>;
}
