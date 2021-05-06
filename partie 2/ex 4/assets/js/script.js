// option 1
let scrollPos=0;
const nav = document.querySelector('#scrollDiv');

window.addEventListener('scroll',visible);
function visible() {
  if (window.scrollY > 200) {
    nav.classList.add('show');
    nav.classList.remove('hide');
  } else {
    nav.classList.remove('show');
    nav.classList.add('hide');
  }
}

// option 2
window.addEventListener ("scroll",() => {
    if (window.scrollY >200) {
      nav.style.visibility = "visible";
    } else {
      nav.style.visibility = "hidden";
    }
}
)
