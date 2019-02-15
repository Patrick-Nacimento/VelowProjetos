import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import Recrutador from './Recrutador.js';

export default class ListaRecrutador extends Component {

  constructor(props) {
    super(props);

    this.state = { listaRecrutador: [] };
  }

  componentWillMount() {
    axios.get('/recruiters.json')
      .then(response => { this.setState({ listaRecrutador: response.data.recruiters }); })
      .catch(() => { console.log('Erro ao recuperar'); });
  }

  render() {
    return (
      <ScrollView>
        { this.state.listaRecrutador.map(recrutador =>
          (<Recrutador key={recrutador.description} recrutador={recrutador} />))}
      </ScrollView>
    );
  }
}
