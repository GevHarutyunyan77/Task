import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import st from './style';
import MapSVG from '../../assets/svg/MapSVG';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

function Footer({data}: any) {
  const navigation = useNavigation<NavigationProp<any>>();
  const [t] = useTranslation();

  const handleNavigate = () => {
    navigation.navigate('MapScreen', {data});
  };
  return (
    <TouchableOpacity style={st.container} onPress={handleNavigate}>
      <Text style={st.text}>{t('footer.text')}</Text>
      <MapSVG size={40} />
    </TouchableOpacity>
  );
}

export default Footer;
