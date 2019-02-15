import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
//import axios from 'axios';

export default class Interns extends Component {
  render() {
    return (
      <View style={styles.principal}>
        <View style={styles.grupo}>
            <Text style={styles.txt}>Empresa: {this.props.interns.description}</Text>
            <Text style={styles.txt}>Idade: {this.props.interns.age}</Text>
            <Text style={styles.txt}>Telefone: {this.props.interns.telephone}</Text>
            <Text style={styles.txt}>Qualidade: {this.props.interns.quality}</Text>
            <Text style={styles.txt}>Pontos á melhorar: {this.props.interns.defect}</Text>
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
  txt: {
    fontSize: 20,
    color: 'white',
    margin: 5
  }
});
