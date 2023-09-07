/* Thirds-party Import */
import React from 'react';
/* Components Import */
import { Clock } from '../Clock';
import { AlarmList } from '../AlarmList';

import { IAlarmProps } from '.';

const Alarm: React.FC<IAlarmProps> = () => {
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
    <>
      <Clock />
      <AlarmList />
    </>
  );
};

export default Alarm;
