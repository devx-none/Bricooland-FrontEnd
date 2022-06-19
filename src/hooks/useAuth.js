import { useContext, useDebugValue } from "react";
import AuthContext from "../contexts/AuthProvider";

export const useAuth = () => {
  const { auth } = useContext(AuthContext);
  useDebugValue(auth, (authCtx) =>
    authCtx?.accessToken ? "Logged In" : "Logged Out"
  );
  return useContext(AuthContext);
};

export default useAuth;
