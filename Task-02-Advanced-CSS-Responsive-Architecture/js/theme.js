const toggle = document.querySelector(".theme-toggle");

function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
    toggle?.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
}

const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme) {
    setTheme(savedTheme);
}

toggle?.addEventListener("click", () => {
    const current = document.documentElement.dataset.theme || "light";
    setTheme(current === "dark" ? "light" : "dark");
});
