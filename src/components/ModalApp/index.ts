export { default as ModalApp } from './ModalApp';
/* Models Import */
import { AlarmModel } from '../../api-client/models/alarms/alarm.model';

export const ErrorFetchAlarms = 'Error while trying to fetch the alarms';

export interface IModalAppProps {
  initialRef: any;
  finalRef: any;
  isOpen: any;
  onClose: any;
  onSave: (item: AlarmModel) => void;
}
