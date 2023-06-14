import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigations';
import {store} from './src/store';
import i18n from './src/localization/index';
import {I18nextProvider} from 'react-i18next';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </I18nextProvider>
    </Provider>
  );
}

export default App;
