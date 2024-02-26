

let buttonColors = ['red', 'blue', 'green', 'yellow'];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
var started = false;



$(document).keypress(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });




$('.btn').click(function(event){
    let userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);
    
    playSound(userChosenColour);
   
    animatePress(userChosenColour);

    

    
   
    checkAnswer(userClickedPattern.length-1)
    
})

function checkAnswer(currentLevel) {

    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("Corretto");

        if (userClickedPattern.length === gamePattern.length) {

            setTimeout(function() {
                nextSequence();
            }, 1000);
    
            
        }
    } else {

        $('body').addClass('game-over');
        setInterval(() => {
            $('body').removeClass('game-over');
        }, 200);
        $('h1').text('Game Over Ssseeegggaaaahh')
        playSound('wrong');

        startOver();


        
    }

}


function nextSequence(){

    userClickedPattern = [];
    level++;
    
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor =  buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $('#'+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    
    if(gamePattern.length > 0){   
        
        $('h1').text('level ' + level);
        
    }

}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }



function animatePress(currentColor){
    $('#'+currentColor).addClass('pressed');
    setTimeout(function(){
    $('#'+currentColor).removeClass('pressed');

    }, 100)


} 







function startOver(){
    gamePattern = [];
    level = 0;
    started = false;
}