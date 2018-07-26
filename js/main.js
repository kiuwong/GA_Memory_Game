// defining cards array
var cards = ['queen', 'queen','king','king','queen', 'queen','king','king'];

var cardsInPlay = [];

var cardOne = cards[0];
var cardTwo = cards[3];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

// action for user to flip cards
console.log("User Flipped " + cardOne);
console.log("User Flipped " + cardTwo);

// match logic
var len = cardsInPlay.length;

if (len === 2) {
    console.log("good"); 
    if(cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match");
    } else {
        alert("Sorry, try again!");
    }
}