import { eventsData } from "../data";

export const fetchEventsFromPlug = async () => {

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(eventsData);
    }, 1000);
  });
};

