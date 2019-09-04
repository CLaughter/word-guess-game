    
  

    // Prompt user for Name and confirm likeGames
    var userName = prompt('Enter you name?');
    var likeGames = confirm ("Do you like Hangman? Hit Cancel if no.");
    
    // Global variables for game 
    // game area      
    var letters = ['a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'];
    var actualWord
    // Scoreboard area
    var wins = 0;
    var losses = 0;
    

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
      
    // Place userName after Hello in game area heading
    document.getElementById('welcome').innerHTML = "Hello " + userName + "! " + "Press any lower key to get started.";

// -----------------------------------------------------------

// Create an array of words
const words = ['stones', 'cream', 'hendrix', 'beatles', 'floyd', 'doors', 'traffic', 'heep'];

// Choose word randomly
let computerSelect = words[Math.floor(Math.random() * words.length)];
console.log(computerSelect);

let rightChoice = [];
let wrongChoice = [];
// Create underscores based on length of word
let underScores = [];

// console.log(computerSelect);

let createUnderScore = function x() {
  for(let i = 0; i < computerSelect.length; i++) {
    underScores.push('-');
  }
  return underScores;
}
console.log(createUnderScore());

// Get users guess
document.addEventListener('keypress', function(event) {
  /* Test console.log(event); */
  /* Need to convert the the keycode into a letter, w3s event.keyCode gets the Unicode for value, then convert into a string */
let y = event.keyCode;
console.log(y);

//  convert to a string
let z = String.fromCharCode(y);
console.log(z);

// Compare to chosen word
console.log(computerSelect.indexOf(z)); 
// returns the character location, if doesn't exist then returns -1

// Check if guess is correct
if(z.indexOf(computerSelect) > -1) {
  // console.log(true);
  // add to rightChoice array
  rightChoice.push(z)
  console.log(rightChoice);
} else {
  // add to the wrongChoice array
  wrongChoice.push(z);
  console.log(wrongChoice);
}

});


