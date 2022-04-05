function resetGame() {
    const main = document.querySelector('#main')
    main.innerHTML= '';
    criaTabuleiro()
    const start = document.querySelector('.buttonStart')
    const again = document.querySelector('.buttonAgain')
     // //botao start
     start.addEventListener('click', () =>{
        alert('Bom jogo! Aguarde sua vez!')
        iniciarJogo()
    })
    // // //botao jogar novamente
    again.addEventListener('click', () =>{
        alert('Vamos lá de novo!')
        jogadasMaquina = [];
        jogadasPessoas = [];
    })
    iniciarJogo()
}
//entrada
const button = document.getElementById('popUp_button')
button.addEventListener('click', (event) => {
    event.preventDefault()
    
    const popUp = document.getElementById('popUp');
    const input = document.getElementById('input_name').value
    // console.log(nome)
        if (input === '') {
            alert('Ops! Não consegui identificar seu nome.')
        } else {
            alert(`Bem vindo(a), ${input}`)
            popUp.classList.add('hide')
            popUp.classList.remove('show')
            criaTabuleiro()
                
            const start = document.querySelector('.buttonStart')
            const again = document.querySelector('.buttonAgain')
        
            // //botao start
            start.addEventListener('click', () =>{
                alert('Bom jogo! Aguarde sua vez!')
                iniciarJogo()
            })
        
            // // //botao jogar novamente
            again.addEventListener('click', () =>{
                alert('Vamos lá de novo!')
                jogadasMaquina = [];
                jogadasPessoas = [];
                resetGame()
            })
        }
})

let jogadasMaquina = [];
let jogadasPessoas = [];
let contador = 0;

function gerarNumeroRandomico(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function animacao(botao, cor) {
    botao.classList.add(`animacao${cor}`);
    setTimeout(() => {
        botao.classList.remove(`animacao${cor}`)
    },1000)
}

function animarBotao(botao, cor) {
    setTimeout(() => {
        animacao(botao, cor)
    }, 2000)
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
    }, 2000)
  
}

function adicionarEventosBotoes() {
    const botoes = document.querySelectorAll('.botao')
    for (let i = 0; i < botoes.length; i++) {
        botoes[i].addEventListener('click', (e) => {
            const botaoClicado = e.target
            jogadasPessoas.push(botaoClicado)
            if(verificaPerda()) {
               alert(`Você perdeu :( Clique em jogar novamente!`)
                console.log('perdeu')
               
            } else if (jogadasPessoas.length === jogadasMaquina.length) {
                jogadasPessoas = [];
                gerarAnimacaoNoBotao()
                alert('Parabens! Proximo nível, aguarde sua vez!')
                console.log('tudo certo')
            }
        })
    }
}

function verificaPerda() {
    for (let i = 0; i < jogadasPessoas.length; i++) {
        const botao = jogadasMaquina[i];
        if(jogadasPessoas[i] !== botao) {
            return true
        }
    }
    return false
}

function iniciarJogo() {
    gerarAnimacaoNoBotao()
    adicionarEventosBotoes()
}