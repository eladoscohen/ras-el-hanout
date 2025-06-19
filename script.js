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
  

  function startCountdown(releaseDateStr) {
    const countdownEl = document.getElementById('countdown');
    const releaseDate = new Date(releaseDateStr).getTime();
  
    function updateTimer() {
      const now = new Date().getTime();
      const distance = releaseDate - now;
  
      if (distance <= 0) {
        countdownEl.innerHTML = "<p>OUT NOW!</p>";
        return;
      }
  
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      document.getElementById('days').textContent = String(days).padStart(2, '0');
      document.getElementById('hours').textContent = String(hours).padStart(2, '0');
      document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
      document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }
  
    updateTimer();
    setInterval(updateTimer, 1000);
  }
  
  window.addEventListener('DOMContentLoaded', function () {
    startCountdown("2025-07-20T00:00:00"); // Set your actual release date/time
  });
  
  document.getElementById('newsletter-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const form = e.target;
    const status = document.getElementById('form-status');
    const data = new FormData(form);
  
    fetch('https://script.google.com/macros/s/AKfycbwJ4-5fUA9DdithzywYzLLVpCtfPz4sJijU3p4vzL4ozhgo5ZASqhnfYygOtwTy658y/exec', {
      method: 'POST',
      body: data,
    })
    .then(response => response.text())
    .then(text => {
      status.textContent = "Thanks for subscribing!";
      status.style.display = "block";

      form.reset();
    })
    .catch(err => {
      console.error('Error:', err);
      status.textContent = "Something went wrong. Please try again later.";
    });
  });
  