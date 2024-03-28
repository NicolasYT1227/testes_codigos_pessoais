<?php

$server = 'localhost';
$dbUser = 'root';
$dbPass = '';
$dbName = 'teste-collab';

//$conn = new mysqli($server, $dbUser, $dbPass, $dbName);
$conn = new PDO("mysql:host=$server;dbname=$dbName", $dbUser, $dbPass);

// if ($conn->connect_errno) {
//     echo "A conexão falhou: " . $conn->connect_error;
// } else {
//     echo "Conexão bem sucedida";
// }