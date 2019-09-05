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
  // var restart = confirm("Restart game?");
  // if(restart) {
  //   alert('Let\'s Go!');
  // } else {
  //   window.open('https://claughter.github.io/basic-portfolio/');
  // }      
  
// Place userName after Hello in welcome
document.getElementById('welcome').innerHTML = 'Hello ' + userName + '! ' + 'Press any lowerCase key to get started.';

// instructions in gameArea
// document.getElementById('underScore').innerHTML = 'Press any lowerCase key to get started.';

// Display right wrong boxes
document.getElementById('right').innerHTML = 'Right Guess';
document.getElementById('wrong').innerHTML = 'Wrong Guess'

// Display ScoreBoard
document.getElementsByClassName('score').innerHTML = 'Scoreboard';
document.getElementById('remaining').innerHTML = 'Remaining guesses: ';
document.getElementById('win').innerHTML = 'Wins: ';
document.getElementById('loss').innerHTML = 'Losses: ';

// -----------------------------------------------------------

// Global variables for game 
// game area    
// Create an array of words
const words = ['stones', 'cream', 'hendrix', 'beatles', 'floyd', 'doors', 'traffic', 'heep'];  
let letters = ['a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'];
let actualWord = "";
let currentWrdLtrs = [];
let underScores = [];
// let rightChoice = [];
let wrongChoice = [];
let blanks = 0;

// Scoreboard area
let wins = 0;
let losses = 0;
let guessesLeft = 10;

// Functions
function newGame() {
  // Choose word randomly
  let computerSelect = words[Math.floor(Math.random() * words.length)];
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

    document.getElementById("underScore").innerHTML = underScores.join(" ");
    document.getElementById("remaining").innerHTML = "Number of Guesses Remaining: " + " " + guessesLeft;
    document.getElementById("win").innerHTML = "Wins: " + " " + wins;
    document.getElementById("loss").innerHTML = "Losses: " + " " + losses;

}

function verifyLtrs() {  
		//Check if the letter pressed is an actual letter in the alphabet
		if (event.keyCode >= 65 && event.keyCode <= 90) { 

      //Check if the letter guessed is one of the letters in the word
      var correctLetter = false;

      for ( var i = 0; i < blanks; i++) {
        if(actualWord[i] == letter) {
          correctLetter = true;
        }
      }

      //Check where the correct letter is located on the word, then add to html
      if(correctLetter) {
        for ( var i = 0; i < blanks; i++) {
          if(actualWord[i] == letter) {
            underScores[i] = letter;
          }
        }
      }

      //If the letter isn't part of the word
      else {
        wrongChoice.push(letter);
        guessesLeft--
      }

      //testing via console
      console.log(underScores);
      
  } else { //If user input is not a letter from the alphabet
    // Alert the user
    alert("Press a letter)");
  }
}

function roundComplete() {
  console.log("Win count: " + wins +  " | Loss Count: " + losses + " | Guesses Left: " + guessesLeft)

  //Update HTML with Game Stats
  document.getElementById("remaining").innerHTML = "Number of Guesses Remaining: " + " " + guessesLeft;
  document.getElementById("underScore").innerHTML = underScores.join(" ");
  document.getElementById("right").innerHTML = "Letters Already Guessed:" + " " + wrongChoice.join(" ");

  //Check if the user won
  if (currWrdLtrs.toString() == underScores.toString()) {
    wins++;
    alert("CONTRATULATIONS! You guessed '" + word + "' correctly. Try another round?");
    console.log("YOU WIN!");

    // Update the wins in the HTML doc
    document.getElementById("win").innerHTML = "Wins: " + " " + win;

    //Start New Game and clear letters already guessed
    newGame();
    document.getElementById("guessedLetters").innerHTML = "Letters Already Guessed:" + " " + " ";

  } else if (guessesLeft == 0) { //Check if user lost
    losses++;
    alert("OH NO! You have 0 guesses left, and all your friends are now in the upsidedown. The correct word was '" + word + "'. Do you want to try again?")
    console.log("You Lost!");

    // Update the wins in the HTML doc
    document.getElementById("loss").innerHTML = "Losses: " + " " + loss;

    //Start New Game
    newGame();
    document.getElementById("guessedLetters").innerHTML = "Letters Already Guessed:" + " " + " ";

  }  
}

// MAIN PROCESS
//=============

	//Call function to start the game for the first time
	newGame();

	//Get input from user on what keys are being pressed
	document.onkeyup = function(event) {
		//Create a variable to hold all the letters that have been guessed
		let ltrsGuessed = String.fromCharCode(event.keyCode).toLowerCase();
			console.log("You Guessed the letter: " + ltrsGuessed); // Testing via Console.Log

		//Run the check letters function
		checkLtrs(ltrsGuessed);
		roundComplete();

		//Game interation with the images (Guesses Left, as displayed by images)
		if (guessesLeft <= 8) {
			document.getElementById("elevenImg").style.transform = "rotate(180deg)";
			document.getElementById("elevenImg").style.opacity = "0.25";
		}

		if (guessesLeft <= 7) {
			document.getElementById("mikeImg").style.transform = "rotate(180deg)";
			document.getElementById("mikeImg").style.opacity = "0.25";
		}

		if (guessesLeft <= 6) {
			document.getElementById("willImg").style.transform = "rotate(180deg)";
			document.getElementById("willImg").style.opacity = "0.25";
		}

		if (guessesLeft <= 5) {
			document.getElementById("dustinImg").style.transform = "rotate(180deg)";
			document.getElementById("dustinImg").style.opacity = "0.25";
		}

		if (guessesLeft <= 4) {
			document.getElementById("lucasImg").style.transform = "rotate(180deg)";
			document.getElementById("lucasImg").style.opacity = "0.25";
		}

		if (guessesLeft <= 3) {
			document.getElementById("madMaxImg").style.transform = "rotate(180deg)";
			document.getElementById("madMaxImg").style.opacity = "0.25";
		}

		if (guessesLeft <= 2) {
			document.getElementById("steveImg").style.transform = "rotate(180deg)";
			document.getElementById("steveImg").style.opacity = "0.25";
		}

		if (guessesLeft <= 1) {
			document.getElementById("chiefHopperImg").style.transform = "rotate(180deg)";
			document.getElementById("chiefHopperImg").style.opacity = "0.25";
		}
  };


