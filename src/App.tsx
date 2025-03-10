/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useRef } from 'react';
import {
  SafeAreaView,
  useColorScheme
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import { store } from './data/locals/redux/store';
import RootView from './screens/RootView';
import Loading, { LoadingModalRef } from './components/Loading/Loading';
import {I18nextProvider} from 'react-i18next';
import configLanguage from './resources/Language.ts';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const refLoading = useRef<LoadingModalRef>(null);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <Provider store={store}>
      <I18nextProvider i18n={configLanguage}>
        <SafeAreaView style={backgroundStyle}>
          <RootView />
          <Loading ref={refLoading} />
        </SafeAreaView>
      </I18nextProvider>
    </Provider>

  );
}

export default App;
