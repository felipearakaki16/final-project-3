const modal = document.getElementById("modal-menu");
const span = document.querySelector(".close");
const btnMenu = document.getElementById('menu')

const modalMenu = () => {
  btnMenu.addEventListener('click', (event) => {
    event.preventDefault();
    modal.classList.add("active");
  });
  document.addEventListener('keyup', (event) => {
    event.preventDefault()
    if (event.keyCode === 27) {
      modal.classList.toggle('active');
    }
  });
  span.addEventListener('click', (event) => {
    event.preventDefault()
    modal.classList.remove("active");
  });
  window.addEventListener('click', (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  })
};

export { modalMenu };