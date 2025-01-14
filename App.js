import React from "react";
import { Text } from "react-native";
import { ThemeProvider } from "styled-components";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStaticNavigation } from "@react-navigation/native";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { theme } from "./src/infrastructure/theme";
import { SafeArea } from "./src/features/restaurants/components/utility/safe-area.component";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";

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

const MyTabs = createBottomTabNavigator({
  screens: {
    Restaurants: RestaurantsScreen,
    Map: MapsScreen,
    Settings: SettingsScreen,
  },
  screenOptions: ({ route }) => ({
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
  }),
});

const Navigation = createStaticNavigation(MyTabs);

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <RestaurantsContextProvider>
        <Navigation />
      </RestaurantsContextProvider>
    </ThemeProvider>
  );
}
