import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

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
      name="Settings"
      component={SettingsScreen}
    />
    <SettingsStack.Screen name="Favourites" component={() => null} />
  </SettingsStack.Navigator>
);
