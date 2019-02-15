import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
//import axios from 'axios';

export default class Recrutador extends Component {
  render() {
    return (
      <View style={styles.principal}>
        <View style={styles.grupo}>
            <Text style={styles.txt}>Empresa: {this.props.recrutador.description}</Text>
            <Text style={styles.txt}>CNPJ: {this.props.recrutador.cnpj}</Text>
            <Text style={styles.txt}>Telefone: {this.props.recrutador.telephone}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: '#5a5f67',
  },
  grupo: {
    borderWidth: 2,
    borderColor: 'black',
    margin: 10,
    padding: 10,
  },
  txt: {
    fontSize: 20,
    color: 'white',
    margin: 5
  }
});
