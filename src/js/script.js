function criaTabuleiro(){
    const main = document.getElementById('main')

    const container = document.createElement('section')
    container.classList.add('tabuleiro')

    const info = document.createElement('div')
    info.classList.add('info')
    
    const pontos = document.createElement('p')
    pontos.classList.add('pontos')
    pontos.innerText = 'Pontuação'

    const counter = document.createElement('p')
    counter.classList.add('counter')
    // counter.innerText = ':'

    const buttonStart = document.createElement('button')
    buttonStart.classList.add('buttonStart')

    const buttonAgain = document.createElement('button')
    buttonAgain.classList.add('buttonAgain')

    const labelStart = document.createElement('label')
    labelStart.classList.add('labelStart')
    labelStart.htmlFor = 'buttonInfo';
    labelStart.innerText = 'start:'

    const labelAgain = document.createElement('label')
    labelAgain.classList.add('labelAgain')
    labelAgain.htmlFor = 'buttonAgain';
    labelAgain.innerText = 'Jogar novamente:';
    
    container.appendChild(info)
    container.appendChild(criarModal())
    container.appendChild(criaBotao())
    main.appendChild(container)
    info.append(pontos,counter,buttonStart,buttonAgain,labelStart,labelAgain)

}


function criaBotao(){
    const botao = document.createElement('section')
    botao.classList.add('botao')

    const azul = document.createElement('div')
    azul.classList.add('botao', 'botao--blue')

    const vermelho = document.createElement('div')
    vermelho.classList.add('botao', 'botao--red')

    const amarelo = document.createElement('div')
    amarelo.classList.add('botao', 'botao--yellow')

    const verde = document.createElement('div')
    verde.classList.add('botao', 'botao--green')

    botao.append(azul,vermelho,amarelo,verde)
    return botao;
}


function criarModal() {
    const main = document.querySelector('main')

    const popUp = document.createElement('div');
    popUp.setAttribute('id', 'popUp')
    popUp.classList.add('show')
    
    main.appendChild(popUp)

    const popUpTitulo = document.createElement('h2')
    popUpTitulo.setAttribute('id', 'popUp_title')
    popUpTitulo.innerText = 'JOGO GENIUS'
    popUp.appendChild(popUpTitulo)

    const form = document.createElement('form')
    form.setAttribute('id', 'popUp_form')

    const input = document.createElement('input')
    input.id = 'input_name'
    input.classList.add('nome')

    const label = document.createElement('label')
    label.classList.add('label')
    label.htmlFor = 'input_name';
    label.innerText = 'Insira seu nome aqui:';

    const button = document.createElement('button')
    button.setAttribute('id', 'popUp_button')
    button.innerText = 'Iniciar o jogo!';

    form.append(label,input,button)
    popUp.appendChild(form)

    return popUp
}

criaTabuleiro()



