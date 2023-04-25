import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Routes from '@src/navigation/Routes';
import {store, persistor} from '@src/redux/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider style={{backgroundColor: '#fff'}}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes />
        </PersistGate>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
