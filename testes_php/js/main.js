const botoes = document.querySelectorAll('.botao');

for (let i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener('click', function() { // Corrigido para adicionar event listener em vez de atribuir diretamente o onclick
        for (let a = 0; a < botoes.length; a++) {
            botoes[a].classList.remove('ativo');
        }

        this.classList.add('ativo');
    });
}

const botaoAddCurso = document.querySelector('.AddButtonCurso');
const conteudoInicialPage = document.querySelector('.conteudo-principal-area-cursos');
const btnFechaModal = document.querySelector('.formModal .closeModal'); // Corrigido o seletor
let modalAberto = 0; // Inicializar como 0 para indicar que o modal está fechado

function abreModalCursos() {
    botaoAddCurso.addEventListener('click', (e) => {
        e.preventDefault();

        const modal = document.querySelector('.modal');
        modal.style.opacity = 1;
        modal.style.display = 'flex';
        modalAberto = 1; // Definir modalAberto para 1 quando o modal for aberto

        // Adicionando a lógica aqui para garantir que a exibição seja atualizada após abrir o modal
        if (modalAberto === 1) {
            conteudoInicialPage.style.display = 'none';
            modal.style.display = 'flex';
            modal.classList.add('show');
        }
    });
}

function fecharModalCursos(){
    btnFechaModal.addEventListener('click', () => {
        const modal = document.querySelector('.modal');
        modal.style.display = 'none';
        modalAberto = 0; // Definir modalAberto para 0 quando o modal for fechado
        conteudoInicialPage.style.display = 'block';
    });
}

abreModalCursos();
fecharModalCursos();

// Enviar dados capturados para o PHP
const enviarDadosForm = document.getElementById('cursoForm');

function enviarDadosProPHP(){
    enviarDadosForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        //receber os dados do formulário
        const formData = new FormData(enviarDadosForm);
        
        //enviar os dados do formulário pro php
        const data = await fetch('form.php', {
                method: "POST",
                body: formData
        });
        const resposta = await data.json();
        console.log(resposta);
    })
};

enviarDadosProPHP();