// Dark Mode Functionality --------------------------- //

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check if dark mode is preferred or previously chosen

const isDarkMode = localStorage.getItem("dark-mode") === "true";

//Set Initial Mode
if (isDarkMode) {
  body.classList.add("dark-mode");
  themeToggle.innerText = "Light Mode";
}

// Toggle Dark mode and update text
themeToggle.addEventListener("click", () => {
  if (body.classList.contains("dark-mode")) {
    body.style.transition = "background-color 0.3s, color 0.3s";
    body.classList.remove("dark-mode");
    themeToggle.innerText = "Dark Mode";
    localStorage.setItem("dark-mode", "false");
  } else {
    body.classList.add("dark-mode");
    themeToggle.innerText = "Light Mode";
    localStorage.setItem("dark-mode", "true");
  }
});
