//Icons
const moonIcon = document.querySelector(".moon");
const sunIcon = document.querySelector(".sun");

//Theme Vars
// const userTheme = localStorage.getItem("theme");

//Icon Toggling
const iconToggle = () => {
  moonIcon.classList.toggle("display-none");
  sunIcon.classList.toggle("display-none");
};

//Manual Theme Check
const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    // localStorage.setItem("theme", "light");
    iconToggle();
    return;
  }
  document.documentElement.classList.add("dark");
  //   localStorage.setItem("theme", "dark");
  iconToggle();
};

sunIcon.addEventListener("click", () => {
  themeSwitch();
});

moonIcon.addEventListener("click", () => {
  themeSwitch();
});
