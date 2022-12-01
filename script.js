const burgerMenu = document.getElementById("burger");
const openMenu = document.getElementsByClassName("menu--open")[0];
const closeMenu = document.getElementById("close");
burgerMenu.addEventListener("click", () => {
  openMenu.classList.add("open");
  burgerMenu.classList.add("hidden");
  closeMenu.classList.remove("hidden");
});
closeMenu.addEventListener("click", () => {
  openMenu.classList.remove("open");
  closeMenu.classList.add("hidden");
  burgerMenu.classList.remove("hidden");
});
