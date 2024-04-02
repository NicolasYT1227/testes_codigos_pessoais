<?php
include_once('config.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Verifica se os parâmetros necessários foram fornecidos
    if (isset($_POST['pk_regis'], $_POST['nome_curso'], $_POST['tempo_exp'])) {
        // Obtém os valores dos parâmetros POST
        $nome_curso = $_POST['nome_curso'];
        $tempo_exp = $_POST['tempo_exp'];

        // Prepara a consulta SQL para excluir o curso
        $sql = "DELETE FROM hours_regis WHERE nome='$nome_curso' AND hora='$tempo_exp'";

        // Executa a consulta SQL para excluir o curso
        if ($conn->query($sql) === TRUE) {
            // Se a exclusão for bem-sucedida, envia uma resposta JSON indicando sucesso
            echo json_encode(array("message" => "Curso excluído com sucesso!"));
        } else {
            // Se houver um erro na exclusão, envia uma resposta JSON indicando o erro
            echo json_encode(array("message" => "Erro ao excluir curso: " . $conn->error));
        }
    } else {
        // Se algum dos parâmetros necessários não foi fornecido, envia uma resposta JSON indicando o erro
        echo json_encode(array("message" => "Parâmetros incompletos ou não fornecidos"));
    }
} else {
    // Se a solicitação não for POST, retorna um erro
    http_response_code(405); // Método não permitido
}
?>
