<?php
include("connection.php");
class Lista extends Connection {

    public function List()
    {
        $BFetch = $this->connectDB()->prepare("select * from grupoAcesso");
        $BFetch ->execute();

        $j = [];
        $i = 0;

        while ($Fetch = $BFetch->fetch(PDO::FETCH_ASSOC)) {
            $j[$i] =[
                "idGrupoAcesso"=>$Fetch['idGrupoAcesso'],
                "nome"=>$Fetch['nome']
            ];
            $i++;
        }
        
        header("Access-Control-Allow-Origin:*");
        header("Content-type: application/json");
        echo json_encode($j);
    }
}
   $Lista = new Lista();
   $Lista->List();
?>