import axios from "../API/axios";
import useAuth from "./useAuth";
import useError from "./useError";

const useRefreshToken = () => {
  const { setAuth } = useAuth();
  const { setError } = useError();
  const refresh = async () => {
    try {
      const resp = await axios.get("/auth/refresh", { withCredentials: true });
      setAuth(resp.data.token);
      return resp.data.token;
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError(String(error));
      }
    }
  };
  return refresh;
};

export default useRefreshToken;
