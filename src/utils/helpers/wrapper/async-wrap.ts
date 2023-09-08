export const asyncWrap = async (promise: any) => {
  try {
    const data = await promise;
    return [data, null];
  } catch (err) {
    return [null, err];
  }
};

// ? const [data, error] = await asyncWrap(function())
