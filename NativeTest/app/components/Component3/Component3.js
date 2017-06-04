import React, {Component} from 'react';
import {AppRegistry, Text, View, TextInput, Switch} from 'react-native';

export default class Component3 extends Component {
  constructor() {
    super();
    this.state = {
      textValue: 'Hello',
      switchValue: false
    }
  }

  onChangeText(val) {
    this.setState({
      textValue: val
    });
  }
  onSubmit() {
    console.log(this.state.textValue);
  }

  onSwitchChange(val) {
    this.setState({
      switchValue: val
    });
  }

  render() {
    return(
      <View>  
        <Text> Component 3 </Text>
        <TextInput 
          placeholder="Enter Text" 
          value={this.state.textValue} 
          onChangeText={(val)=> this.onChangeText(val)} 
          onSubmitEditing={this.onSubmit.bind(this)}/>
        <Text> {this.state.textValue}</Text>
        <Switch 
          value= {this.state.switchValue}
          onValueChange={(val)=> this.onSwitchChange(val)}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('Component3', () => Component3);
