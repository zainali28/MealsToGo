import * as firebaseAuth from "firebase/auth";

export const loginRequest = (email, password) =>
  firebaseAuth.signInWithEmailAndPassword(
    firebaseAuth.getAuth(),
    email,
    password
  );
