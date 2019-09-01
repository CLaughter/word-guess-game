    
  

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

// ------------------------------------------------------------

  // Start game
  function startGame() {
  // Word list     
  var words = ['In A Gadda Da Vida, Tales of Brave Ulysses, If 6 Was 9, Yellow Submarine, One of These Days, Waiting for the Sun, The Low Spark of High Heeled Boys, The Great Gig in the Sky'];

// Computer randon word choice  
  actualWord=words[Math.floor(Math.random() * words.length)]
  for(var i=0; i < actualWord.length; i++) {
  progressWord.push('-');
  }
