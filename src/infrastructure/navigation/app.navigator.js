import { Text } from "react-native";
import { SafeArea } from "../../features/restaurants/components/utility/safe-area.component";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RestaurantNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";

const TAB_ICON = {
  Restaurants: "restaurant",
  Map: "map",
  Settings: "settings",
};
const SettingsScreen = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);

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
  <AppTab.Navigator screenOptions={createScreenOptions}>
    <AppTab.Screen name="Restaurants" component={RestaurantNavigator} />
    <AppTab.Screen name="Map" component={MapScreen} />
    <AppTab.Screen name="Settings" component={SettingsScreen} />
  </AppTab.Navigator>
);
