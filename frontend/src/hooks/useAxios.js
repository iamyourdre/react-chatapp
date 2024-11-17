import axios from 'axios';

const useAxios = axios.create({
<<<<<<< HEAD
  baseURL: 'http://localhost:5000/api',
=======
  baseURL: 'https://react-chatapp-test.vercel.app:5000/api',
>>>>>>> b436fe3035be017c29ce166ae1e0b857b215af4e
  withCredentials: true,
});

export default useAxios;
