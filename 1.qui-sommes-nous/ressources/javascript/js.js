let nav = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if(window.scrollY > 1) {
    nav.classList.add('scroll');
  }
  else {
    nav.classList.remove('scroll');
  }
})


