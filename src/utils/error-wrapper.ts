export const allSettleWrap = async (promise: any): Promise<{ data: any; error: any }> => {
  return Promise.allSettled([promise]).then(([{ reason, value }]: any) => {
    return { data: value, error: reason };
  });
};

export const asyncWrap = async (promise: any) => {
  try {
    const data = await promise;
    return [data, null];
  } catch (err) {
    return [null, err];
  }
};
