// defining cards array
var cards = ['queen', 'queen','king','king','queen', 'queen','king','king'];

// defining user card selected
var cardsInPlay = [];

// match logic
var checkForMatch = function() {
    if(cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match");
    } else {
        alert("Sorry, try again!");
    }
};
// logic to flip card
var flipCard = function (cardId) {
    console.log("User flipped " + cards[cardId]);
    cardsInPlay.push(cards[cardId]);
    checkForMatch();
};

flipCard(0);
flipCard(2);


    // var len = cardsInPlay.length;

    // if (len === 2) {
    //     console.log("good"); 
    //    
    // }