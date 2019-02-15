import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Parceria extends Component {
  render() {
    return (
      <View style={styles.principal}>
        <Text style={styles.txt}>Alex Jose</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: '#5a5f67',
  },
  txt: {
    fontSize: 20,
    color: 'white',
    margin: 5
  }
});
