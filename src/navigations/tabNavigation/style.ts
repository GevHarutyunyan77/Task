import {StyleSheet} from 'react-native';
import {Sizes} from '../../constants/ratio';

const styles = StyleSheet.create({
  text: {
    fontSize: Sizes(13),
    color: 'black',
  },

  activeText: {
    fontSize: Sizes(13),
    color: 'blue',
  },
});

export default styles;
