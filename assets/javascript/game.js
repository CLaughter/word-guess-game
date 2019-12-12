// Prompt user for Name and confirm likeGames
let userName = prompt('Enter you name?');
let likeGames = confirm ("Do you like Hangman? Hit Cancel if no.");

// Respond to user input
if(likeGames) {
  alert( 'Awesome. Have fun!' );
} else {
  alert( 'Catch you later!' );        
  }

// end game or restart
  var restart = confirm("Restart game?");
  if(restart) {
    alert('Let\'s Go!');
  } else {
    window.open('https://claughter.github.io/basic-portfolio/');
  }      
  
// Place userName after Hello in welcome
document.getElementById('welcome').innerHTML = 'Hello ' + userName + '! ' + 'Press any lowerCase key to get started.';

// instructions in gameArea
// document.getElementById('underScore').innerHTML = 'Press any lowerCase key to get started.';
// Display boxes
document.getElementById('guessedLtrs').innerHTML = 'Guessed Letters: ';
document.getElementById('wrong').innerHTML = 'Wrong Guess';

// Display ScoreBoard
document.getElementById('score').innerHTML = 'Scoreboard';
document.getElementById('numGuess').innerHTML = 'Remaining guesses: ';
document.getElementById('win').innerHTML = 'Wins: ';
document.getElementById('loss').innerHTML = 'Losses: ';
document.getElementById('goodLuck').innerHTML = 'Good Luck';

// -----------------------------------------------------------

// Global variables for game 
// game area    
// Create an array of words
const words = ['stones', 'cream', 'hendrix', 'beatles', 'floyd', 'doors', 'traffic', 'heep'];  
let letters = ['a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'];
let computerSelect = '';
let currentWrdLtrs = [];
let underScores = [];
let wrongChoice = [];
let blanks = 0;

// Scoreboard area
let wins = 0;
let losses = 0;
let guessesLeft = 10;

// Functions
function newGame() {
  // Choose word randomly
  computerSelect = words[Math.floor(Math.random() * words.length)];
  console.log(computerSelect);

  currentWrdLtrs = computerSelect.split('');
  console.log(currentWrdLtrs);

  blanks = currentWrdLtrs.length;
  console.log(blanks);
  // New game variables reset for new game
  guessesLeft = 10;
  wrongChoice = [];
  underScores = [];

  // Create underscores based on length of word
  let createUnderScore = function x() {
    for(let i = 0; i < computerSelect.length; i++) {
      underScores.push('-');
    }
    return underScores;
  }
    console.log(createUnderScore());

    document.getElementById('underScore').innerHTML = underScores.join(' ');
    document.getElementsByClassName('remaining').innerHTML = guessesLeft;
    // document.getElementById('winNum').innerHTML = wins;
    // document.getElementById('lossesNum').innerHTML = losses;

}

function verifyLtrs(event) {  
		//Check if the letter pressed is an actual letter in the alphabet
		if (event.keyCode >= 65 && event.keyCode <= 90) { 

      //Check if the letter guessed is one of the letters in the word
      let correctLetter = false;
      const letter = event.key
      for ( var i = 0; i < blanks; i++) {
        if(computerSelect[i] === letter) {
          correctLetter = true;
          underScores[i] = letter;
        }
      }

      //If the letter isn't part of the word
      if(!correctLetter) {
        wrongChoice.push(letter);
        guessesLeft--
      }
      console.log(underScores);
      
  } else { //If user input is not a letter from the alphabet
    // Alert the user
    alert('Press a letter)');
  }
}

function roundComplete() {
  console.log('Win count: ' + wins +  ' | Loss Count: ' + losses + ' | Guesses Left: ' + guessesLeft)

  //Update HTML with Game Stats
  document.getElementsByClassName('remaining').innerHTML = guessesLeft;
  document.getElementById('underScore').innerHTML = underScores.join(' ');
  document.getElementById('wrong').innerHTML = wrongChoice.join(' ');

  //Check if the user won
  if (computerSelect.toString() === underScores.join('')) {
    wins++;
    alert("CONTRATULATIONS! You guessed '" + computerSelect + "' correctly. Try another round?");
    console.log('YOU WIN!');

    // Update the wins in the HTML doc
    document.getElementById('win').innerHTML = 'Wins: ' + ' ' + wins;

    //Start New Game and clear letters already guessed
    newGame();
    document.getElementById('guessedLtrs').innerHTML = 'Letters Already Guessed: ' + ' ' + ' ';

  } else if (guessesLeft == 0) { //Check if user lost
    losses++;
    alert('OH NO! You have 0 guesses left. The correct word was "' + computerSelect + '". Do you want to try again?')
			console.log('You Lost!');
    console.log('You Lost!');

    // Update the wins in the HTML doc
    document.getElementById('loss').innerHTML = 'Losses: ' + ' ' + losses;

    //Start New Game
    newGame();
    document.getElementById('guessedLtrs').innerHTML = 'Letters Already Guessed:  ' + ' ' + ' ';
  }  
}

  //Call function to start the game for the first time
	newGame();

	//Get input from user on what keys are being pressed
	document.onkeyup = function(event) {
		//Create a variable to hold all the letters that have been guessed
		var ltrsGuessed = String.fromCharCode(event.keyCode).toLowerCase();
			console.log("You Guessed the letter:  " + ltrsGuessed);

		// Run the check letters function
		verifyLtrs(event);
    roundComplete();
    
    // Game iteration with Guesses Left      

    if (guessesLeft <= 9) {
			document.getElementsByClassName("remaining").innerHTML = '8';
		}

		if (guessesLeft <= 8) {
			document.getElementsByClassName("remaining").innerHTML = '7';
		}

		if (guessesLeft <= 7) {
			document.getElementsByClassName("remaining").innerHTML = '6';
		}

		if (guessesLeft <= 6) {
			document.getElementsByClassName("remaining").innerHTML = '5';
		}

		if (guessesLeft <= 5) {
			document.getElementsByClassName("remaining").innerHTML = '4';
		}

		if (guessesLeft <= 4) {
			document.getElementsByClassName("remaining").innerHTML = '3';
		}

		if (guessesLeft <= 3) {
			document.getElementsByClassName("remaining").innerHTML = '2';
		}

		if (guessesLeft <= 2) {
			document.getElementsByClassName("remaining").innerHTML = '1';
		}

		if (guessesLeft <= 1) {
			document.getElementsByClassName("remaining").innerHTML = '0';
		}

	}


