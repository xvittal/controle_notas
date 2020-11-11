<?php

// header("Access-Control-Allow-Headers:Autorization, ContextType");
// header("Access-Control-Allow-Origin:*");
// header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
// header("Content-type: application/json; charset=utf-8");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

class Batata 
{
    public function Lista()
    {
        $data = file_get_contents('php://input'); //=> recebe o payload
        $info = json_decode($data, true); //=> faz a decodificação do json
        
        //print_r($info); //=> teste para ve se esta recebendo os dados... ok
        echo gettype($info);
        
        if (isset($info['nome']))
        {
            $nomeResp = $info['nome'];
            $loginResp = $info['login'];
            
            $res = [
                'nomeResp'=>$nomeResp,
                'loginResp'=>$loginResp
            ];
            echo json_encode($res);
        }
        else{
            echo json_encode($res = ['error'=>'erro']);        
        }
        
    }
}

$teste = new Batata();
$teste->Lista();

?>