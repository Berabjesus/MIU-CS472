window.onload = function() {
  "use strict";

  const animations = ANIMATIONS;
  const screen = document.getElementById('text-area');
  const startButton = document.getElementById('start');
  const stopButton = document.getElementById('stop');
  const animationOption = document.getElementById('animation');
  const sizeOption = document.getElementById('fontsize');
  const speedCheckBox = document.getElementById('turbo');

  let currentFontClass = null;
  let selectedAnimation = animations[animationOption.value]
  let speed = 250;
  let player;

  const setScreen = (string) => {
    screen.innerHTML = ""
    screen.innerHTML = string
  }

  const setFont = (font) => {
    const fontClass = "fs-"+font
    screen.classList.remove(currentFontClass)
    screen.classList.add(fontClass)
    currentFontClass = fontClass
  }

  const setAnimation = (animation) => {
      if(animation === "") {return;}
      const animationAFramesArray = animation.split("=====\n");

      let counter = 0
      player = setInterval(() => {
        if (counter >= animationAFramesArray.length) {
          counter = 0
        }
        setScreen(animationAFramesArray[counter])
        counter++;
      }, speed);
  } 

  animationOption.onchange = (e) => {
    selectedAnimation = animations[e.target.value]
    setScreen(selectedAnimation);
  }

  sizeOption.onchange = (e) => {
    setFont(e.target[e.target.selectedIndex].dataset.fs)
  }

  startButton.onclick = (e) => {
    e.target.disabled = true;
    stopButton.disabled = false;
    setAnimation(selectedAnimation)
  }

  stopButton.onclick = (e) => {
    e.target.disabled = true;
    startButton.disabled = false;
    clearInterval(player)
  }

  speedCheckBox.onchange = (e) => {
    speed = e.target.checked ? 50 : 250
    clearInterval(player)
    setAnimation(selectedAnimation);
  }
}