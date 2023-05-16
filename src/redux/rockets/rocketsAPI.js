import axios from 'axios';

export const fetchRockets = async () => {
  try {
    const response = await axios.get('https://api.spacexdata.com/v3/rockets');
    return response.data;
  } catch (error) {
    console.error('Error fetching rockets', error);
    throw error;
  }
};
