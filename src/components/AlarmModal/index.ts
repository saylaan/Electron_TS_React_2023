export { default as AlarmModal } from './AlarmModal';
/* Models Import */
import { AlarmModel } from '../../api-client/models/alarms/alarm.model';

export const ErrorFetchAlarms = 'Error while trying to fetch the alarms';

export interface IAlarmModalProps {
  toggleModal: () => void;
  initialData?: AlarmModel;
  onSave: (item: AlarmModel) => void;
}
