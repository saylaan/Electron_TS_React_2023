import { useEffect, useState } from 'react';
// import { LoadingStatus } from '../constants/constants';
// import { store } from '../store/store';

export const useFetch = <T>(
  fetchFunc: () => Promise<T>,
  fetchFuncResponse?: any,
): { response: T | undefined; error: unknown | undefined } => {
  //   const { dispatchApiStatus } = useContext(store);
  const [error, setError] = useState<unknown>();
  const [response, setResponse] = useState<T>();

  useEffect(() => {
    async function fetchData() {
      try {
        // dispatchApiStatus(LoadingStatus.LOADING);
        const response: T = await fetchFunc();
        setResponse(response);
      } catch (err) {
        setError(err);
      } finally {
        // dispatchApiStatus(LoadingStatus.END_ACTION);
      }
    }
    if (!fetchFuncResponse) {
      fetchData();
    }
  }, []);

  return { response, error };
};
