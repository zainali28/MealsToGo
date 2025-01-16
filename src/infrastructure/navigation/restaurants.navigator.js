import React from "react";
import { RestaurantDetailCard } from "../../features/restaurants/screens/restaurant-detail.screen";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantNavigator = () => (
  <RestaurantStack.Navigator
    screenOptions={{ ...TransitionPresets.ModalTransition, headerShown: false }}
  >
    <RestaurantStack.Screen name="Restaurant" component={RestaurantsScreen} />
    <RestaurantStack.Screen
      name="RestaurantDetail"
      component={RestaurantDetailCard}
    />
  </RestaurantStack.Navigator>
);
