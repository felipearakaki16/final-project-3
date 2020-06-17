const btnCodeBox = () => {
  const btnHTML = document.querySelector('.btn-html');
  const btnCSS = document.querySelector('.btn-css');
  const cssCode = document.querySelector('.css-code');
  const htmlCode = document.querySelector('.html-code');

  if (btnHTML) {
    btnHTML.addEventListener('click', (event) => {
      event.preventDefault();
      event.currentTarget.blur();
      event.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
      btnCSS.style.backgroundColor = "#3d6f82";
      htmlCode.classList.remove('disable');
      cssCode.classList.add('disable');
    });
  }

  if (btnCSS) {
    btnCSS.addEventListener('click', (event) => {
      event.preventDefault();
      event.currentTarget.blur();
      event.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
      btnHTML.style.backgroundColor = "#3d6f82";
      cssCode.classList.remove('disable');
      htmlCode.classList.add('disable');
    })
  }
  
  const btnHTMLFlex = document.querySelector('.btn-html-flex');
  const btnCSSFlex = document.querySelector('.btn-css-flex');
  const cssCodeFlex = document.querySelector('.css-code-flex');
  const htmlCodeFlex = document.querySelector('.html-code-flex');
  
  if (btnHTMLFlex) {
    btnHTMLFlex.addEventListener('click', (event) => {
      event.preventDefault();
      event.currentTarget.blur();
      event.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
      btnCSSFlex.style.backgroundColor = "#3d6f82";
      htmlCodeFlex.classList.remove('disable');
      cssCodeFlex.classList.add('disable');
    });
  }

  if (btnCSSFlex) {
    btnCSSFlex.addEventListener('click', (event) => {
      event.preventDefault();
      event.currentTarget.blur();
      event.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
      btnHTMLFlex.style.backgroundColor = "#3d6f82";
      cssCodeFlex.classList.remove('disable');
      htmlCodeFlex.classList.add('disable');
    })
  };
}
export { btnCodeBox };