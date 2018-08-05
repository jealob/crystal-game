// JS for the Crystal game.
//Call back for when document is fully render to the browser
$(document).ready(function () {
    let targetNumber;
    let crystals = { black: 0, green: 0, red: 0, zeke: 0 };;
    let currentNumber;
    let wins = 0;
    let losses = 0;
    var x = document.createElement("audio");
    // Click event check whether or not the current score is equals target score and run the program accordingly.
    $(".crystals").on("click", ".game-col", function () {
        // currentNumber < targetNumber makes sure that execution of accidental click event is unresponsive during end of round.
        if (currentNumber < targetNumber) {
            gameSoundPlay("assets/images/ping.mp3");
            // picks the value on the click event and compare with crystal object to get the value of the property clicked.
            currentNumber += crystals[$(this).attr('value')];
            $("#current-score").html(currentNumber);
            if (currentNumber === targetNumber) {
                wins++;
                gameSoundPlay("assets/images/cheering.mp3");
                setTimeout(function(){
                    alert("You Win!!!");
                    nextRound();  
                }, 500);  
            }
            else if (currentNumber > targetNumber){
                losses++;
                gameSoundPlay("assets/images/fail.mp3");
                setTimeout(function(){
                    alert("You Lose!");
                    nextRound();
                }, 500);                    
            }
        }
    });
    $("body").on("click", "#new-game", function(){
        newGame();
    });
    $("#wins").text(wins);
    $("#losses").text(losses);
    // nextRound initializes the global variables. Assign random numbers to both targetNumber and the crystal.
    // the value of the crystals are stored in the an object crystal for easy access and manipulation between DOM events and the crystals object properties
    function nextRound() { 
        currentNumber = 0;
        targetNumber = getRandomInt(19, 120);
        for (let property in crystals) {
            crystals[property] = getRandomInt(1, 12); //save random number for four crystals into the array crystals
        }
        $("#target-number").text(targetNumber);
        $("#wins").text(wins);
        $("#losses").text(losses);
        $("#current-score").html(currentNumber);
    }
    function newGame() {
        wins = 0;
        losses = 0;
        nextRound();
    }
//  Function getRandomInt returns random number between two numbers max and min
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function gameSoundPlay(s) {
        x.setAttribute("src", s);
        x.play();
    }
    nextRound();
});
