<?php

class Batata 
{
    public function Lista()
    {
        $info = json_decode(file_get_contents('php://input'), 1);
        header("Access-Control-Allow-Origin:*");
        header("Content-type: application/json");
        if ($info < 0)
        {
            $nome = $info['nome'];
            $login = $info['login'];
            
            $batata = [
                'nome'=>$nome,
                'login'=>$login
            ];
            echo json_encode($batata);
        }
        else
            echo json_encode('error');        
    }
}

$teste = new Batata();
$teste->Lista();

?>