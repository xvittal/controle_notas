import { useEffect, useState } from "react";

function Dashboard() {

const [lista,setLista] = useState([]);
const [erro,setErro] = useState(false);

useEffect(() =>{
    Listar();
},[])

useEffect(() =>{
    console.log(lista)
},[lista])

async function Listar(){ //=> esse funciona...
    await fetch('http://localhost/contole-notas/src/api/teste.php')
    .then(res => res.json())
    .then(res => setLista(res))
    .catch(() => setErro(true));
}

return(
<>
<h3>Notas</h3>
<table>
    <thead>
        <tr>
            <th>Cod Usuario</th>
            <th>Cod Despesa</th>
            <th>data</th>
            <th>hora</th>
            <th>tipo despesa</th>
            <th>origem</th>
        </tr>
    </thead>
</table>
</>
)
}
export default Dashboard;