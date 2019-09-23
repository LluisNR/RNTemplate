import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { handlerChangeColor } from './simple-screen.handler'

const colorGenerator = handlerChangeColor();
export default class SimpleScreen extends Component {

  constructor(props) {
    super(props)

    this.state = {
      color: 'blue',
    }
    
  }

  render() {
    let { color } = this.state;
    return (
      <View>
        <Text>{color}</Text>
        <Text style={{ color: color }}> Simple Screen </Text>
        <TouchableOpacity onPress={() => this.setState({color:colorGenerator.next().value})}>
          <Text>Change Text Color</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
