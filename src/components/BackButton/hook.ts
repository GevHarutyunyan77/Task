import {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';

function useContainer() {
  const navigation = useNavigation();

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return {
    goBack,
  };
}

export default useContainer;
