/*----- constants -----*/



/*----- app's state (variables) -----*/

// var reels, score, betAmount, currentWinnings, 




/*----- cached element references -----*/
// var scoreEl = document.querySelector('h1');



/*----- event listeners -----*/
// document.getElementById('inc-btn').addEventListener('click', function() {
//     handleUpdateScore(1);
// });
// document.getElementById('dec-btn').addEventListener('click', function() {
//     handleUpdateScore(-1);
// });





/*----- functions -----*/

// var bet = prompt("Bet amount: ");
// console.log(bet);
// document.getElementById('bettedAmount').innerHTML = bet;

function initialize() {
    reels= [null, null, null];
    score = 0;

     render();
}



//transfers all state to the DOM(Visualization)
// function render() {
//     scoreEl.textContent = score;
// }


// function handleUpdateScore(diff) {
//     score += diff;

//     render();
// }


// initialize();