
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

//Start a new game
$(document).keypress(function() {
     if (started === false) {
       $("h1").text("Level " + level);
       newSequence();
       started = true;
     }
});


//Play sound upon user button click or new color added to sequence by newSequence()
function playSound(name) {

    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();

}

//Animates user button click
function animatePress(currentColor) {

        $("#" + currentColor).addClass("pressed");

        setTimeout(function() {
            $("#" + currentColor).removeClass("pressed");
        }, 100)
}

//Detects and adds additional behaviors upon user mouse click
$(".btn").click(function() {

    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
});


//Generate a new color sequence pattern for user to follow
function newSequence() {

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);

}