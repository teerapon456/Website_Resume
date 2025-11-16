document.addEventListener('DOMContentLoaded', function () {

  const navLinks = document.querySelectorAll('.nav-link');
  const pages = document.querySelectorAll('.page');

  // Function to show a page and hide others
  function showPage(pageId) {
    pages.forEach(page => {
      if (page.id === pageId) {
        page.classList.add('active');
      } else {
        page.classList.remove('active');
      }
    });
  }

  // Add click event listeners to nav links
  navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent default anchor behavior

      // Get target page ID from href (e.g., '#about' -> 'about')
      const targetId = this.getAttribute('href').substring(1);

      // Show the target page
      showPage(targetId);

      // Update active state for navigation links
      navLinks.forEach(nav => nav.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Special case for the "View My Work" button on the home page
  const ctaButton = document.querySelector('.cta-button');
  if (ctaButton) {
    ctaButton.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      showPage(targetId);

      // Also update the nav link to be active
      navLinks.forEach(nav => {
        if (nav.getAttribute('href') === `#${targetId}`) {
          nav.classList.add('active');
        } else {
          nav.classList.remove('active');
        }
      });
    });
  }

  // Ensure the home page is shown by default on load
  showPage('home');

});