import axios from 'axios';
import API_URL from './apiConfig';

export const fetchEventsFromServer = async (videostandId) => {
  const query = `
    query videostandEvents($videostand_id: ID!) {
      videostandEvents(videostand_id: $videostand_id) {
        current_and_upcoming {
          title
          is_main
          dt_start
          dt_end
          dt_create
        }
        finished {
          title
          is_main
          dt_start
          dt_end
          dt_create
        }
      }
    }
  `;

  const variables = {
    videostand_id: videostandId
  };

  try {
    const response = await axios.post(API_URL, {
      query,
      variables
    });

    return response.data.data;
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};
