import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Grupo extends Component {
  render() {
    return (
      <View style={styles.principal}>
        <View style={styles.grupo}>
            <Text style={styles.txt}>Area de estágio: {this.props.grupo.area}</Text>
            <Text style={styles.txt}>Grupo pertecente: {this.props.grupo.id}</Text>
            <Button
            style={styles.btn}
            onPress={() => { Actions.listaInterns(); }}
            title="Estágiarios"
            color="#5a5f67"
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  principal: {
    backgroundColor: '#5a5f67',
  },
  grupo: {
    borderWidth: 2,
    borderColor: 'black',
    margin: 10,
    padding: 10,
  },
  btn: {
    borderWidth: 4,
    borderColor: 'black',
    borderRadius: 10
  },
  txt: {
    fontSize: 20,
    color: 'white',
    margin: 5
  }
});
