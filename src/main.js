import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";

// Mode clair par défaut
const saved = localStorage.getItem("theme");

if (saved === "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark"); // MODE CLAIR PAR DÉFAUT
}

createApp(App).use(router).mount("#app");
