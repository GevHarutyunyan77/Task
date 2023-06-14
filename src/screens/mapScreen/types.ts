import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

type RootStackParamList = {
  Map: undefined; // If the screen doesn't have any parameters
  // OR
  // Map: { userId: string }; // If the screen has parameters
};

// Define the navigation prop types for the screen component
type MapScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Map'>;
type MapScreenRouteProp = RouteProp<RootStackParamList, 'Map'>;

export type MapScreenProps = {
  navigation: MapScreenNavigationProp;
  route: MapScreenRouteProp;
};
