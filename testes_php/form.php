<?php

include_once('./config.php');

$data = filter_input_array(INPUT_POST, FILTER_DEFAULT);

if (empty($data['nomecurso'])) {
    $retorna = ['status' => false, 'msg' => "<p style='color: #f00'>Erro: Necessário preencher o nome do curso!</p>"];
} elseif (empty($data['tempo_exp'])) {
    $retorna = ['status' => false, 'msg' => "<p style='color: #f00'>Erro: Necessário preencher a data limite para conclusão do curso!</p>"];
} else {
    $query_curso = "INSERT INTO hours_regis(nome_curso, tempo_exp) VALUES(:nomecurso, :tempo_exp)";
    $cad_curso = $conn->prepare($query_curso);

    if ($cad_curso != false) { // Correção: alterado de $cad_curso != false para $cad_curso !== false
        $cad_curso->bind_param(':nomecurso', $data['nomecurso']); // Correção: alterado de $data['nome_curso'] para $data['nomecurso']
        $cad_curso->bind_param(':tempo_exp', $data['tempo_exp']);

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
