import React from 'react';
import {Text, View} from 'react-native';
import st from './style';
import svg from '../../assets/svges';

function DriverListItem({item}: any) {
  const {driverInfo, carInfo} = item;

  const handleSvg = (type: string) => {
    const SVG = svg[type];
    return <SVG size={25} />;
  };

  return (
    <View style={st.container}>
      <View style={st.leftView}>
        {handleSvg(item.carInfo.category)}
        <Text style={st.nameText}>{driverInfo.name}</Text>
      </View>

      <Text style={st.carNumber}>{carInfo.carNumber}</Text>
    </View>
  );
}

export default DriverListItem;
