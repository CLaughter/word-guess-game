    
  

    // Prompt user for Name and confirm likeGames
    var userName = prompt('Enter you name?');
    var likeGames = confirm ("Do you like Hangman? Hit Cancel if no.");
    
    // Global variables for game 
    // gameArea      
    var letters = ['a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'];
    var actualWord
    // ScoreArea
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
      
    // Place userName after Hello in gameArea
    document.getElementById('welcome').innerHTML = "Hello " + userName + "! " + "Press any key to get started.";

// ------------------------------------------------------------
