import React from 'react';
import {TouchableOpacity} from 'react-native';
import ArrowLeft from '../../assets/svg/ArrowLeft';
import st from './style';
import useContainer from './hook';

function BackButton() {
  const {goBack} = useContainer();
  return (
    <TouchableOpacity onPress={goBack} style={st.leftArrow}>
      <ArrowLeft size={50} />
    </TouchableOpacity>
  );
}

export default BackButton;
