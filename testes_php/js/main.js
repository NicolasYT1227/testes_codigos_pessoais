document.addEventListener('DOMContentLoaded', function () {
    const botoes = document.querySelectorAll('.botao');
    const botaoAddCurso = document.querySelector('.AddButtonCurso');
    const conteudoInicialPage = document.querySelector('.conteudo-principal-area-cursos');
    const modal = document.querySelector('.modal');
    const btnFechaModal = document.querySelector('.formModal .closeModal');
    let modalAberto = false; // Usar um booleano para indicar se o modal está aberto ou fechado

    let cursoEstaAtivo = 0;

    botoes.forEach(botao => {
        botao.addEventListener('click', function() {
            // Remover a classe 'ativo' de todos os botões
            botoes.forEach(b => b.classList.remove('ativo'));
            // Adicionar a classe 'ativo' ao botão clicado
            this.classList.add('ativo');
        });
    });

    function abreModalCursos() {
        botaoAddCurso.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.opacity = 1;
            modal.style.display = 'flex';
            modalAberto = true; // Definir modalAberto como true quando o modal for aberto
            conteudoInicialPage.style.display = 'none';
        });
    }

    function fecharModalCursos(){
        btnFechaModal.addEventListener('click', () => {
            modal.style.display = 'none';
            modalAberto = false; // Definir modalAberto como false quando o modal for fechado
            conteudoInicialPage.style.display = 'block';
        });
    }

    // Enviar dados capturados para o PHP
    const enviarDadosForm = document.getElementById('cursoForm');

    async function enviarDadosProPHP(){
        enviarDadosForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const formData = new FormData(enviarDadosForm);
            
            try {
                const response = await fetch('form.php', {
                    method: "POST",
                    body: formData
                });

                if (response.ok) {
                    // Limpar os campos do formulário
                    enviarDadosForm.reset();
                    // Exibir mensagem de sucesso
                    alert('Curso cadastrado com sucesso!');
                } else {
                    throw new Error('Erro ao enviar os dados para o PHP');
                }
            } catch (error) {
                console.error('Erro:', error);
            }
        });
    }

    async function buscarDadosDoDB() {
        try {
            const response = await fetch('busca_dados.php');
            if (!response.ok) {
                throw new Error('Erro ao buscar os dados do DB');
            }
            const data = await response.json();
            console.log('Dados do banco de dados:', data);

            // Chamar a função escreverDadosNaTela com os dados obtidos do banco de dados
            
            escreverDadosNaTela(data);
            criarBotaoExclui();
        } catch (error) {
            console.error('Erro:', error);
        }
    }

    async function obterDataDoDB() {
        try {
            const response = await fetch('obter_data.php');
            if (!response.ok) {
                throw new Error('Erro ao obter a data do banco de dados');
            }
            const dataDoDB = await response.json();
            console.log('Data do banco de dados:', dataDoDB);

            const dataAtual = new Date();
            const dataDoDBObj = new Date(dataDoDB);
            const diferencaEmMS = Math.abs(dataAtual - dataDoDBObj);
            const segundos = Math.floor(diferencaEmMS / 1000);
            const diferencaEmMinutos = Math.floor(diferencaEmMS / (1000 * 60));
            const minutos = diferencaEmMinutos % 60;
            const diferencaEmHoras = Math.floor(diferencaEmMinutos / 60);
            const horas = diferencaEmHoras % 24;
            const dias = Math.floor(diferencaEmHoras / 24);

            const segundosFormatados = segundos < 10 ? `0${segundos}` : segundos;
            
            const horario = `Dias: ${dias}, Horas: ${horas}, Minutos: ${minutos}, Segundos: ${segundosFormatados}`;
            
            console.log(horario); // Apenas para verificar se o horário está sendo calculado corretamente
        } catch (error) {
            console.error('Erro:', error);
        }
    }

    function escreverDadosNaTela(dados) {
        // Selecionar a div existente com a classe "contador"
        const divContador = document.querySelector('.contador');

        // Limpar o conteúdo existente da div
        divContador.innerHTML = '';

        // Iterar sobre os dados e exibir um item por vez
        dados.forEach(curso => {
            // Criar elementos para exibir os dados na tela
            const divDados = document.createElement('div');
            const p = document.createElement('p');
            p.textContent = `${curso.tempo_exp}`;
            divDados.appendChild(p);

            // Adicionar a div de dados à div "contador"
            divContador.appendChild(divDados);
        });

        // Remover o botão de adicionar curso
        if(dados.length === 1){
            botaoAddCurso.style.display = 'none';
        }else {
            botaoAddCurso.style.display = 'flex';
        }

        // Remover o modal
        modal.style.display = 'none';
        modalAberto = false;

    }

    const botaoExcluriI = document.querySelector('i')

    function criarBotaoExclui() {
        const btnExcluir = document.getElementById('btnExcluir');
        btnExcluir.addEventListener('click', excluirCurso);
        console.log(btnExcluir);
    };

    async function excluirCurso() {
        try {
            const response = await fetch('obter_data.php');
            const data = await response.json();
            const { cursoId, nome_curso, tempo_exp } = data; // Supondo que o servidor retorne o ID do curso, o nome do curso e o tempo de expiração
    
            console.log('Informações do curso a ser excluído:', { cursoId, nome_curso, tempo_exp });
    
            const requestBody = {
                cursoId: cursoId,
                nome_curso: nome_curso,
                tempo_exp: tempo_exp
            };
    
            const fetchResponse = await fetch('edit_form.php', {
                method: 'POST',
                body: JSON.stringify(requestBody),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            if (fetchResponse.ok) {
                // Se a exclusão for bem-sucedida, remova o curso da tela
                const cursoParaExcluir = document.querySelector('.curso-ativo');
                if (cursoParaExcluir) {
                    cursoParaExcluir.remove();
                    console.log(`Curso "${nome_curso}" excluído com sucesso!`);
                } else {
                    console.warn('Elemento do curso não encontrado na tela.');
                }
            } else {
                throw new Error('Erro ao excluir curso');
            }
        } catch (error) {
            console.error('Erro:', error);
        }
    }
    
    async function variavelGlobalDeBuscaDB(){
        let respostaDoDB = await fetch ('busca_dados.php');
        let cursoId = await respostaDoDB.json();
        return cursoId;
    }

    buscarDadosDoDB();
    enviarDadosProPHP();
    abreModalCursos();
    fecharModalCursos();
    obterDataDoDB();
});
