import { btnCodeBox } from './btn';
import { highlight } from 'prismjs';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup';


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
  
  const hightlightCode = (str, language) => {
    const highlightedCode = highlight(str, eval('Prism.languages.' + language));
    const highlightedHTML = `<pre class="language-` + language + `"><code class="language-` + language + `">${highlightedCode}</code></pre>`;
    return highlightedHTML
  }
  const loadExercise = () => {
    if (level[part].exercise) {
      document.querySelector('.box-exercise').classList.remove('disable');
      document.querySelector('.before').innerHTML = hightlightCode(level[part].before, 'css');
      document.querySelector('.after').innerHTML = hightlightCode(level[part].after, 'css');
      document.querySelector('.code').innerHTML = hightlightCode(level[part].code, 'markup');
    } else if (document.querySelector('.html-code-flex')) {
      loadCodeExamples();
    }  else {
      document.querySelector('.box-exercise').classList.add('disable');

    }
  };
  const loadCodeExamples = () => {
    const htmlCode = document.querySelector('.html-code');
    const cssCode = document.querySelector('.css-code');
    const htmlCodeFlex = document.querySelector('.html-code-flex');
    const cssCodeFlex = document.querySelector('.css-code-flex');
    if (cssCodeFlex) {
      htmlCode.innerHTML = hightlightCode(level[part].exampleCodes['html-code'], 'markup');
      cssCode.innerHTML = hightlightCode(level[part].exampleCodes['css-code'], 'css');
      htmlCodeFlex.innerHTML = hightlightCode(level[part].exampleCodes['html-code-flex'], 'markup');
      cssCodeFlex.innerHTML = hightlightCode(level[part].exampleCodes['css-code-flex'], 'css');
    } else {
      htmlCodeFlex.innerHTML = hightlightCode(level[part].exampleCodes['html-code-flex'], 'markup');
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
      lvlHeader.innerHTML = level[part].header;
      prevBtn.classList.add('disable');
    } else {
      prevBtn.classList.remove('disable');
    }

    if (level[part].start === undefined && part === 0) {
      jumpBtn.classList.remove('disable');
    } else {
      jumpBtn.classList.add('disable');
    }

    if (part === level.length - 1) {
      nextBtn.classList.add('disable');
    } else {
      nextBtn.classList.remove('disable');
    }
    if (level[part].example) {
      exampleBox.classList.remove('disable');
    } else {
      exampleBox.classList.add('disable');
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
    event.currentTarget.blur();
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
    event.currentTarget.blur();
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