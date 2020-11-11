import React from 'react';

function CadastrarDespesa(){

return(
<>
    <h2>Despesas</h2>
    <label>codigo usuario</label>
    <input type='number' readOnly/>
    <label>data</label>
    <input type='text'/>
    <label>hora</label>
    <input type='text'/>
    <label>origem</label>
    <input type='number'/>
    <label>status</label>
    <input type='number'/>
    <button>Enviar</button>
</>
)

}
export default CadastrarDespesa;