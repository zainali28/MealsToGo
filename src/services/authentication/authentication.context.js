import { createContext, useEffect, useState } from "react";
import { loginRequest } from "./authentication.service";
import * as firebaseAuth from "firebase/auth";
import { auth } from "../../../firebaseConfig";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    firebaseAuth.onAuthStateChanged(auth, (usr) => {
      if (usr) {
        setUser(usr);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    });
  }, [user]);

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
      .createUserWithEmailAndPassword(auth, email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onLogout = () => {
    setUser(null);
    firebaseAuth
      .signOut(auth)
      .then(() => {
        setUser(null);
        setError(null);
        console.log("signed out");
      })
      .catch((e) => console.log(e.toString()));
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
        onLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
