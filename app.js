let nav = document.getElementById("nav");
let body = document.querySelector("body");
let m = document.querySelector(".m-icon");
m.addEventListener('click', () => {
  nav.classList.toggle('showme');
  m.classList.toggle("b");
  body.classList.toggle("disable-scroll");
});
let am = document.querySelectorAll('.am');

am.forEach(a => {
  a.addEventListener('click', () => {
    nav.classList.toggle('showme');
    m.classList.toggle("b");
    body.classList.toggle("disable-scroll");
  });
});