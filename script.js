function playShowreel() {
    alert("Play showreel clicked - replace with modal or video popup logic");
  }
  
  function bookShow() {
    window.location.href = "mailto:booking@raselhanout.com";
  }
  
  // Fade-up on scroll
const faders = document.querySelectorAll('.fade-up');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.9;
  faders.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add('in-view');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
