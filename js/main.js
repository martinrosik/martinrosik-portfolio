// Always open at the top: restoring the scroll position on reload lands 16px down,
// because it races the entrance animation's translateY(16px)
history.scrollRestoration = "manual";
document.documentElement.classList.add("js");
document.getElementById("year").textContent = new Date().getFullYear();
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.8 },
);
document
  .querySelectorAll(".annotate")
  .forEach((item) => observer.observe(item));
