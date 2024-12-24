import { useContext } from "react";
import userSessionContext from "../contexts//ErrorContext";
const useAuth = () => {
  return useContext(userSessionContext);
};

export default useAuth;
