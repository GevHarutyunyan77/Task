import React, {FC} from 'react';
import {StatusBar} from 'react-native';
import colors from '../../assets/colors';

const withStatusBar = (color: string) => (Component: FC<any>) => {
  return (props: any) => {
    return (
      <>
        <StatusBar
          animated={true}
          barStyle={
            color === 'white' || color === 'transparent'
              ? 'dark-content'
              : 'default'
          }
          backgroundColor={colors[color]}
          translucent={color === 'transparent'}
        />
        <Component {...props} />
      </>
    );
  };
};

export default withStatusBar;
