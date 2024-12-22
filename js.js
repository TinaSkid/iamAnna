/*if (window.matchMedia("(max-width: 500px)").matches) {
  setTimeout(() => {
    const text = document.getElementById('nazov');
      text.style.fontSize = '8rem';
  }, 5000);

  setTimeout(() => {
    const skrasli = document.getElementById('skrasli');
      skrasli.style.background = '#02002e';
  }, 6000);
} else {
  setTimeout(() => {
    const text = document.getElementById('nazov');
      text.style.fontSize = '6rem';
  }, 5000);
}*/
setTimeout(() => {
    const skrasli = document.getElementById('skrasli');
      skrasli.style.background = '#02002e';
  }, 6000);

function zmenaCSS(x) {
  if (x.matches) {
    setTimeout(() => {
      const text = document.getElementById('nazov');
        text.style.fontSize = '7rem';
    }, 5000);
  } else {
    setTimeout(() => {
      const text = document.getElementById('nazov');
        text.style.fontSize = '8rem';
    }, 5000);
  
    setTimeout(() => {
      document.getElementsByTagName('body')[0].style = 'overflow-y: auto;';
    }, 6000);
  }
}
var x = window.matchMedia("(max-width: 500px)")
zmenaCSS(x);
x.addEventListener("change", function() {
  zmenaCSS(x);
});
