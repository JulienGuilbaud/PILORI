import feather from 'feather-icons';

feather.replace();

const menuToggler = document.getElementById('menuToggler');
const menu = document.querySelector('.menu');

const searchToggler = document.getElementById('searchToggler');
const search = document.querySelector('.search');

menuToggler.addEventListener('click', () => {
  menu.classList.toggle('menu--on');
  search.classList.remove('search--on');
});

searchToggler.addEventListener('click', () => {
  search.classList.toggle('search--on');
  menu.classList.remove('menu--on');
});

const toTop = document.querySelector('.footer-totop');
toTop.addEventListener('click', () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});

let toTopVisible = false;
window.addEventListener('scroll', () => {
  if (window.scrollY > 0 && !toTopVisible) {
    toTopVisible = true;
    toTop.classList.add('footer-totop--on');
  } 
  else if (window.scrollY === 0 && toTopVisible) {
    toTopVisible = false;
    toTop.classList.remove('footer-totop--on');
  }
});

const viewModeBtns = document.querySelectorAll('.btn--view-mode');
for (const btn of viewModeBtns) {
  btn.addEventListener('click', () => {
    const mode = btn.dataset.mode;
    switchToMode(mode);
  });
}

function switchToMode(mode) {
  const containers = document.querySelectorAll('.card-container');
  for (const container of containers) {
    container.classList.remove('card-container--list', 'card-container--grid');
    container.classList.add(`card-container--${mode}`);
  }
  for (const btn of viewModeBtns) {
    if (btn.dataset.mode === mode) {
      btn.classList.add('btn--hidden');
    }
    else {
      btn.classList.remove('btn--hidden');
    }
  }
}
