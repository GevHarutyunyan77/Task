import {StyleSheet} from 'react-native';
import {Sizes} from '../../constants/ratio';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapView: {
    flex: 0.4,
  },
  driverInfoContainer: {
    marginTop: Sizes(20),
    paddingLeft: Sizes(20),
  },
  line: {
    flexDirection: 'row',
    marginTop: Sizes(10),
    alignItems: 'center',
  },
  title: {
    fontSize: Sizes(14),
    width: Sizes(120),
  },
  iconContainer: {
    marginTop: Sizes(100),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  svgContainer: {
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Sizes(5),
    borderRadius: Sizes(4),
  },
});

export default styles;
