const primaryNav = document.querySelector(".primary-nav");
const navButton = document.querySelector(".mobile-nav-toggle");

navButton.addEventListener("click", () => {
  if (primaryNav.dataset.visible === "false") {
    primaryNav.setAttribute("data-visible", "true");
    navButton.setAttribute("data-expanded", "true");
    document.querySelector("body").classList.add("covering");
  } else {
    primaryNav.setAttribute("data-visible", "false");
    navButton.setAttribute("data-expanded", "false");
    document.querySelector("body").classList.remove("covering");
  }
});
