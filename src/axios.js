import axios from 'axios'

// axios.create([config]) 
const instance = axios.create({
  baseURL: 'http://localhost:5000' 
});

export default instance;