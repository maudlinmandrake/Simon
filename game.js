
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

//Play sound upon user button click or new color added to sequence by newSequence()
function playSound(name) {

    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

//Detect users clicks and push to an array for storage
$(".btn").click(function() {

    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);

});


//Generate new sequence
function newSequence() {

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);

}