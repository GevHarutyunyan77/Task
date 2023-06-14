import React from 'react';
import {Platform, View} from 'react-native';
import MapView, {PROVIDER_DEFAULT, PROVIDER_GOOGLE} from 'react-native-maps';
import {MapScreenProps} from './types';

import st from './style';
import withStatusBar from '../../hoc/withStatusBar';
import MyMarker from '../../components/MyMarker';
import {isEmpty, uniqueId} from 'lodash';
import BackButton from '../../components/BackButton';

const MapScreen: React.FC<MapScreenProps> = ({route}) => {
  const {data}: any = route.params;

  const defaultProvider =
    Platform.OS === 'ios' ? PROVIDER_DEFAULT : PROVIDER_GOOGLE;

  return (
    <View style={st.container}>
      <BackButton />

      <MapView
        provider={defaultProvider}
        onPress={event => console.log('gev=', event.nativeEvent)}
        style={st.mapView}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {!isEmpty(data) &&
          data.map((item: any) => <MyMarker item={item} key={uniqueId()} />)}
      </MapView>
    </View>
  );
};

export default withStatusBar('transparent')(MapScreen);
