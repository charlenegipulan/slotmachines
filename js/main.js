/*----- constants -----*/
var dataLookup = [
    {
        emoji:  '💲',
        worth: 5
    },
    {
        emoji: '🍌',
        worth: 4
    },
    {
        emoji: '🍊',
        worth: 3
    },
    {
        emoji: '🍎',
        worth: 2
    },
    {
        emoji: '🥔',
        worth: 1.5
    }
];

var weighting = [0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4]
var symbols = ['💲', '🍌', '🍊', '🍎', '🥔']


/*----- app's state (variables) -----*/

var reels, stopped;
var score, currentWinnings

// prompt for bet 
// var bet = prompt("Bet amount: ");
//     console.log(bet);
//     document.getElementById('bettedAmount').innerHTML = bet;



/*----- cached element references -----*/



/*----- event listeners -----*/
document.getElementById('btn-shuffle').addEventListener('click', function() {
    reels = getRandomResult();
    stopped = [false, false, false];
    startFlashing();
})



//1st stop button
document.getElementById('stop1').addEventListener('click', function() {
    stopShuffle1();
})

//2st stop button
document.getElementById('stop2').addEventListener('click', function() {
    stopShuffle2();
})

//3rd stop button
document.getElementById('stop3').addEventListener('click', function() {
    stopShuffle3();
})
        
        
           
/*----- functions -----*/

function getSymbol() {
    var idx = Math.floor(Math.random() * weighting.length);
    return symbols[weighting[idx]];
}

function startFlashing() {
    // use the values in 'stopped' to determine which reels to keep flashing
    shuffleReel1 = setInterval(shuffle1, 150); 
    shuffleReel2 = setInterval(shuffle2, 180); 
    shuffleReel3 = setInterval(shuffle3, 150);
}

function stopShuffle(reelIdx) {
    stopped[reelIdx] = true;
    // render();
}

function getRandomResult() {
    var result = [];
    for (var i = 0; i < 3; i++) {
        result.push(Math.floor(Math.random()*dataLookup.length));
    }
    return result;
}

function shuffle1() {
    var randomizedNum = Math.floor(Math.random()*dataLookup.length);
    //console.log(randomizedNum); chooses a random number between 1-4
    document.getElementById('reeltext1').innerHTML = dataLookup[randomizedNum].emoji;
    };

function shuffle2() {
    var randomizedNum = Math.floor(Math.random()*dataLookup.length);
    document.getElementById('reeltext2').innerHTML = dataLookup[randomizedNum].emoji;
};

function shuffle3() {
    var randomizedNum = Math.floor(Math.random()*dataLookup.length);
    document.getElementById('reeltext3').innerHTML = dataLookup[randomizedNum].emoji;
};


function stopShuffle1() {
        clearInterval(shuffleReel1);
    }  

function stopShuffle2() {
    clearInterval(shuffleReel2);
}

function stopShuffle3() {
    clearInterval(shuffleReel3);
} 
        
        
function initialize() {
    reels= [null, null, null];
    score = 0;
            
    render();
    };
            
            
            
//transfers all state to the DOM(Visualization)
// function render() {
            
                    
                    
// initialize();
                      
                    

                    
                    
                    
                    
                    