    
  

    // Prompt user for Name and confirm likeGames
    var userName = prompt( 'Enter you name?' );
    var likeGames = confirm ("Do you like Hangman? Hit Cancel if no." );
    
    // Global variables
    var words // make list of songs
    var letters = [];
    var wins = 0;
    var losses = 0;
    var actualWord

    // Respond to user input
    if(likeGames) {
      alert( 'Awesome. Have fun!' );
    } else {
      alert( 'Catch you later!' );        
      }

    // end game or restart
      var restart = confirm( "Restart game?" );
      if( restart ) {
        alert('Let\'s Go!');
      } else {
        window.open( 'https://claughter.github.io/basic-portfolio/' );
      }
      
      
    // Place userName after Hello in gameArea
    document.getElementById( 'welcome' ).innerHTML="Hello " + userName + "!";

  // Start game
    function startGame() {
      actualWord=words[Math.floor( Math.random() * words.length )]
      for( var i=0; i < actualWord.length; i++ ) {
        
      }
    }
    
    
    // use actualWord as reference
    // append


// Build alphabet array
// 

// Create a reset button
// Create replay button

// var gameMechanics = {
  // DOM ELEMENTS
//   BLANK_SPACE: $("#blankSpace"),
//   DEBUG: $("#debug"),

//   // Game Properties
//   words: ["ryan", "mark", "matthew", "james"],
//   current_word: "",
//   blankSpace: "",

//   chooseWord: function() {
//     var blankSpace = "";
//     var chooseWord = this.words[Math.floor(Math.random() * this.words.length)];
    
//     /** 
//      * NOTE: If you are refering to a variable inside THIS object you need to use 'this' keyword.
//      */
//     this.current_word = chooseWord;
//     this.debugThis(this.current_word);

//     // INSERT BLANK SPACE
//     for (var i = 0; i < chooseWord.length; i++) {
//       var x = chooseWord.charAt(i);
//       if (x === "") {
//         this.blankSpace += x;
//       } else {
//         this.blankSpace += " _ "
//       }
//     }
		
//     this.BLANK_SPACE.html(this.blankSpace);

//   },

//   debugThis: function(debug_string) {
//     this.DEBUG.html(debug_string);
//     console.log("======================");
//     console.log(debug_string);
//     console.log("======================");
//   },

// };

// $(document).ready(function() {
//   gameMechanics.chooseWord();
// });
