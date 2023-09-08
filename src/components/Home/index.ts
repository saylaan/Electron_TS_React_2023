export { default as Home } from './Home';
import { ReactNode } from 'react';

export const ErrorFetchAlarms = 'Error while trying to fetch the alarms';
export interface IHomeProps {
  children?: ReactNode;
}
