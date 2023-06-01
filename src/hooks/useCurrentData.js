import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

export const useCurrentData = () => {
  const [time, setTime] = useState(currentDataFormatter());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(currentDataFormatter());
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return time;
};

const currentDataFormatter = () => {
  const currentDate = new Date();
  const formattedTime = format(currentDate, 'HH:mm', { locale: ru });
  const formattedDate = format(currentDate, 'd MMMM', { locale: ru });
  const formattedDay = format(currentDate, 'EEEE', { locale: ru });

  return {
    time: formattedTime,
    date: formattedDate,
    day: formattedDay
  };
};
