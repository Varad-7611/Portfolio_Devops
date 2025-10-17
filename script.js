// Typing Animation
var typed = new Typed(".typing", {
  strings: ["Data Scientist", "Developer", "Innovator", "AI Enthusiast"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true
});

// Smooth reveal on scroll
const sections = document.querySelectorAll('.section');
window.addEventListener('scroll', reveal);

function reveal() {
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 150) {
      sec.classList.add('active');
    }
  });
}

// EmailJS Contact Form (replace YOUR_IDs with real IDs)
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Message sent! (You can connect this to EmailJS for real emails)');
});
