import React, { useEffect, useState } from 'react';

function Login() {

const [lista, setLista] = useState([]);
const [erros, setErros] = useState(false);

// useEffect(() =>{
//     Listar();
// }, []);

const user = {nome: 'carlos', login: '123mudar'}

const Listar = ()  => {
    fetch("http://localhost/contole-notas/src/api/testePost.php",
    {
        mode:'no-cors',
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({user})
    })
    .then(res => res.json())
    .then(res => setLista(res))//=>  success
    .catch(() => setErros(true))//=> failure
}

return(
    <>
        <div>
            <label>login</label>
            <input />
        </div>
        
        <div>
            <label>senha</label>
            <input />
        </div>
        <button onClick={() => Listar()}>Login</button>
        <button>Cadastrar</button>
        <p>{console.log(lista)}</p>
        <p>{console.log(erros)}</p>
    </>
)
}
export default Login;