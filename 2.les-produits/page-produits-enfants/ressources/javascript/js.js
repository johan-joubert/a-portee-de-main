let nav = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if(window.scrollY > 50) {
    nav.classList.add('scroll');
  }
  else {
    nav.classList.remove('scroll');
  }
})




let title = document.querySelector('#title-taille');
let categorie = document.querySelector('.liste-categorie');

title.addEventListener("click", () => {
  if (getComputedStyle(categorie).display != "none"){
    categorie.style.display = "none";
  } else {
    categorie.style.display = "block";
  }
});

let title2 = document.querySelector('#title-couleur');
let categorie2 = document.querySelector('.liste-categorie2');

title2.addEventListener("click", () => {
  if (getComputedStyle(categorie2).display != "none"){
    categorie2.style.display = "none";
  } else {
    categorie2.style.display = "block";
  }
})