const correction = [/display: *flex;/, /justify-content: *space-around;/];
const formAnswer = document.getElementById('box-answer');

formAnswer.addEventListener('submit', (event) => {
  event.preventDefault();
  const answer = event.currentTarget.querySelector('#answer').value;
  let checkAnswer = "" + answer;
  const correct = [];
  const change = document.getElementById('frame-question').contentDocument.querySelector('.cards');
  change.style = answer;
  correction.forEach((correctAnswer) => {
    if (answer.match(correctAnswer) !== null) {
      checkAnswer = checkAnswer.replace(correctAnswer, "");
      correct.push(true);
    } else {
      correct.push(false);
    }
  })
  checkAnswer = checkAnswer.replace(/\s*/, "");
  if (checkingAllTrue(correct) && checkAnswer == "") {
    document.querySelector('body').style.backgroundColor = "green"
  } else {
    document.querySelector('body').style.backgroundColor = "white"
  }
})
