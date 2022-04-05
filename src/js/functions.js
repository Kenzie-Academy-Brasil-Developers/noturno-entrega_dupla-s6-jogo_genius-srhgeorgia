let somGameover = document.getElementById("somGameover"); //Som de GameOver
let somDoGreen = document.getElementById("somDoGreen");
let somDoRed = document.getElementById("somDoRed");
let somDoYellow = document.getElementById("somDoYellow");
let somDoBlue = document.getElementById("somDoBlue");

somGameover.volume = 0.2;
somDoGreen.volume = 0.2;
somDoRed.volume = 0.2;
somDoYellow.volume = 0.2;
somDoBlue.volume = 0.2;


//DOM 
const counter = document.querySelector('.counter')
const start = document.querySelector('.buttonStart')
const again = document.querySelector('.buttonAgain')


//entrada
const button = document.getElementById('popUp_button')
button.addEventListener('click', (event) => {
    event.preventDefault()
    
    const popUp = document.getElementById('popUp');
    const input = document.getElementById('input_name').value
    const nome = document.querySelector('.nome').value
    // console.log(nome)
    
    if (input === '') {
        alert('Ops! Não consegui identificar seu nome.')
    } else {
        alert(`Bem vindo(a), ${nome}`)
        popUp.classList.add('hide')
        popUp.classList.remove('show')
    }
})

let jogadasMaquina = [];
let jogadasPessoas = [];
let contador = 0;

// //botao start
start.addEventListener('click', () =>{
    alert('Bom jogo!')
    iniciarJogo()
})

// // //botao jogar novamente
again.addEventListener('click', () =>{
    alert('Vamos lá de novo!')
    // gameOver()
})

// //proximo nivel do jogo
// // const nextLevel = () =>{  
// //     score++;
// //     gerarNumeroRandomico();
// // }


// //endgame 
// const gameOver = () => {
//     somGameover.play()
//     alert(`Pontuação: ${contador}!\nVocê perdeu o jogo!\nClique em jogar novamente!`)
//     jogadasMaquina = [];
//     jogadasPessoas = [];
// }


// // //atualiza os pontos
// // let scoreTela = () => {
// //     counter.innerHTML = score++;
// //     console.log(counter)
// // }


function gerarNumeroRandomico(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function animacao(botao, cor) {
    botao.classList.add(`animacao${cor}`);
    setTimeout(() => {
        botao.classList.remove(`animacao${cor}`)
    },1000)
    // sons()
}

function animarBotao(botao, cor) {
    setTimeout(() => {
        animacao(botao, cor)
    }, 1000)
} 

function gerarAnimacaoNoBotao() {
    const numeroRandom = gerarNumeroRandomico(0, 4)

    const botao = document.querySelectorAll('.botao')[numeroRandom];
    const corBotao = botao.classList[1].split('-')[2];


    jogadasMaquina.push(botao)
    console.log(botao)
    let contadorRepet = 0;

    const intervaloAnimacao = setInterval(() => {
        if(jogadasMaquina.length > 0) {

            setTimeout(() => {
                if (contadorRepet < jogadasMaquina.length){
                    const botaoAtual = jogadasMaquina[contadorRepet];
                    const corAtual = botaoAtual.classList[1].split('-')[2];
                    
                    animarBotao(botaoAtual, corAtual)
                    contadorRepet++
                } else {
                    contadorRepet = 0;
                    clearInterval(intervaloAnimacao)
                }
            }, 1000)
        } else {
            animarBotao(botao, corBotao)    
            clearInterval(intervaloAnimacao)
        }
    }, 1000)
  
}

function adicionarEventosBotoes() {
    const botoes = document.querySelectorAll('.botao')

    for (let i =0; i < botoes.length; i++) {
        botoes[i].addEventListener('click', (e) => {
            const botaoClicado = e.target
            // console.log(botaoClicado)
            const corBotaoClicado = e.target.classList[1].split('-')[2];
            jogadasPessoas.push(botaoClicado)

            if(verificaPerda()) {
                console.log('perdeu')

            } else if (jogadasPessoas.length === jogadasMaquina.length) {
                jogadasPessoas = [];
                gerarAnimacaoNoBotao()
                console.log('tudo certo')
            }
        })
    }
}

function verificaPerda() {
    // console.log(jogadasMaquina)
    // console.log(jogadasPessoas)
    for (let i = 0; i < jogadasPessoas.length; i++) {
        const botao = jogadasMaquina[i];
        if(jogadasPessoas[i] !== botao) {
            return true
        }
    }
    return false
}

function iniciarJogo() {
    // jogadasMaquina = [];
    // jogadasPessoas = [];

    // console.log(jogadasMaquina)
    // console.log(jogadasPessoas)

    gerarAnimacaoNoBotao()
    adicionarEventosBotoes()
}

// function sons(cor, audio){
//     if (cor == 'botao--green') {
//         somDoGreen.play();
//         if (audio.currentTime > 0.5) {
//             setTimeout(() => {
//                 audio.pause();
//             }, 450);
//         }
//     } else if (cor == 'botao--red') {
//         somDoRed.play();
//         if (audio.currentTime > 0.5) {
//             setTimeout(() => {
//                 audio.pause();
//             }, 450);
//         }
//     } else if (cor == 'botao--yellow') {
//         somDoYellow.play();
//         if (audio.currentTime > 0.5) {
//             setTimeout(() => {
//                 audio.pause();
//             }, 450);
//         }
//     } else if ('botao--blue') {
//         somDoBlue.play();
//         if (audio.currentTime > 0.5) {
//             setTimeout(() => {
//                 audio.pause();
//             }, 450);
//         }
//     }
// }
