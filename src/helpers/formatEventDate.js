import { format, parseISO, isSameDay, isSameMonth, isSameYear } from 'date-fns';
import { ru } from 'date-fns/locale';

export const formatEventDate = (dtStart, dtEnd) => {
  const startDate = parseISO(dtStart);
  const endDate = parseISO(dtEnd);

  if (isSameDay(startDate, endDate)) {
    return format(startDate, 'dd.MM.yyyy', { locale: ru });
  } else if (isSameMonth(startDate, endDate) && isSameYear(startDate, endDate)) {
    return `${format(startDate, 'dd')}-${format(endDate, 'dd.MM.yyyy', { locale: ru })}`;
  } else if (isSameYear(startDate, endDate)) {
    return `${format(startDate, 'dd.MM')}-${format(endDate, 'dd.MM.yyyy', { locale: ru })}`;
  } else {
    return `${format(startDate, 'dd.MM.yyyy', { locale: ru })}-${format(endDate, 'dd.MM.yyyy', { locale: ru })}`;
  }
}