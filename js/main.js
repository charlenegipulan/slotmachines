/*----- constants -----*/
var dataLookup = ['💲', '🍌', '🍊', '🍎', '🥔'];

var data = {
    dollarSign: {
        emoji:  '💲',
        worth: 5
    },
    banana: {
        emoji: '🍌',
        worth: 4
    },
    orange: {
        emoji: '🍊',
        worth: 3
    },
    apple: {
        emoji: '🍎',
        worth: 2
    },
    potato: {
        emoji: '🥔',
        worth: 1.5
    }
}







/*----- app's state (variables) -----*/

// var reels, score, betAmount, currentWinnings, 




/*----- cached element references -----*/
// var scoreEl = document.querySelector('h1');



/*----- event listeners -----*/
document.getElementById('btn-shuffle').addEventListener('click', function() {
    setInterval(shuffle, 200);
})

// document.getElementById('inc-btn').addEventListener('click', function() {
    //     handleUpdateScore(1);
    // });
    // document.getElementById('dec-btn').addEventListener('click', function() {
        //     handleUpdateScore(-1);
        // });
        
        
        
        
        
        /*----- functions -----*/
function shuffle() {
    var randomizedNum = Math.floor(Math.random()*dataLookup.length);
    //console.log(randomizedNum); chooses a random number between 1-4
    document.getElementById('reeltext1').innerHTML = dataLookup[randomizedNum];
    document.getElementById('reeltext2').innerHTML = dataLookup[randomizedNum];
    document.getElementById('reeltext3').innerHTML = dataLookup[randomizedNum];
    };
           
        
        // var bet = prompt("Bet amount: ");
        // console.log(bet);
        // document.getElementById('bettedAmount').innerHTML = bet;
        
        // function initialize() {
            //     reels= [null, null, null];
            //     score = 0;
            
            //      render();
            // }
            
            
            
            //transfers all state to the DOM(Visualization)
            // function render() {
                //     scoreEl.textContent = score;
                // }
                
                
                // function handleUpdateScore(diff) {
                    //     score += diff;
                    
                    //     render();
                    // }
                    
                    
                    // initialize();
                    
                    

                    
                    
                    
                    
                    