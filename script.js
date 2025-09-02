// ====== Navbar Toggle ======
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ====== Smooth Scroll ======
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ====== Dark Mode Toggle ======
const darkModeToggle = document.getElementById("darkModeToggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  darkModeToggle.textContent = "☀️";
}

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    darkModeToggle.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    darkModeToggle.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});

// ====== Scroll Reveal Animations ======
ScrollReveal({
  distance: "50px",
  duration: 1200,
  delay: 200,
  reset: true // animations repeat on scroll
});

// Hero section (from top)
ScrollReveal().reveal(".hero h1, .hero p, .btn", { origin: "top", interval: 200 });

// About section (from left)
ScrollReveal().reveal("#about h2, #about p", { origin: "left", interval: 200 });

// Skills section (from bottom)
ScrollReveal().reveal(".skills-list span", { origin: "bottom", interval: 100 });

// Projects section (zoom in)
ScrollReveal().reveal(".project-card", { scale: 0.9, interval: 200 });

// Contact form (from right)
ScrollReveal().reveal("#contact h2, form", { origin: "right", interval: 200 });

// Footer (fade in)
ScrollReveal().reveal("footer", { opacity: 0, duration: 1000 });
