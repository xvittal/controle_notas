import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/login';
import Admin from './adimin';
import Operador from './operador';
import Useario from './usuario';


ReactDOM.render(
  <React.StrictMode>
    <Admin />
  </React.StrictMode>,
  document.getElementById('root')
);