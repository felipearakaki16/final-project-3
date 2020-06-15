import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "modal" ]

  connect() {
    document.addEventListener('keyup', (event) => {
      event.preventDefault()
      if (event.keyCode === 27) {
        this.modalTarget.classList.toggle('active');
      }
    });
  }

  open() {
    this.modalTarget.classList.add("active")
  }
  close() {
    this.modalTarget.classList.remove("active")
  }
}
