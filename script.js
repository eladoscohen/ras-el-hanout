function playShowreel() {
  if (document.querySelector('.showreel')) return; // avoid duplicates

  const overlay = document.createElement('div');
  overlay.className = 'showreel';

  overlay.innerHTML = `
    <div class="overlay-inner">
      <button class="close-btn" aria-label="Close video">✕</button>
      <iframe
        src="https://player.vimeo.com/video/1095221400?autoplay=1&title=0&byline=0&portrait=0"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
        loading="lazy"
        style="position:absolute;top:0;left:0;width:100%;height:100%;"
      ></iframe>
    </div>
  `;

  document.body.appendChild(overlay);

  overlay.querySelector('.close-btn').addEventListener('click', () => {
    document.body.removeChild(overlay);
  });
}

  
  
  // Fade-up on scroll
  document.addEventListener("DOMContentLoaded", () => {
    const faders = document.querySelectorAll(".fade-up");
  
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
  
            // Lazy-load only when needed
            if (
              entry.target.classList.contains("spotify-facade") &&
              entry.target.dataset.loaded !== "true"
            ) {
              entry.target.innerHTML = `
                <iframe
                  src="https://open.spotify.com/embed/artist/1PkpTahGsmKBs4RadyK0EB?utm_source=generator&theme=0"
                  width="100%"
                  height="352"
                  frameborder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              `;
              entry.target.dataset.loaded = "true";
            }
  
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
      }
    );
  
    faders.forEach(el => observer.observe(el));
  });
  
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

  function startCountdown() {
    const countdownEl = document.getElementById('countdown');
    const releaseTag = document.querySelector('.release-date[data-release]');
    if (!countdownEl || !releaseTag) return;
  
    const releaseDateStr = releaseTag.dataset.release;
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
  
  document.addEventListener('DOMContentLoaded', startCountdown);

  /* Newsletter Form */
document.getElementById('newsletter-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const form = e.target;
  const status = document.getElementById('form-status');

  grecaptcha.ready(() => {
    grecaptcha.execute('YOUR_SITE_KEY', { action: 'submit' }).then(token => {
      const data = new FormData(form);
      data.append('g-recaptcha-response', token);

      fetch('https://script.google.com/macros/s/AKfycbzh0kSP9FTG9Ymfh5tXtFgVsMW0NXKNNX_p-s-dAweRxaY13pjPyef4-ADEaXhu1UlG/exec', {
        method: 'POST',
        body: data,
      })
        .then(res => res.text())
        .then(text => {
          status.textContent = "Thanks for subscribing!";
          status.style.display = "block";
          form.reset();
        })
        .catch(err => {
          console.error(err);
          status.textContent = "Something went wrong. Please try again later.";
        });
    });
  });
});


  
  /* Parllex main banner */
  // window.addEventListener('load', () => {
  //   const video = document.querySelector('.parallax-video video');
  //   if (video) {
  //     window.addEventListener('scroll', () => {
  //       const scrollY = window.scrollY;
  //       video.style.transform = `translateY(${scrollY * 0.3}px)`;
  //     });
  //   }
  // });
  
  /* close menu on link click */
  document.querySelectorAll('#menuDrawer a[href^="#"]').forEach(link => {
    link.addEventListener('click', toggleMenu);
  });

  window.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector('#hero-video video');
    window.addEventListener('scroll', () => {
      if (video) {
        const scrollY = window.scrollY;
        video.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    }, { passive: true });
  });


  document.addEventListener("DOMContentLoaded", function () {
    const targets = document.querySelectorAll(".spotify-embed");
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.loaded) {
          const el = entry.target;
          const iframe = document.createElement("iframe");
          iframe.src = el.dataset.src;
          iframe.width = "100%";
          iframe.height = el.dataset.height || "352";
          iframe.frameBorder = "0";
          iframe.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
          iframe.loading = "lazy";
          iframe.style.borderRadius = "12px";
  
          el.appendChild(iframe);
          el.dataset.loaded = "true";
          observer.unobserve(el);
        }
      });
    }, {
      rootMargin: "200px 0px", // preload before entering view
      threshold: 0
    });
  
    targets.forEach(el => observer.observe(el));
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    const facades = document.querySelectorAll(".youtube-facade");

    facades.forEach(facade => {
      facade.addEventListener("click", function () {
        const videoId = this.dataset.id;

        const iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
        iframe.width = "100%";
        iframe.height = "100%";
        iframe.frameBorder = "0";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        iframe.allowFullscreen = true;
        iframe.loading = "lazy";
        iframe.style.position = "absolute";
        iframe.style.top = "0";
        iframe.style.left = "0";
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.borderRadius = "10px";

        const container = this.parentElement;
        container.innerHTML = "";
        container.appendChild(iframe);
      });
    });
  });

  /* Smooth Scroll */
  document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offset = -80; // adjust for your fixed header height

        const top = target.getBoundingClientRect().top + window.scrollY + offset;

        window.scrollTo({
          top,
          behavior: 'smooth'
        });
      }
    });
  });
});
