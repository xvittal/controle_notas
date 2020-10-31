<?php
    abstract class Connection{
        protected function connectDB(){
            try {
                $Con = new PDO('mysql:host=localhost; dbname=controlenotas','root','');
                return $Con;
            } catch (PDOException $erro) {
                return $erro->getMenssage();
            }
        }
    }
?>