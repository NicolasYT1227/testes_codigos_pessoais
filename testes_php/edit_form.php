<?php

    include_once('config.php');

    function cadastraNovoCurso($conn, $nome_curso, $tempo_exp){
        $sql_insertNew = "INSERT INTO hours_regis('nome_curso, tempo_exp) VALUES('$nome_curso','$tempo_exp')";

        if($conn->query($sql_insertNew) === TRUE) {
            echo "Curso cadastrado com sucesso";
        } else {
            echo "Erro: Preencha os campos corretamente" . $conn->error;
        }
    }

    function removeItemAnterior($conn){
        $sql_excluirItemAn = "DELETE FROM hours_regis ORDER BY pk_regis";

        if($conn->query($sql_excluirItemAn) === TRUE) {
            echo "Curso anterior excluído com sucesso";
        } else {
            echo "Erro ao excluir curso anterior" . $conn->error;
        }
    }