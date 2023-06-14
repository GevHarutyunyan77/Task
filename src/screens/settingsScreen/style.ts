import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import {Sizes} from '../../constants/ratio';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey,
  },
  content: {
    height: Sizes(100),
    backgroundColor: colors.blue,
  },
  title: {
    textAlign: 'center',
    color: colors.white,
    marginTop: Sizes(30),
    fontSize: Sizes(18),
    fontWeight: 'bold',
  },
  flagContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: Sizes(100),
  },
  cube: {
    paddingHorizontal: Sizes(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  languageText: {
    fontWeight: 'bold',
    marginBottom: Sizes(15),
  },
});

export default styles;
