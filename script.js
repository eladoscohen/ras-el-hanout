
function playShowreel() {
    alert("Play showreel clicked - replace with modal or video popup logic");
  }
  
  function bookShow() {
    window.location.href = "mailto:booking@raselhanout.com";
  }
  
  // Fade-up on scroll
  const faders = document.querySelectorAll('.fade-up');

  function revealOnScroll() {
    faders.forEach(el => {
      const rect = el.getBoundingClientRect();
      const triggerPoint = window.innerHeight * 0.8;
      if (rect.top < triggerPoint) {
        el.classList.add('in-view');
  
        // Lazy-load Spotify iframe when in view
        if (el.classList.contains('spotify-facade') && el.dataset.loaded !== 'true') {
          el.innerHTML = `
            <iframe
              src="https://open.spotify.com/embed/artist/1PkpTahGsmKBs4RadyK0EB?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameborder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          `;
          el.dataset.loaded = 'true';
        }
      }
    });
  }
  
  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);
  
  /* Menu */

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
  
  /* New Release Timer */

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
  
  /* Newsletter Form */
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
  
  /* Parllex main banner */
  window.addEventListener('load', () => {
    const video = document.querySelector('.parallax-video video');
    if (video) {
      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        video.style.transform = `translateY(${scrollY * 0.3}px)`;
      });
    }
  });
  
  /* close menu on link click */
  document.querySelectorAll('#menuDrawer a[href^="#"]').forEach(link => {
    link.addEventListener('click', toggleMenu);
  });

  window.addEventListener('load', () => {
    const container = document.getElementById('hero-video');
    if (container) {
      container.innerHTML = `
        <video autoplay muted loop playsinline preload="none" style="width:100%; height:100%; object-fit:cover;">
          <source src="video/Ras Showreel.mp4" type="video/mp4">
        </video>
      `;
    }
  
    // Attach parallax scroll after video is injected
    window.addEventListener('scroll', () => {
      const video = document.querySelector('#hero-video video');
      if (video) {
        const scrollY = window.scrollY;
        video.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    });
  });
  


  document.addEventListener("DOMContentLoaded", function () {
    const lazySpotifyEmbeds = document.querySelectorAll(".spotify-embed");

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const src = el.dataset.src;
          const height = el.dataset.height || "352";

          if (!el.querySelector("iframe")) {
            const iframe = document.createElement("iframe");
            iframe.src = src;
            iframe.width = "100%";
            iframe.height = height;
            iframe.frameBorder = "0";
            iframe.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
            iframe.loading = "lazy";
            iframe.style.borderRadius = "12px";

            el.appendChild(iframe);
          }

          observer.unobserve(el); // prevent reloading
        }
      });
    });

    lazySpotifyEmbeds.forEach(el => observer.observe(el));
  });