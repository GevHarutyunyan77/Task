import {StyleSheet} from 'react-native';
import {Sizes} from '../../constants/ratio';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'absolute',
    width: '100%',
    height: Sizes(50),
    backgroundColor: 'white',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: Sizes(20),
    borderTopRightRadius: Sizes(20),
  },
  text: {
    color: colors.blue,
    fontSize: Sizes(16),
    fontWeight: 'bold',
    marginRight: Sizes(10),
  },
});

export default styles;
