import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import {Sizes} from '../../constants/ratio';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    paddingTop: Sizes(10),
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  title: {
    color: colors.grey,
    paddingBottom: Sizes(10),
    paddingHorizontal: Sizes(20),
    fontSize: Sizes(18),
    fontWeight: 'bold',
  },
  activeTitle: {
    borderBottomWidth: Sizes(5),
    borderColor: colors.white,
    color: colors.white,
  },
});

export default styles;
