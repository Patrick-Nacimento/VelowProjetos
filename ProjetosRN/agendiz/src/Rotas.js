import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Principal from './components/Principal.js';
import ListaGrupo from './components/ListaGrupo.js';
import ListaRecrutador from './components/ListaRecrutador.js';
import Sobre from './components/Sobre.js';
import Parceria from './components/Parceria.js';
import ListaInterns from './components/ListaInterns.js';

const Rotas = () => (
  <Router sceneStyle={{ paddingTop: 50 }}>
    <Scene key='principal' component={Principal} init title="Agendiz" />
    <Scene key='listaGrupo' component={ListaGrupo} title="Grupos" />
    <Scene key='listaRecrutador' component={ListaRecrutador} title="Recrutadores" />
    <Scene key='sobre' component={Sobre} title="Sobre Nós" />
    <Scene key='parceria' component={Parceria} title="Parcerias" />
    <Scene key='listaInterns' component={ListaInterns} title="Estágiarios" />
  </Router>
);

export default Rotas;
