let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

function checkGuess(){
    let userGuess = Number(guessField.value);
    if (guessCount === 1){
        guesses.textContent = "Inentos Anteriores ";
    }
    guesses.textContent += userGuess + " ";

    if (userGuess === randomNumber){
        lastResult.textContent = "Felicidades has acertado!";
        lastResult.style.backgroundColor = "green";
        lowOrHigh.textContent = "";
        setGameOver();
    } else if (guessCount === 10){
        lastResult.textContent = "Ohhh iGAME OVER!";
        setGameOver();
    } else {
        lastResult.textContent = "iIncorrecto!";
        lastResult.style.backgroundColor = "red";

        if (userGuess < randomNumber){
            lowOrHigh.textContent = "El numero es muy bajo";
        } else if (userGuess > randomNumber) {
            lowOrHigh.textContent = "El numero es muy alto";
        }
    }

    guessCount++;
    guessField.value="";
    guessField.focus(); 
}



guessSubmit.addEventListener('click', checkGuess);

function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.className = 'resetButton';
    resetButton.textContent = 'Reiniciar Juego';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame(){
    guessCount = 1;
    const resetParas = document.querySelector('resultParas p');
    for(let i = 0; i < resetParas.length; i++){
        resetParas[i].textContent='';
        resetParas.style.backgroundColor='black';
    }
        resetButton.parentNode.removeChild(resetButton);
        guessField.disabled = false;
        guessSubmit.disabled = false;
        guessField.value = "";
        guessField.focus();
        lastResult.style.backgroundColor = 'black';
        randomNumber = Math.floor(Math.random() * 100) + 1;
}
