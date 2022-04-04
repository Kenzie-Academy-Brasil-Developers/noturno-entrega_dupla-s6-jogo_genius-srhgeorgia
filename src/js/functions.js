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


let order = [];
let clickedOrder = [];
let score = [];



//DOM 

const blue = document.querySelector('.botao--blue')
const red = document.querySelector('.botao--red')
const yellow = document.querySelector('.botao--yellow')
const green = document.querySelector('.botao--green')
const counter = document.querySelector('.counter')
const start = document.querySelector('.buttonStart')
const again = document.querySelector('.buttonAgain')
const colors = [green, red, yellow, blue];


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


//botao start
start.addEventListener('click', () =>{
    alert('Bom jogo!')
    playGame()
})

//botao jogar novamente
again.addEventListener('click', () =>{
    alert('Vamos lá de novo!')
    playGame()
})

//proximo nivel do jogo
let nextLevel = () =>{  
    score++;
    shuffleOrder();
}

//iniciar o jogo
let playGame = () => {
    score = 0;
    nextLevel();
}
 
//endgame 
let gameOver = () => {
    somGameover.play()
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em jogar novamente!`)
    order = []
    clickedOrder = []

    playGame();
}


// //atualiza os pontos
// let scoreTela = () => {
//     counter.innerHTML = score++;
//     console.log(counter)
// }


//adicionando sons 
let soundColorPlay = (color) => {
    if ((color == 0) || (color == 'green')) {
        somDoGreen.play();
        if (audio.currentTime > 0.5) {
            setTimeout(() => {
                audio.pause();
            }, 450);
        }
    } else if ((color == 1) || (color == 'red')) {
        somDoRed.play();
        if (audio.currentTime > 0.5) {
            setTimeout(() => {
                audio.pause();
            }, 450);
        }
    } else if ((color == 2) || (color == 'yellow')) {
        somDoYellow.play();
        if (audio.currentTime > 0.5) {
            setTimeout(() => {
                audio.pause();
            }, 450);
        }
    } else if ((color == 3) || (color == 'blue')) {
        somDoBlue.play();
        if (audio.currentTime > 0.5) {
            setTimeout(() => {
                audio.pause();
            }, 450);
        }
    }
}


//retornando a cor
function createColorElement(colors){
    if(colors == 0){
        return green;
    }else if(colors == 1){
        return red;
    }else if(colors == 2){
        return yellow;
    }else if(colors == 3){
        return blue;
    }
}
createColorElement(colors);


//checka se os botoes sao iguais da ordem gerada aleatoriamente
let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);

        nextLevel();
    }
}

//cria ordem aleatoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}


//eventos de click de cores
green.onclick = () =>click(0);
red.onclick = () =>click(1);
yellow.onclick = () =>click(2);
blue.onclick = () =>click(3);




//acende a proxima cor
function lightColor (elem, number){
    number = number * 500;
    setTimeout(() => {
        elem.classlist.add('selected')
    }, number - 250);
    setTimeout(() => {
        elem.classList.remove('selected')
    }, number + 350)
}
lightColor()




//cria o clique do usuario 
let click = (color) => {
    clickedOrder[checkOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
}




