const { levelOne } = require('./parts_level');
let boxElement = document.getElementById('typewriter');
let sampleString = levelOne[0].text;
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

const lvlHeader = document.getElementById('level-header');
const nextBtn = document.getElementById('next-btn');

nextBtn.addEventListener('click', (event) => {
  event.preventDefault();
  lvlHeader.insertAdjacentHTML('beforeend', "<h3>How it works</h3>")
  boxElement.innerHTML = "";
  sampleString = "All you have to do it's write the right commands that we are gonna ask you. In this module we are learning flexbox, if you try to use another commands will not pass that stage. Even if the position of the element is correct.";
  stringArray = sampleString.split('');
  // if (next === 2) {
  //   lvlHeader.innerHTML = "<h1>Level 1</h1><h3>First of all</h3>";
  //   boxElement.innerHTML = "";
  //   sampleString = "Primeiro de tudo, o porquê do flexbox ser tão utilizado! \nDentro da propriedade display do CSS existem alguns valores que já influenciam na posição dos elementos, que é o Block ( pré-selecionado ao criar uma div), Inline (pré-selecionado em img, a, strong tags, dentre outros), dentre outros."
  // }
});

export { typing };