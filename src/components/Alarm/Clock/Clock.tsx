/* Thirds-party Import */
import React, { useState, useEffect } from 'react';

import { IClockProps } from '.';

const Clock: React.FC<IClockProps> = () => {
  const [time, setTime] = useState<string | null>(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <>{time && <div>{time}</div>}</>;
};

export default Clock;
