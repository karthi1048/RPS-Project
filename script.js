let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const message = document.querySelector('#msg');

const uScorePara = document.querySelector('#user-score');
const cScorePara = document.querySelector('#computer-score');

const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissor'];
    // rock, paper, scissor
    // random function is used to generate whole num that indicates an idx in arr[options]
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    // console.log('Game was draw');
    message.innerText = 'Game was draw';
    message.style.backgroundColor = '#081b31';
}

const showWin = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        uScorePara.innerText = userScore;
        // console.log('You won!');
        message.innerText = `You won! Your ${userChoice} beats ${compChoice}`;
        message.style.backgroundColor = 'green';
    } else {
        compScore++;
        cScorePara.innerText = compScore;
        // console.log('You lost');
        message.innerText = `You lost ${compChoice} beats your ${userChoice}`;
        message.style.backgroundColor = 'red';
    }
}

const playGame = (userChoice) => {
    // console.log('Your choice =', userChoice);
    // Generate computer choice
    const compChoice = genCompChoice();
    // console.log('computer choice =', compChoice);

    // compare
    if(userChoice === compChoice){
        // Draw game
        drawGame();
    } else {
        let userWin = true;

        if(userChoice === 'rock'){
            // comp -> scissor or paper
            userWin = (compChoice === 'paper') ? false : true;
        } else if (userChoice === 'paper') {
            // comp -> scissor or rock
            userWin = (compChoice === 'scissor') ? false : true;
        } else {
            // comp -> paper or rock
            userWin = (compChoice === 'rock') ? false : true;
        }
        showWin(userWin, userChoice, compChoice);
    }
};


choices.forEach( (choice) => {
    // console.log(choice);
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id')
        // console.log('clicked', userChoice);
        playGame(userChoice);
    });
});