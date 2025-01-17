import { useContext } from "react";
import { FavouritesContext } from "../../services/favourites/favourites.context";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 22px;
  right: 22px;
  z-index: 9;
`;

export const Favourite = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);
  const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId);
  return (
    <FavouriteButton
      onPress={() =>
        isFavourite
          ? removeFromFavourites(restaurant)
          : addToFavourites(restaurant)
      }
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "red" : "white"}
      />
    </FavouriteButton>
  );
};
