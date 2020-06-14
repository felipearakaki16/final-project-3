import { btnCodeBox } from './btn';


const typing = (str) => {
  const boxElement = document.getElementById('typewriter');
  let stringArray = str.split('');
  let i = 0;
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
  return loop;
};

const init_animation = (levelName) => {
  const boxElement = document.getElementById('typewriter');
  const { content_level } = require('./parts_level');
  const level = content_level[ levelName ]
  let part = 0;
  const loadForm = () => {
    if (level[part].exercise) {
    document.querySelector('.box-form').style.display = "block";
    }
  };
  loadForm()
  let sampleString = level[part].text;
  let loop = typing(sampleString);
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
      clearInterval(loop);
      part+=1
      lvlHeader.innerHTML = level[part].header;
      exampleBox.innerHTML = level[part].example;
      boxElement.innerHTML = "";
      sampleString = level[part].text;
      loop = typing(sampleString);
      loadForm()
    };
    btnCodeBox();
  });

  prevBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (part === 0) {
      return;
    } else {
      clearInterval(loop);
      part-=1
      lvlHeader.innerHTML = level[part].header;
      exampleBox.innerHTML = level[part].example;
      boxElement.innerHTML = "";
      sampleString = level[part].text;
      loop = typing(sampleString);
      loadForm()
    }
    btnCodeBox();
  });
};

export { init_animation };