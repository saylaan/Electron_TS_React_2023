/* Thirds-party  Import */

export const tryCatch = (controller: any, errorMsg: string) => async () => {
  try {
    await controller();
  } catch (err) {
    console.log(errorMsg);
  }
};

// ? tryCatch(function())
