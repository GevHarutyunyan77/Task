import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

type RootStackParamList = {
  List: undefined; // If the screen doesn't have any parameters
  // OR
  // Map: { userId: string }; // If the screen has parameters
};

// Define the navigation prop types for the screen component
type ListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'List'>;
type ListScreenRouteProp = RouteProp<RootStackParamList, 'List'>;

export type ListScreenProps = {
  navigation: ListScreenNavigationProp;
  route: ListScreenRouteProp;
};
