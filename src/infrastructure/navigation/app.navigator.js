import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RestaurantNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { SettingsNavigator } from "./settings.navigator";

const TAB_ICON = {
  Restaurants: "restaurant",
  Map: "map",
  Settings: "settings",
};

const AppTab = createBottomTabNavigator();
const createScreenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => (
    <Ionicons
      name={TAB_ICON[route.name] + (focused ? "" : "-outline")}
      size={size}
      color={color}
    />
  ),
  tabBarActiveTintColor: "tomato",
  tabBarInactiveTintColor: "gray",
  headerShown: false,
});

export const AppNavigator = () => (
  <FavouritesContextProvider>
    <LocationContextProvider>
      <RestaurantsContextProvider>
        <AppTab.Navigator screenOptions={createScreenOptions}>
          <AppTab.Screen name="Restaurants" component={RestaurantNavigator} />
          <AppTab.Screen name="Map" component={MapScreen} />
          <AppTab.Screen name="Settings" component={SettingsNavigator} />
        </AppTab.Navigator>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavouritesContextProvider>
);
