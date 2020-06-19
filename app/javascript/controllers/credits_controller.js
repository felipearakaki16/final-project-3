import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "modal" ]

  connect() {
  }

  open() {
    this.modalTarget.classList.add("active")
  }
  close() {
    this.modalTarget.classList.remove("active")
  }
}
