import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import { Searchbar } from "react-native-paper";
import styled, { ThemeProvider } from "styled-components";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { theme } from "../../../infrastructure/theme";

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
  <ThemeProvider theme={theme}>
    <RestaurantScreen>
      <Search value="" />
      <List>
        <RestaurantInfoCard
          restaurant={{
            name: "some restaurant",
            icon: null,
            photos: [
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9oBl8oMj8unCKsHx9WuzVKgxc34HJnei-Qw&s",
            ],
            address: "somewhere",
            isOpenNow: true,
            rating: 3,
            isClosedTemporarily: false,
          }}
        />
      </List>
    </RestaurantScreen>
  </ThemeProvider>
);
