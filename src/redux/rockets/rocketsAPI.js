import axios from 'axios';

const fetchRockets = async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/rockets');
  return response.data;
};

export default fetchRockets;
