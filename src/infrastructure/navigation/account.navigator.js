import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";

const AccountStack = createStackNavigator();

const createScreenOptions = {
  headerShown: false,
};

export const AccountNavigator = () => (
  <AccountStack.Navigator screenOptions={createScreenOptions}>
    <AccountStack.Screen
      name="Main"
      component={() => (
        <View>
          <Text>AUTH SCREEN</Text>
        </View>
      )}
    />
    <AccountStack.Screen
      name="Login"
      component={() => (
        <View>
          <Text>Login SCREEN</Text>
        </View>
      )}
    />
  </AccountStack.Navigator>
);
