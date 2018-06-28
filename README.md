# Slots of FUN
A personalized version of an animated slot machine game in which the user places a bet after every spin by increasing/decreasing the bet amount in regards to the current bankroll. The game is initialized with $100 in bankroll.<br>
The player loses once the bet amount and the bankroll amount both reach $0. Payouts are based on the values of the fruits, which are weighted as:

 Fruit | Weight | Payout
 ------| ------ | -----
💲💲💲| .0003  | x5
🍌🍌🍌| .002	   |x6
🍊🍊🍊| .008	   |x4
🍎🍎🍎| .019   |x3
🥔🥔🥔| .0363  |x2

- When the player hits 3 matching images, bet amount will then be multipled by the image's payout value. 
- Any TWO matching images will just then return the player's betted amount.


## Screenshot
![Slotmachine Screenshot](https://i.imgur.com/DfXD6kD.png)


## Technologies Used
    * HTML
    * CSS
    * JavaScript

    
## Getting Started:
[Try me!](https://charlenegipulan.github.io/slotmachines/) to check out a live demo of the game.


## Next Steps
* Add a modal displaying winning/losing message
* Create buttons that allow user to increment the bet with different amounts. 
