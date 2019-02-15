import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import axios from 'axios';
import Rotas from './src/Rotas.js';

export default class agendiz extends Component {

  componentWillMount() {
    axios.defaults.baseURL = 'http://10.1.1.167:3000'; // localhost nao pode, passar o ip
    axios.defaults.headers.post['Content-Type'] = 'application/json';
  }

  render() {
    return (
      <Rotas />
    );
  }
}

AppRegistry.registerComponent('agendiz', () => agendiz);
