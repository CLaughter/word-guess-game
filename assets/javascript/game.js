    
  

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
    document.getElementById('welcome').innerHTML = "Hello " + userName + "! " + "Press any key to get started.";

// -----------------------------------------------------------

// Create an array of words
const words = ['In A Gadda Da Vida', 'Tales of Brave Ulysses', 'If 6 Was 9', 'Yellow Submarine', 'One of These Days', 'Waiting for the Sun', 'The Low Spark of High Heeled Boys', 'The Great Gig in the Sky'];

// Choose word randomly
let computerSelect = words[Math.floor(Math.random() * words.length)];
console.log(computerSelect);


// Create underscores based on length of word
let underScores = [];
let createUnderScore = function x() {
  for(let i = 0; i < computerSelect.length; i++) {
    underScores.push('-');
  }
  return underScores;
}
console.log(createUnderScore());

// // Get users guess
document.addEventListener('keypress', function(event) {
  console.log(event);
});

// Check if guess is correct
// If correct push to right array
// If incorrect push to wrong array


