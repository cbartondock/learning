import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

export default class NativeTest extends Component {
  render() {
    return(
      <View>  
        <Text></Text>
        <Text>Jello IOS!</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('NativeTest', () => NativeTest);
