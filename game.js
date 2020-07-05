
var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

// start a new game -----------------------

$(document).keypress(function() {
     if (started === false) {
       $("h1").text("Level " + level);
       newSequence();
       started = true;
     }
});

// user input -------------------------

$(".btn").click(function() {

    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
});

// check user answer

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("success")

        if (gamePattern.length === userClickedPattern.length) {
           
            setTimeout(function() {
                newSequence();
              }, 1000);

        }
    } else {

        $("h1").text("Game Over, Press Any Key to Restart");
        $("body").addClass("game-over");

        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200)

        var wrong = new Audio("sounds/wrong.mp3");
        wrong.play();

        startOver();
    }
}

// generate new sequence ------------------

function newSequence() {
 
    userClickedPattern = [];

    level++;
    $("h1").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);

}

// start the game over --------------------

function startOver() {

    level = 0;
    gamePattern = [];
    started = false;

}

// play sound ----------------------------

function playSound(name) {

    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();

}

// animates button press -------------------

function animatePress(currentColor) {

        $("#" + currentColor).addClass("pressed");

        setTimeout(function() {
            $("#" + currentColor).removeClass("pressed");
        }, 100)
}