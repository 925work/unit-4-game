
//waits for html to load before running game
$(document).ready(function() {

    var wins = 0;
    var losses = 0;
    var counter = 0;
    var gameOver = false;

    //picks new random numbers when game is reset
    function newGame() {
        var randomNumber = Math.floor(Math.random() * 102) + 19;
        console.log(randomNumber);
        $("#randomNumber").text(randomNumber);
        var malachite = Math.floor(Math.random() * 12) + 1;
        console.log(malachite);
        var mossagate = Math.floor(Math.random() * 12) + 1;
        console.log(mossagate);
        var shadowgem = Math.floor(Math.random() * 12) + 1;
        console.log(shadowgem);
        var tigerseye = Math.floor(Math.random() * 12) + 1;
        console.log(tigerseye);

        $("#malachite").on("click", function() {
            malachite = parseInt(malachite);
            counter += malachite;
            refreshScreen();
            alert("New Score: " + counter);
            if(counter === randomNumber){
                alert("YOU WIN. KEEP GOING!")
                wins ++;
                counter = 0;
                newGame();
                refreshScreen();
            } else if(counter > randomNumber){
                alert("YOU LOSE. TRY AGAIN!")
                losses ++;
                counter = 0;
                newGame();
                refreshScreen();
            } 
        })

        $("#mossagate").on("click", function() {
            mossagate = parseInt(mossagate);
            counter += mossagate;
            refreshScreen();
            alert("New Score: " + counter);
            if(counter === randomNumber){
                alert("YOU WIN. KEEP GOING!")
                wins ++;
                counter = 0;
                newGame();
                refreshScreen();
            } else if(counter > randomNumber){
                alert("YOU LOSE. TRY AGAIN!")
                losses ++;
                counter = 0;
                newGame();
                refreshScreen();
            } 
        })

        $("#shadowgem").on("click", function() {
            shadowgem = parseInt(shadowgem);
            counter += shadowgem;
            refreshScreen();
            alert("New Score: " + counter);
            if(counter === randomNumber){
                alert("YOU WIN. KEEP GOING!")
                wins ++;
                counter = 0;
                newGame();
                refreshScreen();
            } else if(counter > randomNumber){
                alert("YOU LOSE. TRY AGAIN!")
                losses ++;
                counter = 0;
                newGame();
                refreshScreen();
            } 
        })

        $("#tigerseye").on("click", function() {
            tigerseye = parseInt(tigerseye);
            counter += tigerseye;
            refreshScreen();
            alert("New Score: " + counter);
            if(counter === randomNumber){
                alert("YOU WIN. KEEP GOING!")
                wins ++;
                counter = 0;
                newGame();
                refreshScreen();
            } else if(counter > randomNumber){
                alert("YOU LOSE. TRY AGAIN!")
                losses ++;
                counter = 0;
                newGame();
                refreshScreen();
            } 
        })
    }
    //starts new game once html is loaded
    newGame();
    refreshScreen();

    //refreshes screen
    function refreshScreen() {
        $("#wins").text(wins);
        $("#losses").text(losses);
        $("#yourScore").text(counter);
    }

});
//game starts

//computer picks random number between 19-120 and shows it on screen

//crystals are randomly given a value between 1-12

//When the player clicks on a crystal, it will add a specific amount of points to the player's total score.

//When they do click one, update the player's score counter

//The player wins if their total score matches the random number from the beginning of the game. updates wins

//The player loses if their score goes above the random number. updates losses

//The game restarts whenever the player wins or loses.

//When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

//game restarts