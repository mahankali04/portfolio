/* =========================================================
   PORTFOLIO JAVASCRIPT - M. VARSHITHA
   Simple, Clean & Beginner-Friendly Script
   ========================================================= */

// Wait until the entire HTML document is loaded
document.addEventListener("DOMContentLoaded", () => {

  /* ---------------------------------------------------------
     1. MOBILE NAVIGATION MENU (HAMBURGER TOGGLE)
     --------------------------------------------------------- */
  const menuToggleBtn = document.getElementById("menu-toggle-btn");
  const navLinks = document.getElementById("nav-links");
  const navItems = document.querySelectorAll(".nav-link");

  if (menuToggleBtn && navLinks) {
    // Toggle mobile menu when hamburger icon is clicked
    menuToggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      
      // Toggle between hamburger icon and close icon
      if (navLinks.classList.contains("active")) {
        menuToggleBtn.innerHTML = "✕";
      } else {
        menuToggleBtn.innerHTML = "☰";
      }
    });

    // Close mobile menu automatically when any nav link is clicked
    navItems.forEach((link) => {
      link.addEventListener("click", () => {
        if (navLinks.classList.contains("active")) {
          navLinks.classList.remove("active");
          menuToggleBtn.innerHTML = "☰";
        }
      });
    });
  }

  /* ---------------------------------------------------------
     2. ACTIVE NAVIGATION LINK ON SCROLL (SCROLL SPY)
     --------------------------------------------------------- */
  const sections = document.querySelectorAll("section[id]");

  function updateActiveNavLink() {
    const scrollPosition = window.pageYOffset;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute("id");
      const currentNavLink = document.querySelector(`.nav-links a[href*="${sectionId}"]`);

      if (currentNavLink) {
        if (scrollPosition > sectionTop && scrollPosition <= sectionTop + sectionHeight) {
          currentNavLink.classList.add("active");
        } else {
          currentNavLink.classList.remove("active");
        }
      }
    });
  }

  window.addEventListener("scroll", updateActiveNavLink);

});
