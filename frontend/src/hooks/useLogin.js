import { useState } from "react";
import useAxios from "./useAxios";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setUser } = useAuthContext();

  const login = async (username, password) => {
    setLoading(true);
    try {
      
      const res = await useAxios.post('/auth/login', {
        username, password
      });

      localStorage.setItem('user', JSON.stringify(res.data));
      setUser(res.data);

    } catch (error) {
      toast.error(error.response?.data?.error || error.message);
    } finally {
      setLoading(false);
    }
  }
  return { loading, login };
}
export default useLogin