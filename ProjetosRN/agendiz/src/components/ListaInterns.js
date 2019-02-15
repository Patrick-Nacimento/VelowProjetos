import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import Interns from './Interns.js';

export default class ListaIterns extends Component {

  constructor(props) {
    super(props);

    this.state = { listaInterns: [] };
  }

  componentWillMount() {
    axios.get('/interns.json')
      .then(response => { this.setState({ listaInterns: response.data.interns }); })
      .catch(() => { console.log('Erro ao recuperar'); });
  }

  render() {
    return (
      <ScrollView>
        { this.state.listaInterns.map(interns =>
          (<Interns key={interns.description} interns={interns} />))}
      </ScrollView>
    );
  }

}
