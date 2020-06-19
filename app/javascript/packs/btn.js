const btnCodeBox = () => {
  const btnHTML = document.querySelector('.btn-html');
  const btnCSS = document.querySelector('.btn-css');
  const cssCode = document.querySelector('.css-code');
  const htmlCode = document.querySelector('.html-code');

  if (btnHTML) {
    btnHTML.addEventListener('click', (event) => {
      event.preventDefault();
      event.currentTarget.blur();
      btnCSS.classList.add('is-disabled');
      btnHTML.classList.remove('is-disabled');
      htmlCode.classList.remove('disable');
      cssCode.classList.add('disable');
    });
  }

  if (btnCSS) {
    btnCSS.addEventListener('click', (event) => {
      event.preventDefault();
      event.currentTarget.blur();
      btnHTML.classList.add('is-disabled');
      btnCSS.classList.remove('is-disabled');
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
      btnCSSFlex.classList.add('is-disabled');
      btnHTMLFlex.classList.remove('is-disabled');
      htmlCodeFlex.classList.remove('disable');
      cssCodeFlex.classList.add('disable');
    });
  }

  if (btnCSSFlex) {
    btnCSSFlex.addEventListener('click', (event) => {
      event.preventDefault();
      event.currentTarget.blur();
      btnHTMLFlex.classList.add('is-disabled');
      btnCSSFlex.classList.remove('is-disabled');
      cssCodeFlex.classList.remove('disable');
      htmlCodeFlex.classList.add('disable');
    })
  };
}
export { btnCodeBox };