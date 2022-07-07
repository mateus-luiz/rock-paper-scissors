const gameCards = document.querySelectorAll('a.game-card');
let activeCard = '';

gameCards.forEach(card => {
    
    if(card.classList.contains('active')){
        activeCard = card;
    }
    
    card.addEventListener('click', () => {
        if(card == activeCard){
            return;
        }

        card.classList.add('active');
        activeCard.classList.remove('active');
        activeCard = card;
    })
});

const playBtn = document.getElementById('playBtn');
playBtn.addEventListener('click',  () => {
    playRound();
});

function playRound(){
    const computerSelection = computerPlay();
    const playerSelection = playerSelect();
    const resultContainer = document.getElementById('result');

    if(playerSelection == "ROCK" && computerSelection == "SCISSORS" 
        || playerSelection == "PAPER" && computerSelection == "ROCK"
        || playerSelection == "SCISSORS" && computerSelection == "PAPER"){
            resultContainer.innerHTML= `
            <h2 class="result">CONGRATULATIONS YOU <strong>WON</strong></h2>
            <div>
                <img class="result-img" id="player-selection" src="${activeCard.id}.svg">
                <span>X</span>
                <img class="result-img" id="computer-selection" src="${computerSelection.toLowerCase()}.svg">
            </div>`;
            resultContainer.style.display= "block";
    };

    if(playerSelection == "ROCK" && computerSelection == "PAPER" 
        || playerSelection == "PAPER" && computerSelection == "SCISSORS"
        || playerSelection == "SCISSORS" && computerSelection == "ROCK"){
            resultContainer.innerHTML= `
            <h2 class="result">YOU <strong>LOSE</strong></h2>
            <div>
                <img class="result-img" id="player-selection" src="${activeCard.id}.svg">
                <span>X</span>
                <img class="result-img" id="computer-selection" src="${computerSelection.toLowerCase()}.svg">
            </div>`;
            resultContainer.style.display= "block";
    }
}


function computerPlay(){
    let play = Math.floor(Math.random() * 3);

    switch(play){
        case 0:
            return "ROCK";
        case 1:
            return "PAPER";
        case 2:
            return "SCISSORS";
        default:
            return "IS NOT A VALID OPTION!";
    }
}

function playerSelect(){
    let id = activeCard.id.toUpperCase();

    switch(id){
        case 'ROCK':
            return 'ROCK';
        case 'PAPER':
            return 'PAPER';
        case 'SCISSORS':
            return 'SCISSORS';
        default:
            return 'IS NOT A VALID OPTION!';
    }
}