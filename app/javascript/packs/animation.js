import { btnCodeBox } from './btn';

const { content_level } = require('./parts_level');
let boxElement = document.getElementById('typewriter');
let part = 0;
const level = content_level[ levelName ]
let sampleString = level[part].text;
let stringArray = sampleString.split('');

const typing = () => {
  document.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
      boxElement.innerHTML = sampleString;
      stringArray = [];
    }
  })
  if (stringArray.length > 0) {
      boxElement.innerHTML += stringArray.shift();
  };
  setTimeout(typing, 50);
};


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