import React from 'react';
import {Marker} from 'react-native-maps';

import svg from '../../assets/svges';
import {NavigationProp, useNavigation} from '@react-navigation/native';

function MyMarker({item}: any) {
  const navigation = useNavigation<NavigationProp<any>>();
  const {location, driverInfo, carInfo} = item;
  const {latitude, longitude} = location;
  const {name} = driverInfo;
  const {category} = carInfo;

  const handleSvg = (type: string) => {
    const SVG = svg[type];
    return <SVG size={25} />;
  };

  const handlePress = () => {
    navigation.navigate('DriverScreen', {item});
  };

  return (
    <Marker
      coordinate={{latitude: latitude, longitude: longitude}}
      title={name}
      onCalloutPress={handlePress}>
      {handleSvg(category)}
    </Marker>
  );
}

export default MyMarker;
