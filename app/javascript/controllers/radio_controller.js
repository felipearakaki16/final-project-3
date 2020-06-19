import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "parent", "children" ]


  parent() {
    this.parentTarget.classList.add('d-flex');
    this.childrenTarget.classList.remove('d-flex')
  }
  children() {
    this.childrenTarget.classList.add('d-flex')
    this.parentTarget.classList.remove('d-flex');
  }
  both() {
    this.parentTarget.classList.add('d-flex');
    this.childrenTarget.classList.add('d-flex')
  }
  none() {
    this.parentTarget.classList.remove('d-flex');
    this.childrenTarget.classList.remove('d-flex')
  }
}
