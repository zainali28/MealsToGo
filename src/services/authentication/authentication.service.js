import * as firebaseApp from "firebase/app";
import * as firebaseAuth from "firebase/auth";

export const loginRequest = (email, password) =>
  firebaseAuth
    .signInWithEmailAndPassword(
      firebaseAuth.getAuth(),
      "test@test.com",
      "password"
    )
    .then((user) => {
      console.log("Signed in with email and password:", user);
      return user;
    })
    .catch((error) => {
      console.error("Error signing in with email and password:", error);
    });
