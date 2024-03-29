import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
//import StackNavigater from './stack/stacknavigater';
import SwitchNavigater from './switch/switchnavigater';
// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SwitchNavigater/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  //paragraph: {
   // margin: 24,
   // fontSize: 18,
    //fontWeight: 'bold',
    //textAlign: 'center',
  //},
});
