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

//Button back to top
const backToTopButton = document.getElementById("back-to-top-btn");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 200) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

//Button SignIn
const buttonSignIn = document.getElementById("signin");

buttonSignIn.addEventListener("click", () => {
  alert("directed to sign in page");
});

//Email
const email = document.getElementById("email");
const submitButton = document.getElementById("emailSubmit");

submitButton.addEventListener("click", () => {
  if (email.value.length > 0) {
    alert(`Terimakasih ${email.value} sudah input email kamu`);
  } else {
    alert("Silahkan masukkan email anda");
  }
});
