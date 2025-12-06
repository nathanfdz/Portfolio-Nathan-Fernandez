// --- DARK THEME INIT (avant tout import !) ---
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.documentElement.classList.add("dark");
} else if (savedTheme === "light") {
  document.documentElement.classList.remove("dark");
} else {
  // Jamais choisi → suivre les préférences du système
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (prefersDark) {
    document.documentElement.classList.add("dark");
  }
}

// --- Imports ---
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css"; // Tailwind

createApp(App).use(router).mount("#app");
