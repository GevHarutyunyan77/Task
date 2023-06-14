import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import st from './style';
import useTypedSelector from '../../helpers/typedSelector';
import {useDispatch} from 'react-redux';
import {setActive} from '../../store/reducers/headerReducers';
import {useTranslation} from 'react-i18next';

function Header() {
  const dispatch = useDispatch();
  const {active} = useTypedSelector(state => state.headerSlice);
  const [t] = useTranslation();
  const handleActive = (type: string) => {
    dispatch(setActive(type));
  };

  return (
    <View style={st.container}>
      <TouchableOpacity onPress={() => handleActive('all')}>
        <Text style={[st.title, active === 'all' && st.activeTitle]}>
          {t('Header.all')}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleActive('car')}>
        <Text style={[st.title, active === 'car' && st.activeTitle]}>
          {t('Header.car')}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleActive('bus')}>
        <Text style={[st.title, active === 'bus' && st.activeTitle]}>
          {t('Header.bus')}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleActive('truck')}>
        <Text style={[st.title, active === 'truck' && st.activeTitle]}>
          {t('Header.truck')}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Header;
