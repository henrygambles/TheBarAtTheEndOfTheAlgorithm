// Smooth scroll for buttons & nav links that have data-scroll-target
document.querySelectorAll("[data-scroll-target]").forEach((el) => {
  el.addEventListener("click", () => {
    const target = el.getAttribute("data-scroll-target");
    const node = document.querySelector(target);
    if (!node) return;

    window.scrollTo({
      top: node.offsetTop - 72,
      behavior: "smooth",
    });
  });
});

// Smooth scroll for header nav anchors
document.querySelectorAll(".nav a[href^='#']").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    const target = document.querySelector(href);
    if (!target) return;

    window.scrollTo({
      top: target.offsetTop - 72,
      behavior: "smooth",
    });
  });
});

// Typewriter-style reveal for hero tagline (subtle, not full typewriter)
const tagline = document.getElementById("hero-tagline");
if (tagline) {
  const fullText = tagline.textContent.trim();
  tagline.textContent = "";
  let i = 0;

  const reveal = () => {
    if (i <= fullText.length) {
      tagline.textContent = fullText.slice(0, i);
      i++;
      window.requestAnimationFrame(reveal);
    }
  };

  // Delay slightly so it feels intentional
  setTimeout(() => {
    window.requestAnimationFrame(reveal);
  }, 400);
}

// Dynamic year in footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
