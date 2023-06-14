import {Platform} from 'react-native';
import {Sizes} from './ratio';

export const SCREEN_OPTIONS = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  tabBarStyle: {
    height: Platform.OS === 'ios' ? Sizes(90) : Sizes(60),
  },
};
