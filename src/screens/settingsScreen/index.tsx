import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import st from './style';
import SafeAreaView from 'react-native-safe-area-view';
import withStatusBar from '../../hoc/withStatusBar';
import EnglandSVG from '../../assets/svg/EnglandSVG';
import RussiaSVG from '../../assets/svg/RussiaSVG';
import {useTranslation} from 'react-i18next';
function SettingsScreen() {
  const [t, i18n] = useTranslation();

  const handleLanguage = (lang: string) => {
    i18n.changeLanguage(lang).then();
  };

  return (
    <View style={st.container}>
      <SafeAreaView style={st.content}>
        <Text style={st.title}>{t('languageTitle')}</Text>
      </SafeAreaView>
      <View style={st.flagContainer}>
        <TouchableOpacity style={st.cube} onPress={() => handleLanguage('en')}>
          <Text style={st.languageText}>English</Text>
          <EnglandSVG size={50} />
        </TouchableOpacity>

        <TouchableOpacity style={st.cube} onPress={() => handleLanguage('ru')}>
          <Text style={st.languageText}>Русский</Text>
          <RussiaSVG size={50} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default withStatusBar('blue')(SettingsScreen);
