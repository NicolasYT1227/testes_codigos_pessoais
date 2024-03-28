const botoes = document.querySelectorAll('.btnP-desc');
const botoesC = document.querySelectorAll('.content-contato a');
const btnC1 = document.getElementById('c0');
const btnC2 = document.getElementById('c1');
const btnC3 = document.getElementById('c2');
const btnN1 = document.getElementById('nv0');
const btnN2 = document.getElementById('nv1');
const btnN3 = document.getElementById('nv3');

const botoesNavAtivo = [btnN1, btnN2, btnN3];
const navB = botoesNavAtivo;

const botoesCAtivo = [btnC1, btnC2, btnC3];
const ContatoB = botoesCAtivo;

function funcionaContentP(){
    for(let i = 0; i < botoes.length; i++){ // Adicionado "let" para limitar o escopo da variável i
        botoes[i].addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'https://github.com/NicolasYT1227?tab=repositories'; // Corrigido para window.location.href
        })
    }
}

function funcionaContentC(){
    for(let i = 0; i < botoesCAtivo.length; i++){
        botoesCAtivo[i].addEventListener('click', (e) => {
            e.preventDefault();
            
            for(let c = 0; c < ContatoB.length; c++){
                ContatoB[0].addEventListener('click', () => {
                    window.location.href = 'https://bit.ly/3QLkP2Z';
                });

               ContatoB[1].addEventListener('click', () => {
                    window.location.href = 'https://www.instagram.com/nicolaschaves._/';
               });

               ContatoB[2].addEventListener('click', () => {
                    window.location.href = 'https://www.linkedin.com/in/nicolas-chaves-09a260283/';
               })
            }
        })
    }
}

//rolagem de itens com ajax
$('.btn-nav').click(function(e) {
    // Impedir o comportamento padrão do link
    e.preventDefault();
    
    // Obter o destino do link
    var target = $(this).attr('href');
    
    // Obter a altura do nav
    var navHeight = $('.nav-header').outerHeight();

    // Rolar suavemente para a seção correspondente, levando em consideração a altura do nav
    $('html, body').animate({
        scrollTop: $(target).offset().top - navHeight // Subtrai a altura do nav da posição da seção
    }, 1000);
});

funcionaContentP();
funcionaContentC();