import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListScreen from '../../screens/listScreen';
import MapScreen from '../../screens/mapScreen';

function ListStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName={'ListScreen'}>
      <Stack.Screen
        name="ListScreen"
        options={{headerShown: false}}
        component={ListScreen}
      />
      <Stack.Screen
        name="MapScreen"
        options={{headerShown: false}}
        component={MapScreen}
      />
    </Stack.Navigator>
  );
}

export default ListStack;
