import React from 'react';

function Cadastro(){
    
return(
<>
<h1>Cadastro</h1>
<div>
    <h2>Usuário</h2>
        <label>Nome Usuario</label>
        <input type='text'/>
        <label>telefone</label>
        <input type='text'/>
        <label>login</label>
        <input type='text'/>
        <label>Senha</label>
        <input type='text'/>
        <label>grupo de acesso</label>
        <input type='number' min='1' max='3'/>
        <button>Enviar</button>
</div>
<div>
    <h2>Empresa</h2>
        <label>Código Usuario</label>
        <input type='number'/>
        <label>Nome empresa</label>
        <input type='text'/>
        <label>Estado da empresa: </label>
        <label htmlFor="estado">ativo</label>
        <input type="radio" name="estado" value="true"/>
        <label htmlFor="estado">inativo</label>
        <input type="radio" name="estado" value="false"/>
        <button>Enviar</button>
</div>
<div>
    <h2>Filial</h2>
        <label>Codigo da empresa</label>
        <input type='number'/>
        <label>Nome filial</label>
        <input type='text'/>
        <label>Estado da filial: </label>
        <label htmlFor="estado">ativo</label>
        <input type="radio" name="estado" value="true"/>
        <label htmlFor="estado">inativo</label>
        <input type="radio" name="estado" value="false"/>
        <button>Enviar</button>
</div>
<div>
    <h2>Setor</h2>
        <label>Nome Setor</label>
        <input type='text'/>
        <label>Estado da Setor: </label>
        <label htmlFor="estado">ativo</label>
        <input type="radio" name="estado" value="true"/>
        <label htmlFor="estado">inativo</label>
        <input type="radio" name="estado" value="false"/>
        <button>Enviar</button>
</div>
</>
)
}
export default Cadastro;