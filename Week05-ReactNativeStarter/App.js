import React, {Component} from 'react';
import {
    Alert,
    Button,
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foo: 'expo try state',
            result: 'unknown'
        };
    };

    fetchAddress = () => {
      console.log('fetchAddress is console.');
      this.setState({foo: 'fetchAddress method called'});

    };
    fetchMicro = () => {
        this.setState({foo: 'fetcher king'});
        const that = this;
        //const ip = 'ccalvert.com';
        const ip = '168.156.46.55';
        //fetch('http://' + ip + ':30027/you-rang')
        fetch('http://' + ip + ':30025/search')
            .then((response) => response.json())
            .then(function (result) {
                //console.log(result);
                this.collection = result.allData;
                that.setState({
                    foo: 'qux success',
                    result: result.result
                    // SET UP STATE FOR FIRST AND LAST NAMES
                    // FROM THE DATABASE
                });
            }).catch(function (ex) {
            that.setState({foo: 'qux error'});
        });
    };
  render() {

    return (
      <View style={styles.container}>
        <Text>PROG272 - React Native - Yang</Text>
          <Text>{this.state.foo}</Text>
          <Text>{this.state.result}</Text>
          <Button
              onPress={this.fetchAddress}
              title="Get Data"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
          />

          <Button
              onPress={this.fetchMicro}
              title="Get Micro"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
          />
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
