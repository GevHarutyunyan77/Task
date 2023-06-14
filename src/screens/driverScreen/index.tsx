import React, {JSX} from 'react';
import {View, Text, Platform, Pressable} from 'react-native';
import withStatusBar from '../../hoc/withStatusBar';
import st from './style';
import MapView, {PROVIDER_DEFAULT, PROVIDER_GOOGLE} from 'react-native-maps';
import {uniqueId} from 'lodash';
import MyMarker from '../../components/MyMarker';
import BackButton from '../../components/BackButton';
import WhatsAppSVG from '../../assets/svg/WhatsAppSVG';
import CallSVG from '../../assets/svg/CallSVG';
import {Linking} from 'react-native';
import {useTranslation} from 'react-i18next';

function DriverScreen({route}: any): JSX.Element {
  const {item} = route.params;
  const [t] = useTranslation();

  const {driverInfo, carInfo} = item;

  const {name, phone} = driverInfo;
  const {category, carNumber} = carInfo;

  const defaultProvider =
    Platform.OS === 'ios' ? PROVIDER_DEFAULT : PROVIDER_GOOGLE;

  const handleCallNumber = () => {
    Linking.openURL(`tel:${phone}`).then();
  };

  const handleWhatsappLinking = () => {
    const message: string =
      'Добрый день, подскажите пожалуйста, какой номер заказа у вас сейчас в работе .';
    Linking.openURL(`whatsapp://send?phone=${phone}&text=${message}`).then();
  };

  return (
    <View style={st.container}>
      <BackButton />
      <MapView
        provider={defaultProvider}
        style={st.mapView}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <MyMarker item={item} key={uniqueId()} />
      </MapView>
      <View style={st.driverInfoContainer}>
        <View style={st.line}>
          <Text style={st.title}>{t('driver.name')}:</Text>
          <Text>{name}</Text>
        </View>
        <View style={st.line}>
          <Text style={st.title}>{t('driver.phone')}:</Text>
          <Text>{phone}</Text>
        </View>
        <View style={st.line}>
          <Text style={st.title}>{t('driver.category')}:</Text>
          <Text>{category}</Text>
        </View>
        <View style={st.line}>
          <Text style={st.title}>{t('driver.vehicleNumber')}:</Text>
          <Text>{carNumber}</Text>
        </View>
      </View>

      <View style={st.iconContainer}>
        <Pressable style={st.svgContainer} onPress={handleCallNumber}>
          <CallSVG size={30} />
        </Pressable>
        <Pressable onPress={handleWhatsappLinking}>
          <WhatsAppSVG size={40} />
        </Pressable>
      </View>
    </View>
  );
}

export default withStatusBar('transparent')(DriverScreen);
