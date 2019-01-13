console.log("Up and running!");

var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	},
];

var cardsInPlay = [];
var attempts = 0;
var matches = 0;

var setScore = function(){
	var newAttempts = document.getElementById('attempts');
	newAttempts.innerHTML = attempts + " ";
	var newMatches = document.getElementById('matches');
	newMatches.innerHTML = matches + "";
}

var cleanBoard = function(){
	imgs = document.getElementsByTagName('img');
	for (var i=0; i<imgs.length; i++){
		imgs[i].setAttribute('src', 'images/back.png');
	}
	cardsInPlay = [];
};

var resetGame = function(){
	cleanBoard();
	attempts = 0;
	matches = 0;
	setScore();
};

var checkForMatch = function() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]){
			alert("You found a match!");
			matches++;
		} else {
			alert("Sorry, try again!");
			
		}
		attempts++;
		setScore();
	}
};

var flipCard = function(){
	if(cardsInPlay.length < 2){
		var cardId = this.getAttribute('data-id');
		this.setAttribute('src', cards[cardId].cardImage);
		console.log("User flipped " + cards[cardId].rank);
		cardsInPlay.push(cards[cardId].rank);
		checkForMatch();
	}
};

var createBoard = function(){
	var cardElement;
	for (var i = 0; i < cards.length; i++) {
    	cardElement = document.createElement('img');
    	cardElement.setAttribute('src', 'images/back.png');
    	cardElement.setAttribute('data-id', i);
    	cardElement.addEventListener('click', flipCard);
    	document.getElementById('game-board').appendChild(cardElement);
	}
	resetButton = document.getElementById('reset-button');
	resetButton.addEventListener('click', resetGame);
	PlayAgainButton = document.getElementById('play-again-button');
	PlayAgainButton.addEventListener('click', cleanBoard);
};

createBoard();


