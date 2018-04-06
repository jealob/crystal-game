// JS for the Hangman game.

//Call back for when document is fully render to the browser
$(document).ready(function () {
    let targetNumber;
    let crystals = { black: 0, green: 0, red: 0, zeke: 0 };;
    let currentNumber;
    let wins = 0;
    let losses = 0;

    // startGame initializes the global variables. Assign random numbers to both targetNumber and the crystal.
    // the value of the crystals are stored in the an object crystal for easy access and manipulation between DOM events and the crystals object properties
    function startGame() { 
        currentNumber = 0;
        targetNumber = getRandomInt(19, 120);
        for (let property in crystals) {
            crystals[property] = getRandomInt(1, 12); //save random number for four crystals into the array crystals
        }
        $("#target-number").text(targetNumber);
        $("#wins").text(wins);
        $("#losses").text(losses);
        $("#current-score").html(currentNumber);
        console.log(targetNumber);
        console.log(crystals);
    }

    // Click event check whether or not the current score is equals target score and run the program accordingly.
    // 
    $(".crystals").on("click", ".game-col", function () {
        // picks the value on the click event and compare with crystal object to get the value of the property clicked.
        currentNumber += crystals[$(this).attr('value')]; 
        // debugger;
        $("#current-score").html(currentNumber);
        if (currentNumber === targetNumber) {
            wins++;
            // setTimeout(function(){
                startGame();
                alert("You Win!!!");    
            // }, 500);
        }
        else if (currentNumber > targetNumber) {
            losses++;
            // setTimeout(function(){
                startGame();
                alert("You Lose!");
            // }, 500);
                    
        }
        $("#wins").text(wins);
        $("#losses").text(losses);
    });
    
//  Function getRandomInt returns random number between two numbers max and min
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    startGame();
});
