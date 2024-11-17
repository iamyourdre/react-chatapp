import axios from 'axios';

const useAxios = axios.create({
  baseURL: 'https://react-chatapp-test.vercel.app:5000/api',
  withCredentials: true,
});

export default useAxios;
