// Variables created but left undetermined for use in later if else statements
var userChoice;
var gengarDeadEnd;
var victiniDeadEnd;
var snorlaxDeadEnd;
var caveRandom;
var caveDeadEnd;
var reroll;
var audio = document.getElementById('audioIntro');
var caveScreenDiv = document.getElementById(caveScreen);
var caveCutSceneDiv = document.getElementById(caveCutScene);
var endDiv = document.getElementById(playAgain);
var gameOverDiv = document.getElementById(gameOverMusic);

// Start button cuts to Cave Screen by hiding start divs and displaying new ones
function startFunction() {
  fade(startDiv);
  rerollFunction();
  audio.pause();
  document.getElementById('caveScreen').style.opacity = '0';
  setTimeout(()=> {unfade(caveScreenDiv)}, 2000)
}

// Fade effect checks if the div is at 0.1 opacity and continues to lower the div opacity until it hits the 0.1... Thus giving off the effect of the screen fading away. The Fade effect is what triggers the div being shown to dissappear and the Unfade effectw ill make the new div display.
function fade() {
  var op = 1;  // initial opacity
  var timer = setInterval(function () {
    if (op <= 0.1){
      clearInterval(timer);
      playAgain.style.opacity = '1';
      startDiv.style.display = 'none';
      audio.style.display = 'none';
    }
    startDiv.style.opacity = op;
    startDiv.style.filter = 'alpha(opacity=' + op * 100 + ")";
    op -= op * 0.1;
  }, 50);
}

// Same as Fade effect but it starts at 0.1 opacity, then continues to increase the opacity so that the new screen will appear as if it fades back into the screen. These effects are also what trigger the divs to appear.
function unfade() {
  var op = 0.1;  // initial opacity
  caveScreen.style.display = 'block';
  storyBox.style.display = 'inline-block';
  spiritChoices.style.display = 'block';
  var timer = setInterval(function () {
    if (op >= 1){
      clearInterval(timer);
    }
    caveScreen.style.opacity = op;
    caveScreen.style.filter = 'alpha(opacity=' + op * 100 + ")";
    op += op * 0.1;
  }, 50);
}

// All of these functions use onclick to call a function which will do things such as this number generater used to pick a ramdom number so that the game can compare the user cave choice to this one and see whether the user chose the correct cave or a bad ending. The while loop inside of this funciton button rerolls the random number and the dead end cave generator if they are the same.. This way, there is always a good ending, and a dead end.
function rerollFunction() {
  reroll = true;
  while (reroll) {
    caveRandom = Math.floor(Math.random() * 3);
    caveDeadEnd = Math.floor(Math.random() * 3);
    if (caveRandom === caveDeadEnd) {
      reroll = true;
    } else if (caveRandom !== caveDeadEnd) {
      reroll = false;
    }
  }
}

// Compares user cave choice to the dead end generator and if it is true, a variable is set to true, depending on what pokemon they chose. 
function cutScene(choice) {
  if (choice === caveDeadEnd && choice === 0) {
    gengarDeadEnd = true;
  } else if (choice === caveDeadEnd && choice === 1) {
    victiniDeadEnd = true;
  } else if (choice === caveDeadEnd && choice === 2) {
    snorlaxDeadEnd = true;
  }
  // Calls fade effect
  fade0(caveScreenDiv);
  document.getElementById('caveScreenGengar').style.display = 'none';
  document.getElementById('storyBoxGengar').style.display = 'none';
  document.getElementById('caveScreenVictini').style.display = 'none';
  document.getElementById('storyBoxVictini').style.display = 'none';
  document.getElementById('caveScreenSnorlax').style.display = 'none';
  document.getElementById('storyBoxSnorlax').style.display = 'none';
  userChoice = choice;
  document.getElementById('caveCutScene').style.opacity = '0';
  // Calls unfade effect once the above code is ran
  setTimeout(()=> {unfade0(caveCutSceneDiv)}, 2000)
}

function fade0() {
  var op = 1;  // initial opacity
  var timer = setInterval(function () {
    if (op <= 0.1){
      clearInterval(timer);
      caveScreen.style.display = 'none';
      storyBox.style.display = 'none';
      spiritChoices.style.display = 'none';
    }
    caveScreen.style.opacity = op;
    caveScreen.style.filter = 'alpha(opacity=' + op * 100 + ")";
    op -= op * 0.1;
  }, 50);
}

function unfade0() {
  var op = 0.1;  // initial opacity
  caveCutScene.style.display = 'block';
  storyBoxCutScene.style.display = 'block';
  var timer = setInterval(function () {
    if (op >= 1){
      clearInterval(timer);
    }
    caveCutScene.style.opacity = op;
    caveCutScene.style.filter = 'alpha(opacity=' + op * 100 + ")";
    op += op * 0.1;
  }, 50);
}

// Compares user choice to see if they chose the correct cave, dead end, or a bad ending, and based on which one it matches, specific divs will appear to match the intended ending.
function caveChoice() {
  if (userChoice === caveRandom) {
    // getElementById will get the id of a div, and then this code will set the display of that div to either block (display) or none (hide) depening on what div should dissappear and display.
    document.getElementById('storyBoxCutScene').style.display = 'none';
    document.getElementById('caveCutScene').style.display = 'none';
    document.getElementById('storyBoxCorrect').style.display = 'block';
    document.getElementById('caveCorrect').style.display = 'block';
    // Following code is used to format the background image so taht it doesnt repeat, it's centered, and other things/styles.
    document.getElementById('body').style.backgroundSize = 'cover';
    document.getElementById('body').style.backgroundAttachment = 'fixed';
    document.getElementById('body').style.backgroundPosition = 'center';
    document.getElementById('body').style.backgroundRepeat = 'no-repeat';
  } else if (userChoice === caveDeadEnd) {
    document.getElementById('storyBoxCutScene').style.display = 'none';
    document.getElementById('caveCutScene').style.display = 'none';
    document.getElementById('storyBoxDeadEnd').style.display = 'block';
    document.getElementById('caveDeadEnd').style.display = 'block';
    document.getElementById('body').style.backgroundSize = 'cover';
    document.getElementById('body').style.backgroundAttachment = 'fixed';
    document.getElementById('body').style.backgroundPosition = 'center';
    document.getElementById('body').style.backgroundRepeat = 'no-repeat';
  } else if (userChoice !== caveRandom && userChoice === 0) {
    document.getElementById('storyBoxCutScene').style.display = 'none';
    document.getElementById('caveCutScene').style.display = 'none';
    document.getElementById('storyBox0').style.display = 'block';
    document.getElementById('cave0').style.display = 'block';
    document.getElementById('body').style.backgroundSize = 'cover';
    document.getElementById('body').style.backgroundAttachment = 'fixed';
    document.getElementById('body').style.backgroundPosition = 'center';
    document.getElementById('body').style.backgroundRepeat = 'no-repeat';
  } else if (userChoice !== caveRandom && userChoice === 1) {
    document.getElementById('storyBoxCutScene').style.display = 'none';
    document.getElementById('caveCutScene').style.display = 'none';
    document.getElementById('storyBox1').style.display = 'block';
    document.getElementById('cave1').style.display = 'block';
    document.getElementById('body').style.backgroundSize = 'cover';
    document.getElementById('body').style.backgroundAttachment = 'fixed';
    document.getElementById('body').style.backgroundPosition = 'center';
    document.getElementById('body').style.backgroundRepeat = 'no-repeat';
  } else if (userChoice !== caveRandom && userChoice === 2) {
    document.getElementById('storyBoxCutScene').style.display = 'none';
    document.getElementById('caveCutScene').style.display = 'none';
    document.getElementById('storyBox2').style.display = 'block';
    document.getElementById('cave2').style.display = 'block';
    document.getElementById('body').style.backgroundSize = 'cover';
    document.getElementById('body').style.backgroundAttachment = 'fixed';
    document.getElementById('body').style.backgroundPosition = 'center';
    document.getElementById('body').style.backgroundRepeat = 'no-repeat';
  }
}

// If user gets the dead end, the user will go back to the cave screen but the pokemon they chose that lead them to the dead end will be disabled so that they cannot go back to the dead end.
function deadEnd() {
  if (gengarDeadEnd === true) {
    document.getElementById('caveDeadEnd').style.display = 'none';
    document.getElementById('caveScreenGengar').style.display = 'block';
    document.getElementById('storyBoxGengar').style.display = 'block';
    document.getElementById('spiritChoicesGengar').style.display = 'block';
    document.getElementById('body').style.backgroundSize = 'cover';
    document.getElementById('body').style.backgroundAttachment = 'fixed';
    document.getElementById('body').style.backgroundPosition = 'center';
    document.getElementById('body').style.backgroundRepeat = 'no-repeat';
  } else if (victiniDeadEnd === true) {
    document.getElementById('caveDeadEnd').style.display = 'none';
    document.getElementById('caveScreenVictini').style.display = 'block';
    document.getElementById('storyBoxVictini').style.display = 'block';
    document.getElementById('spiritChoicesVictini').style.display = 'block';
    document.getElementById('body').style.backgroundSize = 'cover';
    document.getElementById('body').style.backgroundAttachment = 'fixed';
    document.getElementById('body').style.backgroundPosition = 'center';
    document.getElementById('body').style.backgroundRepeat = 'no-repeat';
  } else if (snorlaxDeadEnd === true) {
    document.getElementById('caveDeadEnd').style.display = 'none';
    document.getElementById('caveScreenSnorlax').style.display = 'block';
    document.getElementById('storyBoxSnorlax').style.display = 'block';
    document.getElementById('spiritChoicesSnorlax').style.display = 'block';
    document.getElementById('body').style.backgroundSize = 'cover';
    document.getElementById('body').style.backgroundAttachment = 'fixed';
    document.getElementById('body').style.backgroundPosition = 'center';
    document.getElementById('body').style.backgroundRepeat = 'no-repeat';
  }
}

// End div appears with play again buttons 
function end() {
  document.getElementById('cave2').style.display = 'none';
  document.getElementById('caveCorrect').style.display = 'none';
  document.getElementById('caveDeadEnd').style.display = 'none';
  document.getElementById('cave0').style.display = 'none';
  document.getElementById('cave1').style.display = 'none';
  document.getElementById('playAgain').style.display = 'block';
  document.getElementById('body').style.backgroundSize = 'cover';
  document.getElementById('body').style.backgroundAttachment = 'fixed';
  document.getElementById('body').style.backgroundPosition = 'center';
  document.getElementById('body').style.backgroundRepeat = 'no-repeat';
}

// Rerolls the number generator so new caves end differently than the last game. This button restarts the game without reloading the page.
function again() {
  //window.location.reload()
  fade1(endDiv);
  rerollFunction();
  setTimeout(()=> {unfade1(endDiv)}, 2000)
}

// Fades back to the start screen 
function fade1() {
  var op = 1;  // initial opacity
  var timer = setInterval(function () {
    if (op <= 0.1){
      clearInterval(timer);
      playAgain.style.display = 'none';
      body.style.backgroundSize = 'cover';
      body.style.backgroundAttachment = 'fixed';
      body.style.backgroundPosition = 'center';
      body.style.backgroundRepeat = 'no-repeat';
      startDiv.style.opacity = '0';
    }
    playAgain.style.opacity = op;
    playAgain.style.filter = 'alpha(opacity=' + op * 100 + ")";
    op -= op * 0.1;
  }, 50);
}

function unfade1() {
  var op = 0.1;  // initial opacity
  audioIntro.style.display = 'block';
  startDiv.style.display = 'block';
  var timer = setInterval(function () {
    if (op >= 1){
      clearInterval(timer);
    }
    startDiv.style.opacity = op;
    startDiv.style.filter = 'alpha(opacity=' + op * 100 + ")";
    op += op * 0.1;
  }, 50);
}

// If user chooses no to the play again, this div appears with a game over screen and end music
function gameOver() {
  fade2(endDiv);
  setTimeout(()=> {unfade2(endDiv)}, 2000)
}

function fade2() {
  var op = 1;  // initial opacity
  var timer = setInterval(function () {
    if (op <= 0.1){
      clearInterval(timer);
      playAgain.style.display = 'none';
      body.style.backgroundSize = 'cover';
      body.style.backgroundAttachment = 'fixed';
      body.style.backgroundPosition = 'center';
      body.style.backgroundRepeat = 'no-repeat';
      startDiv.style.opacity = '0';
    }
    playAgain.style.opacity = op;
    playAgain.style.filter = 'alpha(opacity=' + op * 100 + ")";
    op -= op * 0.1;
  }, 50);
}

function unfade2() {
  var op = 0.1;  // initial opacity
  gameOverMusic.style.display = 'block';
  gameOverMusic.style.opacity = '0';
  var timer = setInterval(function () {
    if (op >= 1){
      clearInterval(timer);
    }
    gameOverMusic.style.opacity = op;
    gameOverMusic.style.filter = 'alpha(opacity=' + op * 100 + ")";
    op += op * 0.1;
  }, 50);
}