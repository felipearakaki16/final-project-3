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
  static targets = [ "frame" ]

  connect() {
    const exampleContent = this.frameTarget.dataset.example;
    this.frameTarget.contentDocument.addEventListener("DOMContentLoaded", (event) => {
      console.log(this.frameTarget.contentDocument.readyState)
      event.currentTarget.getElementById('page-container-example').innerHTML = exampleContent;
    });
  };

  validation(event) {
    const exampleTarget = this.frameTarget.dataset.tgt;
    let answer = event.currentTarget.value;
    let checkAnswer = "" + answer;
    const correct = [];
    eval("this.frameTarget.contentDocument." + exampleTarget).style = answer;
    const correction = JSON.parse(event.currentTarget.dataset.answer);

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
      document.querySelector('body').style.backgroundColor = "green"
    } else {
      document.querySelector('body').style.backgroundColor = "black"
    }
  }
}