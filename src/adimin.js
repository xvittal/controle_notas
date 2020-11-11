import React from 'react';
import Cadastro from './components/Cadastro';
import CadastrarDespesa from './components/CadastrarDespesa';
import ListaUsuarios from './components/ListaUsuarios';
import Dashboard from './dashboard';


function Admin() {

return(
<>
    <Cadastro/>
    <CadastrarDespesa/>
    <ListaUsuarios/>
    <Dashboard/>
</>
)
}
export default Admin;