import axios from 'axios';

const api = axios.create({
  baseURL: 'https://omgvamp-hearthstone-v1.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': '3f696d489cmshd8cf7fa855e27a2p14135ajsn468b43cc604d',
    'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
  }
});

export default api;