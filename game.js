
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];

//Generate a random color and create a sequence of colors
function newSequence() {

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}