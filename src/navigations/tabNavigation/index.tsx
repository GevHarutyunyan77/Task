import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingsScreen from '../../screens/settingsScreen';
import {SCREEN_OPTIONS} from '../../constants/screenOptions';
import ListStack from '../listStack';

import CarSVG from '../../assets/svg/CarSVG';
import SettingsSVG from '../../assets/svg/SettingsSVG';

const Tab = createBottomTabNavigator();

const obj: any = {
  car: CarSVG,
  settings: SettingsSVG,
};

function TabNavigation() {
  const handleSvg = (type: any, active: any) => {
    const SVG = obj[type];
    return <SVG active={active} size={40} />;
  };

  const handleTabFocusedField = (focused: boolean, text: string) => {
    return <>{handleSvg(text, focused)}</>;
  };

  return (
    <Tab.Navigator
      screenOptions={SCREEN_OPTIONS}
      initialRouteName={'ListStack'}>
      <Tab.Screen
        name={'ListStack'}
        component={ListStack}
        options={{
          tabBarIcon: ({focused}) => handleTabFocusedField(focused, 'car'),
        }}
      />
      <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({focused}) => handleTabFocusedField(focused, 'settings'),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;
