let nav = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if(window.scrollY > 50) {
    nav.classList.add('scroll');
  }
  else {
    nav.classList.remove('scroll');
  }
})


