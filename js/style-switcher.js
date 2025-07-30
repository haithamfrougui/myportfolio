/* ========================== toggle style switcher =========================== */
const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');

styleSwitcherToggle.addEventListener('click', () => {
  document.querySelector('.style-switcher').classList.toggle('open');
});

// hide style - switcher on scroll
window.addEventListener('scroll', () => {
  if (document.querySelector('.style-switcher').classList.contains('open')) {
    document.querySelector('.style-switcher').classList.remove('open');
  }
});

/* ========================== theme colors =========================== */
const alternateStyles = document.querySelectorAll('.alternate-style');

function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute('title')) {
      style.removeAttribute('disabled');
    } else {
      style.setAttribute('disabled', 'true');
    }
  });
}

/* ========================== theme light and dark mode =========================== */
const dayNight = document.querySelector('.day-night');

// 🔧 Set dark mode by default
document.body.classList.add('dark');
dayNight.querySelector('i').classList.add('fa-sun');

dayNight.addEventListener('click', () => {
  const icon = dayNight.querySelector('i');
  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
  document.body.classList.toggle('dark');
});

// Optional: update icon on load (in case of saved preference)
window.addEventListener('load', () => {
  const icon = dayNight.querySelector('i');
  if (document.body.classList.contains('dark')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
});



