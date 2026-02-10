document.addEventListener("DOMContentLoaded", () => {
  // Testimonials
  const cards = document.querySelector(".testi-cards");
  const testimonials = cards.children;
  const profiles = document.querySelectorAll(".profile-card");
  const prev = document.querySelector(".prev-btn");
  const next = document.querySelector(".next-btn");

  let index = 0;

  function displayTestimonial(i) {
    index = i;
    cards.style.transform = `translateX(-${i * 100}%)`;

    profiles.forEach((p) => p.classList.remove("active-profile"));
    profiles[i].classList.add("active-profile");
  }

  next.addEventListener("click", () => {
    index = (index + 1) % testimonials.length;
    displayTestimonial(index);
  });

  prev.addEventListener("click", () => {
    index = (index - 1 + testimonials.length) % testimonials.length;
    displayTestimonial(index);
  });

  profiles.forEach((profile, i) => {
    profile.addEventListener("click", () => {
      displayTestimonial(i);
    });
  });

  displayTestimonial(0);

  // Fade-up Animation
  const items = document.querySelectorAll(".fade-up");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  items.forEach((el) => observer.observe(el));
});

// Back to top Button
window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

// Loader
window.addEventListener("load", () => {
  document.getElementById("loader").style.opacity = "0";
  setTimeout(() => (loader.style.display = "none"), 300);
});

// Mobile Menu
const ham = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

ham.addEventListener("click", function () {
  if (menu.style.right === "0px" || menu.style.right === "0") {
    menu.style.right = "-70vw";
  } else {
    menu.style.right = "0";
  }
});
