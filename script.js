function playShowreel() {
    alert("Play showreel clicked - replace with modal or video popup logic");
  }
  
  function bookShow() {
    window.location.href = "mailto:booking@raselhanout.com";
  }
  
  // Fade-up on scroll
const faders = document.querySelectorAll('.fade-up');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 2;
  faders.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add('in-view');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

function toggleMenu() {
    const drawer = document.getElementById('menuDrawer');
    const burger = document.getElementById('hamburger');
  
    if (drawer && burger) {
        console.log("open init");
      drawer.classList.toggle('open');
      burger.classList.toggle('open');
    }
  }
  
  window.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('hamburger');
    if (burger) {
      burger.addEventListener('click', toggleMenu);
    }
  });

  window.addEventListener('scroll', () => {
    const header = document.querySelector('.site-header');
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    new Masonry('.masonry-grid', {
      itemSelector: '.grid-item',
      gutter: 0,
      percentPosition: true
    });
  });