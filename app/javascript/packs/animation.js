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
  const loadExercise = () => {
    if (level[part].exercise) {
      document.querySelector('.box-exercise').style.display = "block";
    } else {
      document.querySelector('.box-exercise').style.display = "none";

    }
  };
  loadExercise()
  let sampleString = level[part].text;
  let loop = typing(sampleString);
  const jumpBtn = document.getElementById('jump')
  // Next and Prev Buttons
  const lvlHeader = document.getElementById('level-header');
  const exampleBox = document.getElementById('examples');
  const nextBtn = document.getElementById('next-btn');
  const prevBtn = document.getElementById('prev-btn');
  
  const activation = () => {
    if (part === 0) {
      jumpBtn.classList.remove('disable')
      prevBtn.classList.add('disable')
    } else {
      jumpBtn.classList.add('disable')
      prevBtn.classList.remove('disable')
    }
    if (part === level.length - 1) {
      nextBtn.classList.add('disable')
    } else {
      nextBtn.classList.remove('disable')
    }
  };
  activation();
  jumpBtn.addEventListener('click', (event) => {
    event.preventDefault()
    clearInterval(loop);
    const startLvl = level.find( part => part.start === true );
    part = level.indexOf(startLvl);
    lvlHeader.innerHTML = level[part].header;
    exampleBox.innerHTML = level[part].example;
    boxElement.innerHTML = "";
    sampleString = level[part].text;
    loop = typing(sampleString);
    loadExercise();
    activation();
    btnCodeBox();
  });

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
      loadExercise();
      activation();

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
      loadExercise();
      activation();

    }
    btnCodeBox();
  });
};

export { init_animation };