<?php

    include_once('config.php');

    $queryData = "SELECT tempo_exp FROM hours_regis ";
    $stmt = $conn->prepare($queryData);
    $stmt->execute();

    //obter a data do banco de dados
    $data_hora = $stmt->fetchColumn();

    //retornar a data
    header('Content-Type: application/json');
    echo json_encode($data_hora);