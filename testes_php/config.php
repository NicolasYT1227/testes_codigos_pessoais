<?php

$host = 'localhost';
$dbUserName = 'root';
$dbPassWord = '';
$dbName = 'teste-collab';

$conn = new mysqli($host, $dbUserName, $dbPassWord, $dbName);

//if ($conn->connect_errno) {
    //echo "A conexão falhou: " . $conn->connect_error;
//} else {
    //echo "Conexão bem sucedida";
//}

?>