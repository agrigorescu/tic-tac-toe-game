// javascript

$(function (){
    console.log("the dom is ready");
    //start the game as soon as the page loads
     playTheGame();

    //create the user1 choice and user2 choice
    var userChoice1;
    var userChoice2;
    var choiceMade;
    var buttonThatWasClicked
    var turn = true;



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
        if(userChoice1.length == 3 || userChoice2.length == 3){
            if(userChoice1.length == 3){
                compareMoves(userChoice1);
                console.log("player 1 has won");
            } else if(userChoice2.length == 3){
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

    //this functions plays the game
    function playTheGame () {
        console.log("let's play the game");
        while (userChoice1 < 3 || userChoice2 <3){
            //play the game
            //add event listeners for the buttons
            choiceMade = $(".myButtons");
            for (var i = 0; i < choiceMade.length; i++) {
                var button = choiceMade[i];
                button.addEventListener('click' , function(event) {
                    if(turn){
                        buttonThatWasClicked = this.id.substring(0, this.id.length);
                        console.log("this is the button that was clicked "+buttonThatWasClicked);
                        turn=false;
                        appendTheButtonToTheUserChoice(userChoice1,buttonThatWasClicked);
                    } else {
                        buttonThatWasClicked = this.id.substring(0, this.id.length);
                        console.log("this is the button that was clicked "+userChoice2);
                        turn=true;
                        appendTheButtonToTheUserChoice(userChoice2,buttonThatWasClicked);
                    }
                });
            }
        }
        //once out of the while loop, check for the winner
        checkWinner();

    }


});

