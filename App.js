// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
// import Data from './components/Data';
import DataT from './components/Data2';
// import Header from './components/header';

export default function App() {

  return (
    <View style={styles.container}>
      {/* <Header /> */}
      {/* <Data /> */}
      <DataT />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'

  },

});
