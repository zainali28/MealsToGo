import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { Spacer } from "../spacer/spacer.component";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";
import { Text } from "../typography/text.component";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) return;
  return (
    <FavouritesWrapper>
      <Spacer position="left" size="large">
        <Text variant="caption">Favourites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((r) => (
          <TouchableOpacity
            key={r.name}
            onPress={() => onNavigate("RestaurantDetail", { restaurant: r })}
          >
            <Spacer key={r.name} position="left" size="medium">
              <CompactRestaurantInfo restaurant={r} />
            </Spacer>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </FavouritesWrapper>
  );
};
