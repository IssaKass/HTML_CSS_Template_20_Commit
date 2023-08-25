// Theme

const themeKey = "commit-page-theme";
const themeFromLocalStorage = localStorage.getItem(themeKey);

if (themeFromLocalStorage) {
  document.body.setAttribute("theme", themeFromLocalStorage);
}

function toggleTheme() {
  const currentTheme = document.body.getAttribute("theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";

  document.body.setAttribute("theme", newTheme);
  localStorage.setItem(themeKey, newTheme);
}

const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", toggleTheme);
