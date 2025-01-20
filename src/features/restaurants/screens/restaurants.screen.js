import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import { SafeArea } from "../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { MD2Colors } from "react-native-paper";
import { Search } from "../components/search.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import {
  Loading,
  LoadingContainer,
  RestaurantList,
} from "../components/restaurants.styles";
import { FadeInView } from "../../../components/animations/fade.animation";

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);
  return (
    <SafeArea>
      <LoadingContainer>
        {isLoading && (
          <Loading animating={true} size={50} color={MD2Colors.orange800} />
        )}
      </LoadingContainer>
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("RestaurantDetail", { restaurant: item });
            }}
          >
            <FadeInView>
              <RestaurantInfoCard restaurant={item} />
            </FadeInView>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.placeId}
      />
    </SafeArea>
  );
};
