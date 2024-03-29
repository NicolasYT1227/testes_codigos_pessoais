<?php

include_once('./config.php');

var_dump($_REQUEST);

$data = filter_input_array(INPUT_POST, FILTER_DEFAULT);

if (empty($data['nomecurso'])) {
    $retorna = ['status' => false, 'msg' => "<p style='color: #f00'>Erro: Necessário preencher o nome do curso!</p>"];
} elseif (empty($data['tempo_exp'])) {
    $retorna = ['status' => false, 'msg' => "<p style='color: #f00'>Erro: Necessário preencher a data limite para conclusão do curso!</p>"];
} else {
    $query_curso = "INSERT INTO hours_regis(nome_curso, tempo_exp) VALUES (:nomecurso, :tempo_exp)";
   
    $cad_curso = $conn->prepare($query_curso);

    var_dump($data);
    if ($cad_curso) {
        $cad_curso->bindParam(':nomecurso', $data['nomecurso']);
        $cad_curso->bindParam(':tempo_exp', $data['tempo_exp']);

        if ($cad_curso->execute()) {
            $retorna = ['status' => true, 'msg' => "<p style='color: green;'>Curso cadastrado com sucesso!</p>"];
        } else {
            $retorna = ['status' => false, 'msg' => "<p style='color: #f00'>Erro ao cadastrar curso!</p>"];
        }
    } else {
        $retorna = ['status' => false, 'msg' => "<p style='color: #f00'>Erro ao preparar a consulta!</p>"];
    }
}

echo json_encode($retorna);
?>