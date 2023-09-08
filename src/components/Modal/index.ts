export { default as Modal } from './Modal';
/* Models Import */
import { AlarmModel } from '../../api-client/models/alarms/alarm.model';

export const ErrorFetchAlarms = 'Error while trying to fetch the alarms';

export interface IModalProps {
  initialData: AlarmModel | undefined;
  onClose: () => void;
  onSave: (item: AlarmModel) => void;
}
