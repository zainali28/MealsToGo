import React from "react";
import { View, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { SafeArea } from "../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const Search = styled(Searchbar)`
  margin: ${(props) => props.theme.space[2]};
`;

const List = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[2]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => (
  <SafeArea>
    <Search value="" placeholder="Search" />
    <RestaurantList
      data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }]}
      renderItem={() => <RestaurantInfoCard />}
      keyExtractor={(item) => item.name}
    />
  </SafeArea>
);
