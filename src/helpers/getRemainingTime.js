import { differenceInSeconds, differenceInMinutes, differenceInHours, differenceInDays, parseISO } from 'date-fns';

export const getRemainingTime = (dateTime) => {
  const currentDateTime = new Date();
  const targetDateTime = new Date(dateTime);
  
  const diffInSeconds = differenceInSeconds(targetDateTime, currentDateTime);
  const diffInMinutes = differenceInMinutes(targetDateTime, currentDateTime);
  const diffInHours = differenceInHours(targetDateTime, currentDateTime);
  const diffInDays = differenceInDays(targetDateTime, currentDateTime);
  
  const days = Math.floor(diffInDays);
  const hours = Math.floor(diffInHours % 24);
  const minutes = Math.floor(diffInMinutes % 60);
  const seconds = Math.floor(diffInSeconds % 60);
  
  let daysNum = Math.abs(days);
  let daysWord = getRussianWord(daysNum, ['день', 'дня', 'дней']);
  let hoursNum = Math.abs(hours);
  let hoursWord = getRussianWord(hoursNum, ['час', 'часа', 'часов']);
  const minutesWord = getRussianWord(minutes, ['минута', 'минуты', 'минут']);
  const secondsWord = getRussianWord(seconds, ['секунда', 'секунды', 'секунд']);
  
  if (daysNum > 7) {
    daysNum = daysNum % 7;
    hoursNum += Math.floor(daysNum / 7) * 24;
    daysWord = getRussianWord(daysNum, ['день', 'дня', 'дней']);
    hoursWord = getRussianWord(hoursNum, ['час', 'часа', 'часов']);
  }
  
  return {
    daysNum,
    daysWord,
    hoursNum,
    hoursWord,
    minutes,
    minutesWord,
    seconds,
    secondsWord,
  };
};

const getRussianWord = (number, words) => {
  const cases = [2, 0, 1, 1, 1, 2];
  return words[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
};
