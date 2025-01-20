import { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { SafeArea } from "../../restaurants/components/utility/safe-area.component";
import {
  Loading,
  LoadingContainer,
  RestaurantList,
} from "../../restaurants/components/restaurants.styles";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";

export const FavouritesScreen = ({ navigation }) => {
  const { isLoading } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);

  console.log(favourites);

  return (
    <>
      <LoadingContainer>
        {isLoading && (
          <Loading animating={true} size={50} color={MD2Colors.orange800} />
        )}
      </LoadingContainer>
      <RestaurantList
        data={favourites}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Restaurants", {
                screen: "RestaurantDetail",
                params: { restaurant: { item } },
              });
            }}
          >
            <RestaurantInfoCard restaurant={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.placeId}
      />
    </>
  );
};
