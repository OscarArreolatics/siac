import axios from 'axios';

const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character/", 
  headers: {
    'Content-Type': 'application/json',
  },
}); 

export default api;