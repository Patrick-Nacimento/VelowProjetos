import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import Grupo from './Grupo.js';

export default class ListaGrupo extends Component {

  constructor(props) {
    super(props);

    this.state = { listaGrupo: [] };
  }

  componentWillMount() {
    axios.get('/groups.json')
      .then(response => { this.setState({ listaGrupo: response.data.groups }); })
      .catch(() => { console.log('Erro ao recuperar'); });
  }

  render() {
    return (
      <ScrollView>
        { this.state.listaGrupo.map(grupo => (<Grupo key={grupo.area} grupo={grupo} />))}
      </ScrollView>
    );
  }
}
