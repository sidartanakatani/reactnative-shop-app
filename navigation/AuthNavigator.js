import React from 'react';
import { enableScreens } from 'react-native-screens';
import { createStackNavigator } from '@react-navigation/stack';

import StartupScreen from '../screens/StartupScreen';
import AuthScreen from '../screens/user/AuthScreen';

enableScreens();

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName={StartupScreen}>
      <Stack.Screen name="Startup" component={StartupScreen} />
      <Stack.Screen name="Auth" component={AuthScreen} />
    </Stack.Navigator>
  );
};
