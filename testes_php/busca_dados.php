<?php

    include_once('config.php');

    $queryBusca = "SELECT * FROM hours_regis";
    $stmt = $conn->prepare($queryBusca);
    $stmt->execute();

    header('Content-Type: application/json');
    echo json_encode($stmt->fetchALL(PDO::FETCH_ASSOC));