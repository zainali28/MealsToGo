import { Text } from "react-native";
import { SafeArea } from "../../features/restaurants/components/utility/safe-area.component";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { RestaurantNavigator } from "./restaurants.navigator";

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

const MapsScreen = () => (
  <SafeArea>
    <Text>Maps!</Text>
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
  <NavigationContainer>
    <AppTab.Navigator screenOptions={createScreenOptions}>
      <AppTab.Screen name="Restaurants" component={RestaurantNavigator} />
      <AppTab.Screen name="Map" component={MapsScreen} />
      <AppTab.Screen name="Settings" component={SettingsScreen} />
    </AppTab.Navigator>
  </NavigationContainer>
);
