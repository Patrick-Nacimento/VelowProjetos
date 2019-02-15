import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Sobre extends Component {
  render() {
    return (
      <View style={styles.principal}>
        <Text style={styles.txt}>
          Agendiz esta ai para te ajudar na procura de um estagiário!!!</Text>
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
