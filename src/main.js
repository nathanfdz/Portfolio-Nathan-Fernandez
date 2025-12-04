import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css"; // tailwind directives

// Restore theme from localStorage early (before app mount)
const saved = localStorage.getItem("theme");
if (saved === "dark") {
  document.documentElement.classList.add("dark");
} else if (saved === "light") {
  document.documentElement.classList.remove("dark");
} else {
  // optional: follow user OS preference by default
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (prefersDark) document.documentElement.classList.add("dark");
}

createApp(App).use(router).mount("#app");
