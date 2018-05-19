import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GetFile from './GetFile';
import Header from './Header';
import { NativeRouter, Route } from 'react-router-native';
import Address from "./Address";

export default class App extends React.Component {
    render() {
        return (
            <NativeRouter>
            <View style={styles.addressContainer}>
                <Header />
                <Route exact path="/" component={Address}/>
                <Route path="/get-file" component={GetFile}/>

            </View>
            </NativeRouter>
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
