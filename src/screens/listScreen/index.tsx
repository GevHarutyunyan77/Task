import React, {useEffect, useState} from 'react';

import Header from '../../components/Header';
import SafeAreaView from 'react-native-safe-area-view';
import withStatusBar from '../../hoc/withStatusBar';
import {FlatList, View} from 'react-native';
import st from './style';
import DriverListItem from '../../components/driveListItem';
import {uniqueId} from 'lodash';
import useTypedSelector from '../../helpers/typedSelector';
import Footer from '../../components/Footer';
import {ListScreenProps} from './types';

const ListScreen: React.FC<ListScreenProps> = () => {
  const {data} = useTypedSelector(state => state.dataSlice);
  const {active} = useTypedSelector(state => state.headerSlice);

  const [filteredData, setFilteredData] = useState(data);

  const renderItem = ({item}: any) => {
    return <DriverListItem item={item} />;
  };

  useEffect(() => {
    const filteredData = (active: string) => {
      if (active === 'all') {
        return data;
      } else {
        return data.filter(item => item.carInfo.category === active);
      }
    };
    setFilteredData(filteredData(active));
  }, [data, active]);

  return (
    <SafeAreaView style={{flex: 1, position: 'relative'}}>
      <Header />
      <View style={st.container}>
        <FlatList
          data={filteredData}
          keyExtractor={() => uniqueId('driver')}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <Footer data={filteredData} />
    </SafeAreaView>
  );
};

export default withStatusBar('blue')(ListScreen);
