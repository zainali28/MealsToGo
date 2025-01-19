import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../authentication/authentication.context";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const { user } = useContext(AuthContext);

  const saveFavourites = async (uid) => {
    try {
      const jsonValue = JSON.stringify(favourites);
      await AsyncStorage.setItem(`favs-${uid}`, jsonValue);
    } catch (e) {
      console.log("error storing", e);
    }
  };

  const loadFavourites = async (uid) => {
    try {
      const jsonValue = await AsyncStorage.getItem(`favs-${uid}`);
      if (jsonValue !== null) setFavourites(JSON.parse(jsonValue));
    } catch (e) {
      console.log("error loading", e);
    }
  };

  useEffect(() => {
    if (user) loadFavourites(user.uid);
  }, [user]);

  useEffect(() => {
    if (user) saveFavourites(user.uid);
  }, [favourites, user]);

  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const remove = (restaurant) => {
    setFavourites(favourites.filter((x) => x.placeId !== restaurant.placeId));
  };

  return (
    <FavouritesContext.Provider
      value={{ favourites, addToFavourites: add, removeFromFavourites: remove }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
