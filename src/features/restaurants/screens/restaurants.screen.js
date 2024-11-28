import React from "react";
import { View, SafeAreaView, Platform, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const RestaurantScreen = styled(SafeAreaView)`
  padding-top: ${Platform.OS == "android" ? StatusBar.currentHeight : 0}px;
  flex: 1;
  bg-color: ${(props) => props.theme.colors.bg.primary};
`;
const Search = styled(Searchbar)`
  margin: ${(props) => props.theme.space[2]};
`;

const List = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[2]};
`;

export const RestaurantsScreen = () => (
  <RestaurantScreen>
    <Search value="" />
    <List>
      <RestaurantInfoCard />
    </List>
  </RestaurantScreen>
);
