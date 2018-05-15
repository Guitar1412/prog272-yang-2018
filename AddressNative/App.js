import React from 'react';
import { StyleSheet, Text, Button } from 'react-native';
import elfStyles from './elf-style'
import GetFile from "./GetFile";


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <GetFile/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
