import { useState, useEffect } from 'react';
import { fetchEventsFromPlug } from '../http/plug';
import { fetchEventsFromServer } from '../http/http';

const useFilteredEvents = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFirstRequest, setIsFirstRequest] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        ////////////////////////////////////////////////////////////////////////////////////////////////////////
        // запрос возвращает пустой массив current_and_upcoming, поэтому для разработки брал данные из заглушки
        // тут сам запрос
        const data = await fetchEventsFromServer('6');
        const { videostandEvents } = data;
        setEvents(filterClosestEvents(videostandEvents.current_and_upcoming));
        ///////////////////////////////////////////////////////////////////////////////////////////////////////
        // тут заглушка, если тестить по ней, то закоментить запрос --->
        // const events = await fetchEventsFromPlug();
        // const filteredEvents = filterClosestEvents(events);
        // setEvents(filteredEvents);
        //////////////////////////////////////////////////////////////////////////////////////////////////////
        setIsFirstRequest(false);
      } catch (error) {
        console.log('Ошибка запроса', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();

    const interval = setInterval(fetchEvents, 10000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  
  const filterClosestEvents = (events) => {
    if (!events?.length) {
      return [];
    }
  
    const currentTime = new Date();
    
    const sortByStartDate = (events) => {
      return events.sort((a, b) => {
        const dateA = new Date(a.dt_start);
        const dateB = new Date(b.dt_start);
        return dateA - dateB;
      });
    };

    const [first, second] = sortByStartDate(events);

    for (let event of [first, second]) {
      if (new Date(event.dt_start) < currentTime) {
        event.isCurrent = true;
      } else {
        event.isCurrent = false;
      }
    }

    return [first, second];
  };

  return { events, error, loading, isFirstRequest };
};

export default useFilteredEvents;

