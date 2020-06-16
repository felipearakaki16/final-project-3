// Visit The Stimulus Handbook for more details 
// https://stimulusjs.org/handbook/introduction
// 
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "frame", "input", "modal" ]

  connect() {
    const exampleContent = this.frameTarget.dataset.example;
    this.frameTarget.onload = (event) => {
      event.currentTarget.contentDocument.getElementById('page-container-example').innerHTML = exampleContent;
    };
  };

  style(event) {
    const exampleTarget = this.frameTarget.dataset.tgt;
    let answer = event.currentTarget.value;
    eval("this.frameTarget.contentDocument." + exampleTarget).style = answer;
  }

  validation(event) {
    event.preventDefault()
    let answer = this.inputTarget.value;
    let checkAnswer = "" + answer;
    const correct = [];
    const correction = JSON.parse(this.inputTarget.dataset.answer);
    correction.forEach( (correctAnswer) => {
        let answerRegex = new RegExp(correctAnswer)
        if (answer.match(answerRegex) !== null) {
          checkAnswer = checkAnswer.replace(answerRegex, "");
          correct.push(true);
        } else {
          correct.push(false);
        }
      })
    checkAnswer = checkAnswer.replace(/\s*/, "");
    if (correct.every(elem => elem === true) && checkAnswer == "") {
      this.modalTarget.classList.add('active');
    } else {
      document.querySelector('.box-codes').classList.add('shake');
      setTimeout(() => {
        document.querySelector('.box-codes').classList.remove('shake');
      }, 800);
    } 
  }

  close() {
    this.modalTarget.classList.remove('active');
  }
}