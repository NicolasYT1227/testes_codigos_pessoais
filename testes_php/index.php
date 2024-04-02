<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Teste php</title>
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
</head>
<body>
    <section class="conteudo-principal">
        <div class="conteudo-principal-area-cursos">
            <h3 class="titulo-principal">Metas para conclusão de cursos</h3>
            <div class="conteudo">
                <div class="botoes">
                    <button class="botao ativo">Extipular metas para conclusão dos cursos</button>
                    <button class="botao">Planejamentos de estudos</button>
                    <button class="botao">Anexar certificados</button>
                </div>
                <div class="aba-textos">
                    <div class="aba-conteudo-titulo-principal">Estudar <!--Quantidade de cursos--> na Alura</div>
                    <div class="aba-conteudo-titulo-secundario">Tempo para completar o objetivo</div>
                    <div class="botaoAdd-cursos">
                        <button class="AddButtonCurso">Estipular metas</button>
                    </div>
                    <div class="contador">
                        <div class="aba-edits">
                            <div class="curso-ativo"></div>
                        </div>
                    </div>
                    <div class="btn-editForm">
                        <div class="botaoExcluir" id="btnExcluir"><i class="bi bi-trash"></i></div>
                    </div>
                </div>
            </div>
        </div>

        <main>
            <div id="myModal" class="modal">
                <div class="modal-content">
                    <span id="msgAlerta"></span>
                    <form method="POST" id="cursoForm" class="formModal">
                        <span class="closeModal">Close</span>
                        <h3 class="modalTitle">Adcionar uma meta</h3>
                        <div class="form-group">
                            <label for="nomecurso" class="labelName">Informe o nome do curso</label>
                            <input type="text" name="nomecurso" id="nomecurso" class="nameCurso">
                        </div>
                        <div class="form-group">
                            <label for="tempo_exp" class="labelDate">Data limite para conclusão</label>
                            <input type="date" name="tempo_exp" id="tempo_exp" class="datalimite-curso">
                        </div>
                        <div class="btn-finalizar">
                            <button type="submit" class="finalizarAddCurso" id="btnAddC">Enviar meta</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    </section>

    <script src="./js/main.js"></script>
</body>
</html>