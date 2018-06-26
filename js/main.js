/*----- constants -----*/
var symbols = [
    { emoji: '💲', worth: 5 },
    { emoji: '🍌', worth: 4 },
    { emoji: '🍊', worth: 3 },
    { emoji: '🍎', worth: 2 },
    { emoji: '🥔', worth: 1.5 }
];

var weighting = [0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4]

/*----- app's state (variables) -----*/

var reels, stopped;
var winnings, bankroll, bet;
var timerIds;


/*----- cached element references -----*/
var reelEls = document.querySelectorAll('div.reels h4');

var bankrollAmount = document.getElementById('currentBankroll');
var betAmount = document.getElementById('bettedAmount');



/*----- event listeners -----*/
document.getElementById('btn-shuffle').addEventListener('click', function() {
    reels = [];
    reels = getRandomResult();
    winnings = 0;
    stopped = [false, false, false];
    startFlashing();
})

//1st stop button
document.getElementById('stop1').addEventListener('click', function() {
    stopShuffle(0);
});

//2st stop button
document.getElementById('stop2').addEventListener('click', function() {
    stopShuffle(1);
});

//3rd stop button
document.getElementById('stop3').addEventListener('click', function() {
    stopShuffle(2);
});
      
//increase bet button
document.getElementById('add').addEventListener('click', increaseBet);


//decrease bet button
document.getElementById('subtract').addEventListener('click', decreaseBet);  
    

/*----- functions -----*/
function increaseBet() {
    if (bankroll < 5) return;
        bet += 5; 
        bankroll -= 5;
    render();
};

function decreaseBet() {
    if (bet < 5 ) return;
        bankroll += 5;
        bet -= 5;
    render();
};

function startFlashing() {
    timerIds = [];
    timerIds.push(setInterval(function() {
        shuffle(0);
    }, 100)); 
    timerIds.push(setInterval(function() {
        shuffle(1);
    }, 120)); 
    timerIds.push(setInterval(function() {
        shuffle(2);
    }, 130)); 
}

function getRandomResult() {
    var result = [];
    for (var i = 0; i < 3; i++) {
        result.push(weighting[Math.floor(Math.random() * weighting.length)]);
    }
    return result;
}

function shuffle(reelIdx) {
    var symbolIdx = Math.floor(Math.random() * symbols.length);
    reelEls[reelIdx].textContent = symbols[symbolIdx].emoji;
};

function stopShuffle(reelIdx) {
    stopped[reelIdx] = true;
    clearInterval(timerIds[reelIdx]);
    if (!stopped.includes(false)) {
        checkForWin();
    }
    render();
};      

function checkForWin() {
    //if there's three matching numbers in the array
    if (reels[0] === reels[1] && reels[0] === reels[2] && reels[1] === reels[2]) {
        winnings = bet * symbols[reels[0]].worth;
        bankroll += winnings;
    } else if (reels[0] === reels[1] || reels[0] === reels[2] || reels[1] === reels[2]) {
        winnings = bet * 1;
        bankroll += winnings;
    }
    winnings -= bet; 
    bet = 0;
}
   
          
function initialize() {
    reels= [null, null, null];
    stopped = [false, false, false];
    bankroll = 100;
    bet = 0;
render();
};
            
            
            
//transfers all state to the DOM(Visualization)
function render() {
    reelEls.forEach(function(h4, idx) {
        if (stopped[idx]) h4.textContent = symbols[reels[idx]].emoji;
    });
    betAmount.textContent = bet;
    bankrollAmount.textContent = bankroll;
                    
};
 
initialize()
                    

                    
                    
