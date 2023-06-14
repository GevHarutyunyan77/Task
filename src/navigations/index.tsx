import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import tabNavigation from './tabNavigation';
import DriverScreen from '../screens/driverScreen';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabNavigation"
        options={{headerShown: false}}
        component={tabNavigation}
      />
      <Stack.Screen
        name="DriverScreen"
        options={{headerShown: false}}
        component={DriverScreen}
      />
    </Stack.Navigator>
  );
}

export default RootNavigator;
