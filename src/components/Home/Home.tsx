/* Thirds-party Import */
import React from 'react';
/* Components Import */
import { BasicLayout } from '../../layouts/BasicLayout';
import { Alarm } from '../Alarm';
import { IHomeProps } from '.';

const AlarmList: React.FC<IHomeProps> = () => {
  // function App({ Component, pageProps }: any) {
  // const onGetAlarms = useCallback(async () => {
  //   try {
  //     const res: UserModel[] | undefined = await getUsersRequest();
  //     if (res) setData(res);
  //   } catch (error) {
  //     const typedError = error as Error;
  //     setErrorMessage(typedError.message);
  //   }
  // }, []);

  // useEffect(() => {
  //   onGetAlarms();
  // }, [onGetAlarms]);
  return (
    <BasicLayout>
      <Alarm />
    </BasicLayout>
  );
};

export default AlarmList;
