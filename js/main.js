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
var score, currentWinnings
var timerIds;

// prompt for bet 
// var bet = prompt("Bet amount: ");
//     console.log(bet);
//     document.getElementById('bettedAmount').innerHTML = bet;


/*----- cached element references -----*/
var reelEls = document.querySelectorAll('div.reels h4');

/*----- event listeners -----*/
document.getElementById('btn-shuffle').addEventListener('click', function() {
    reels = getRandomResult();
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
        
        
           
/*----- functions -----*/
function startFlashing() {
    timerIds = [];
    timerIds.push(setInterval(function() {
        shuffle(0);
    }, 150)); 
    timerIds.push(setInterval(function() {
        shuffle(1);
    }, 180)); 
    timerIds.push(setInterval(function() {
        shuffle(2);
    }, 150)); 
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
    // if (!stopped.includes(false) {
    //     // score points here;
    // };
    render();
};      

function checkForWin() {

};


        
function initialize() {
    reels= [null, null, null];
    stopped = [false, false, false];
    score = 0;
    render();
};
            
            
            
//transfers all state to the DOM(Visualization)
function render() {
    reelEls.forEach(function(h4, idx) {
        if (stopped[idx]) h4.textContent = symbols[reels[idx]].emoji;
    });
    // render bankroll
    // render winning/losing messaging         
                    
}

initialize()
                    

                    
                    
                    
                    
                    