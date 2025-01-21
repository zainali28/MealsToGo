import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { FavouritesScreen } from "../../features/settings/screens/favourites.screen";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { CameraScreen } from "../../features/settings/screens/camera.screen";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ navigation, route }) => (
  <SettingsStack.Navigator
    headerMode="screen"
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <SettingsStack.Screen
      options={{ header: () => null }}
      name="Setting"
      component={SettingsScreen}
    />

    <SettingsStack.Screen name="Favourites" component={FavouritesScreen} />
    <SettingsStack.Screen name="Camera" component={CameraScreen} />
  </SettingsStack.Navigator>
);
