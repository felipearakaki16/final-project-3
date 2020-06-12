import { btnCodeBox } from './btn';

const typing = (str) => {
  const boxElement = document.getElementById('typewriter');
  let stringArray = str.split('');
  let i = 0;

const { content_level } = require('./parts_level');
let boxElement = document.getElementById('typewriter');
let part = 0;
const level = content_level[ levelName ]
let sampleString = level[part].text;
let stringArray = sampleString.split('');

const typing = () => {

  document.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
      boxElement.innerHTML = str;
      stringArray = [];
    }
  });

  const loop = setInterval( () => {
    if ( stringArray[i] ) {
    boxElement.innerHTML += stringArray[i];
    };
    if ( i >= stringArray.length ) {
      clearInterval(loop);
    }
    i++; 
  }, 50);
  // loop();
  
};

const init_animation = (levelName) => {
  const { content_level } = require('./parts_level');
  const boxElement = document.getElementById('typewriter');
  let part = 0;
  const level = content_level[ levelName ]
  let sampleString = level[part].text;
  typing(sampleString);
  
  // Next and Prev Buttons
  const lvlHeader = document.getElementById('level-header');
  const exampleBox = document.getElementById('examples');
  const nextBtn = document.getElementById('next-btn');
  const prevBtn = document.getElementById('prev-btn');
  

  nextBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (part === level.length - 1) {
      return;
    } else {
      part+=1
      lvlHeader.innerHTML = level[part].header;
      exampleBox.innerHTML = level[part].example;
      boxElement.innerHTML = "";
      sampleString = level[part].text;
      typing(sampleString);
    };
    btnCodeBox();
  });

  prevBtn.addEventListener('click', (event) => {
    event.preventDefault()
    if (part === 0) {
      return;
    } else {
      part-=1
      lvlHeader.innerHTML = level[part].header;
      exampleBox.innerHTML = level[part].example;
      boxElement.innerHTML = "";
      sampleString = level[part].text;
      typing(sampleString);
    }
    btnCodeBox();
  });
};

export { init_animation };

// Next and Prev Buttons
const lvlHeader = document.getElementById('level-header');
const exampleBox = document.getElementById('examples');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

nextBtn.addEventListener('click', (event) => {
  event.preventDefault();
  if (part === level.length - 1) {
    return;
  } else {
    part+=1
    lvlHeader.innerHTML = level[part].header;
    exampleBox.innerHTML = level[part].example;
    boxElement.innerHTML = "";
    sampleString = level[part].text;
    stringArray = sampleString.split('');
  };
  btnCodeBox();
});

prevBtn.addEventListener('click', (event) => {
  event.preventDefault()
  if (part === 0) {
    return;
  } else {
    part-=1
    lvlHeader.innerHTML = level[part].header;
    exampleBox.innerHTML = level[part].example;
    boxElement.innerHTML = "";
    sampleString = level[part].text;
    stringArray = sampleString.split('');
  }
  btnCodeBox();
});

export { typing };
