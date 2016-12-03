// javascript

$(function (){
    console.log("the dom is ready");
    //start the game as soon as the page loads
     playTheGame();

    //create the user1 choice and user2 choice
    var userChoice1; //player1 choice string
    var userChoice2; //player2 choice string
    var choiceMade; //variable that will contain the buttons
    var userMoves1=[]; //the array where the player1 moves will be recorded
    var userMoves2=[]; //the array where the player2 moves will be recorded
    var buttonThatWasClicked; //variable that will record which button was clicked
    var turn = true; //boolean variable that will record whose turn is to play: true-player1/false-player2

    //add event listeners for the buttons
    choiceMade = $(".myButtons");
    for (var i = 0; i < choiceMade.length; i++) {
        var button = choiceMade[i];
        button.addEventListener('click' , function(event) {
            if(turn){
                buttonThatWasClicked = this.id.substring(0, this.id.length());
                console.log("this is the button that was clicked "+buttonThatWasClicked);
                // $(".tic").prepend("<img src="tic-tac-toe-exes.png" />");
                turn=false;
                appendTheButtonToTheUserChoice(userChoice1,buttonThatWasClicked);
                userMoves1[userMoves1.length]=parseInt(buttonThatWasClicked);
                } else {
                    buttonThatWasClicked = this.id.substring(0, this.id.length);
                    console.log("this is the button that was clicked "+userChoice2);
                    turn=true;
                    appendTheButtonToTheUserChoice(userChoice2,buttonThatWasClicked);
                    // $(".tic").prepend("<img src="tic-tac-toe-zero.png" />");
                    userMoves2[userMoves2.length]=parseInt(buttonThatWasClicked);
                }
            });
        }
    }

    //this function checks to see if the userChoice variable is equal to any of the winning posibilities
    function compareMoves(userChoice) {
        switch(userchoice){
            case "123" : console.log("the game is over");
            case "159" : console.log("the game is over");
            case "147" : console.log("the game is over");
            case "369" : console.log("the game is over");
            case "789" : console.log("the game is over");
            case "357" : console.log("the game is over");
        }   
    }

    //this functions checks to see whi is the winner
    function checkWinner() {
        if(userChoice1.length() == 3 || userChoice2.length() == 3){
            if(userChoice1.length() == 3){
                compareMoves(userChoice1);
                console.log("player 1 has won");
            } else if(userChoice2.length() == 3){
                compareMoves(userChoice2);
                console.log("player 2 has won");
            }
        }
    }

    //this fucntion appends the id of the button that was clicked to the user choice in order to make it a string of numbers
    function appendTheButtonToTheUserChoice (userChoice,buttonClicked){
        $("#element").click(function(){
            $(this).data('clicked', true);
            userChoice=userChoice.concat(buttonClicked);
            console.log("this is the userchoice "+userChoice);
        });
    }

    /*this function takes the moves and splits it into numbers
    *then sorts them in asending order*/ 
    function ascendingOrder(userChoice) {
        //takes an array as a paramether
        //sorst the array in an ascending order

    }

    //this functions plays the game
    function playTheGame () {
        console.log("let's play the game");
        while (/*condition*/){
            //play the game
            
            //check for the winner after each move
            checkWinner();
        }


});

