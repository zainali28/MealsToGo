import { createContext, useState } from "react";
import { loginRequest } from "./authentication.service";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    loginRequest(email, password)
      .then((u) => setUser(u))
      .catch((e) => setError(e));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        error,
        onLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
