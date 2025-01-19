import * as firebaseApp from "firebase/app";
import * as firebaseAuth from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_APP_ID,
};

export const app = !firebaseApp.getApps().length
  ? firebaseApp.initializeApp(firebaseConfig)
  : firebaseApp.getApp();

export const auth = firebaseAuth.initializeAuth(app, {
  persistence: firebaseAuth.getReactNativePersistence(ReactNativeAsyncStorage),
});
