export const allSettleWrap = async (promise: any): Promise<{ data: any; error: any }> => {
  return Promise.allSettled([promise]).then(([{ reason, value }]: any) => {
    return { data: value, error: reason };
  });
};

// ? const result = await allSettleWrap(function())
// ? const { data: data1, error: error1 } = await allSettleWrap(function())
