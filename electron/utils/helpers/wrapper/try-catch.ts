/* Thirds-party  Import */

export const tryCatch = (controller: any, event: any) => async () => {
  try {
    await controller();
  } catch (err) {
    event.reply('send-error', 'An unknown error occur');
  }
};

// ? tryCatch(function())
