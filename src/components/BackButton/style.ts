import {StyleSheet} from 'react-native';
import {Sizes} from '../../constants/ratio';

const styles = StyleSheet.create({
  leftArrow: {
    position: 'absolute',
    zIndex: 1,
    top: Sizes(40),
    left: Sizes(20),
  },
});

export default styles;
