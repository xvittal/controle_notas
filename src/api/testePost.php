<?php

class Batata 
{
    public function Lista()
    {
        header("Access-Control-Allow-Origin:*");
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
        header("Content-type: application/json, Authorization");

        $data = file_get_contents('php://input'); //=> recebe o payload
        $info = json_decode($data, true); //=> faz a decodificação do json
        
        //print_r($info); //=> teste para ve se esta recebendo os dados... ok
        //echo gettype($info);
        
        if ($info['nome'] != null)
        {
            $nome = $info['nome'];
            $login = $info['login'];
            
            $batata = [
                'nome'=>$nome,
                'login'=>$login
            ];
            echo json_encode($batata);
        }
        else{
            echo json_encode($erro = ['error'=>'erro']);        
        }
        
    }
}

$teste = new Batata();
$teste->Lista();

?>