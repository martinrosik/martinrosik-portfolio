document.documentElement.classList.add("js");
document.getElementById("year").textContent = new Date().getFullYear();
const credit = document.querySelector(".credit");
const info = credit.querySelector(".info");
const tip = credit.querySelector(".tip");
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
const setNote = (open) => {
  credit.classList.toggle("open", open);
  info.setAttribute("aria-expanded", open);
  if (open)
    tip.scrollIntoView({
      block: "nearest",
      behavior: reducedMotion.matches ? "auto" : "smooth",
    });
};
info.addEventListener("click", () =>
  setNote(!credit.classList.contains("open")),
);
// pointerdown, since iOS Safari doesn't fire click on non-interactive elements
document.addEventListener("pointerdown", (e) => {
  if (!tip.contains(e.target) && !info.contains(e.target)) setNote(false);
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setNote(false);
});
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
