function criaTabuleiro(){
    const main = document.getElementById('main')

    const container = document.createElement('section')
    container.classList.add('tabuleiro')

    const info = document.createElement('div')
    info.classList.add('info')
    
    const pontos = document.createElement('p')
    pontos.classList.add('pontos')
    pontos.innerText = 'GENIUS'
    
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
    
    info.append(pontos,buttonStart,buttonAgain,labelStart,labelAgain)
    
    container.appendChild(info)
    //container.appendChild(criarModal())
    container.appendChild(criaBotao())
    main.appendChild(container)
}
function criaBotao(){
    const section = document.createElement('section')
    section.classList.add('section') 

    const azul = document.createElement('div')
    azul.classList.add('botao', 'botao--blue')

    const vermelho = document.createElement('div')
    vermelho.classList.add('botao', 'botao--red')

    const amarelo = document.createElement('div')
    amarelo.classList.add('botao', 'botao--yellow')

    const verde = document.createElement('div')
    verde.classList.add('botao', 'botao--green')
    section.append(azul,vermelho,amarelo,verde)

    return section;
}

function criarModal() {
    const main = document.querySelector('main')
    const popUp = document.createElement('div');
    popUp.setAttribute('id', 'popUp')
    popUp.classList.add('show')
    
    
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
    main.appendChild(popUp)
}
criarModal()