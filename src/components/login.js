import React, { useEffect, useState } from 'react';

function Login() {

const [lista, setLista] = useState([]);
const [erros, setErros] = useState(false);

// useEffect(() =>{
//     Listar();
// }, []);

const user = {nome:'carlos',login:'123mudar'}

async function Listar(){
    const headers = new Headers();
    headers.append('Access-Control-Allow-Origin','*');
    headers.append('Accept','application/json');
    headers.append('Content-Type','application/json');
    headers.append('Origin','http://localhost:8080');

    await fetch("http://localhost/contole-notas/src/api/testePost.php",
    {
        mode:'no-cors',
        method: 'POST',
        credentials: 'include',
        headers: headers,
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(res => setLista(res))//=>  success
    .catch(() => setErros(true))//=> failure
}

// const Listar = () =>{ //=> esse funciona...
//     fetch('http://localhost/contole-notas/src/api/testePost.php')
//     .then(resp => resp.json())
//     .then(resp => setLista(resp))
//     .catch(() => setErros(true));
// }

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