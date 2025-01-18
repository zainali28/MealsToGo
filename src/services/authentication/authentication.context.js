import { createContext, useState } from "react";
import { loginRequest } from "./authentication.service";
import * as firebaseAuth from "firebase/auth";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onRegister = (email, password, repeatPassword) => {
    setIsLoading(true);
    if (repeatPassword !== password) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }
    firebaseAuth
      .createUserWithEmailAndPassword(firebaseAuth.getAuth(), email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        setError,
        onRegister,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
