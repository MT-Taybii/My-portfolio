const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navToggle && window.innerWidth <= 860) {
      navToggle.checked = false;
    }
  });
});
