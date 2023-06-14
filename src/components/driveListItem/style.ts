import {StyleSheet} from 'react-native';
import {Sizes} from '../../constants/ratio';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: Sizes(10),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: Sizes(5),
    borderBottomWidth: Sizes(1),
  },
  leftView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameText: {
    color: 'black',
    fontSize: Sizes(18),
    marginLeft: Sizes(10),
  },
  carNumber: {
    width: Sizes(80),
    fontSize: Sizes(14),
  },
});

export default styles;
