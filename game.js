
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

    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    } else {
        console.log("wrong")
    }
}

// generate new sequence ------------------

function newSequence() {

    // increase level upon creating new sequence
    level++;
    $("h1").text("Level " + level);

    // reset user answers upon new sequence    
    userClickedPattern = [];

    // generate a new color for the pattern
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];

    // add new color to the game sequence to create pattern
    gamePattern.push(randomChosenColor);

    //animation to visually indicate pattern
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);

}