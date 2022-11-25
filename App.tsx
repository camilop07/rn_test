import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import BankList from './src/Views/BankList/BankList';
import {colors} from './src/constants';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <BankList />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    display: 'flex',
    height: '100%',
    width: '100%',
  },
});

export default App;
