import React, { Component } from 'react';
import {
  View,
  TouchableHighlight,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  Button
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const grupo = require('../imgs/grupo.jpg');
const recrutador = require('../imgs/recrutador.jpg');
// const sobre = require('../imgs/sobre_jogo.png');
// const outros = require('../imgs/outros_jogos.png'); // parceria.js

export default class agendiz extends Component {
  render() {
    return (
      <ScrollView style={styles.principal}>
        <View style={styles.principal2}>
          <TouchableHighlight
            style={styles.botao}
            onPress={() => { Actions.listaGrupo(); }}
          >
            <Image source={grupo} style={styles.imgs} />
          </TouchableHighlight>
          <Text style={styles.txtImg}>Grupos</Text>

          <TouchableHighlight
            style={styles.botao2}
            onPress={() => { Actions.listaRecrutador(); }}
          >
            <Image source={recrutador} style={styles.imgs} />
          </TouchableHighlight>
          <Text style={styles.txtImg}>Recrutadores</Text>
        </View>

        <View style={styles.sobre}>
          <View style={styles.btn1}>
            <Button
              title="Sobre nós"
              color='#5a5f67'
              onPress={() => { Actions.sobre(); }}
            />
           </View>

          <View style={styles.btn2}>
            <Button
              title="Parcerias"
              color='#5a5f67'
              onPress={() => { Actions.parceria(); }}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  principal: {
    backgroundColor: '#5a5f67',
    flex: 1
  },
  principal2: {
    alignItems: 'center'
  },
  imgs: {
    height: 150,
    width: 150,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 50
  },
  botao: {
    marginTop: 50
  },
  botao2: {
    marginTop: 50
  },
  txtImg: {
    fontSize: 20,
    color: 'white'
  },
  sobre: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center'
  },
  btn1: {
    marginHorizontal: 20,
    borderWidth: 4,
    borderColor: 'black',
    borderRadius: 10
  },
  btn2: {
    marginHorizontal: 20,
    borderWidth: 4,
    borderColor: 'black',
    borderRadius: 10
  }
});
