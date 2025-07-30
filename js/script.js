a/* ============================== typing animation ============================ */


var typed = new Typed('.typing', {
  strings: [
    '',
    '&nbsp;iT Specialist &nbsp; | &nbsp; Networks and Systems',
    ' ',
    ' ',
    '&nbsp;iT Specialist &nbsp; | &nbsp; Networks and Systems',
    '',
  ],
  typeSpeed: 150,
  BackSpeed: 1000,
  loop: true,
});


/* ============================== Aside ============================ */
const nav = document.querySelector('.nav'),
  navList = nav.querySelectorAll('li'),
  totalNavList = navList.length,
  allSection = document.querySelectorAll('.section'),
  totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector('a');

  a.addEventListener('click', function () {
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector('a').classList.contains('active')) {
        addBackSection(j);
      }
      navList[j].querySelector('a').classList.remove('active');
    }
    this.classList.add('active');
    showSection(this);

    // Save section to URL hash
    const target = this.getAttribute('href').split('#')[1];
    window.location.hash = target;

    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove('back-section');
  }
}

function addBackSection(num) {
  allSection[num].classList.add('back-section');
}

function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove('active');
  }
  const target = element.getAttribute('href').split('#')[1];
  document.querySelector('#' + target).classList.add('active');
}

function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector('a').classList.remove('active');
    const target = element.getAttribute('href').split('#')[1];
    if (
      target ===
      navList[i].querySelector('a').getAttribute('href').split('#')[1]
    ) {
      navList[i].querySelector('a').classList.add('active');
    }
  }
}

document.querySelector('.hire-me').addEventListener('click', function () {
  const sectionIndex = this.getAttribute('data-section-index');
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
  const target = this.getAttribute('href').split('#')[1];
  window.location.hash = target;
});

const navTogglerBtn = document.querySelector('.nav-toggler'),
  aside = document.querySelector('.aside');
navTogglerBtn.addEventListener('click', () => {
  asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
  aside.classList.toggle('open');
  navTogglerBtn.classList.toggle('open');
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle('open');
  }
}

/* ============================== Load section from hash ============================ */
window.addEventListener('load', () => {
  const hash = window.location.hash;
  if (hash) {
    const targetSection = document.querySelector(hash);
    if (targetSection) {
      // Remove all active classes
      for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove('active');
        navList[i].querySelector('a').classList.remove('active');
      }

      // Activate section and nav item
      targetSection.classList.add('active');
      for (let i = 0; i < totalNavList; i++) {
        const href = navList[i].querySelector('a').getAttribute('href');
        if (href === hash) {
          navList[i].querySelector('a').classList.add('active');
        }
      }
    }
  }
});














