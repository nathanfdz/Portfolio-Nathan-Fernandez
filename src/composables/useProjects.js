import { ref } from "vue";

const STORAGE_KEY = "portfolio_projects_v1";

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

const defaultProjects = [
  {
    id: 1,
    title: "Portfolio EFREI",
    type: "Projet école",
    short: "Portfolio complet en HTML/CSS/JS.",
    description: "Portfolio complet en HTML/CSS/JS avec animations et SPA.",
    image: "/images/project1.jpg",
    stack: ["HTML", "CSS", "JS"]
  },
{
  id: 2,
  title: "ShopShop API",
  type: "Projet école",
  short: "API REST pour gérer produits et commandes.",
  description: "API REST en Node.js pour gérer des commandes et des produits avec MongoDB.",
  image: "/images/project2.jpg",
  stack: ["Node.js", "Express", "MongoDB"]
},
{
  id: 3,
  title: "Todo App Vue.js",
  type: "Projet perso",
  short: "Application de gestion de tâches en Vue.js.",
  description: "Application de gestion de tâches avec composants Vue réutilisables, filtres et stockage local.",
  image: "/images/project3.jpg",
  stack: ["Vue.js", "Vite", "Tailwind"]
},
{
  id: 4,
  title: "Dashboard Data",
  type: "Projet perso",
  short: "Dashboard interactif pour visualiser des données.",
  description: "Dashboard d’analyse de données avec graphiques interactifs et intégration API.",
  image: "/images/project4.jpg",
  stack: ["React", "Chart.js", "API REST"]
},
{
  id: 5,
  title: "Site Recettes",
  type: "site vitrine",
  short: "Site web pour consulter et gérer des recettes.",
  description: "Application web avec recherche, filtres, gestion des favoris et interface responsive.",
  image: "/images/project5.jpg",
  stack: ["HTML", "CSS", "JavaScript"]
},
{
  id: 6,
  title: "E-commerce Minimal",
  type: "Projet pro",
  short: "Mini site d’e-commerce avec panier.",
  description: "Mini site d’e-commerce avec affichage des produits, panier et paiement fictif.",
  image: "/images/project6.jpg",
  stack: ["Next.js", "Tailwind", "Firebase"]
}

];

const projectsRef = ref(load() ?? defaultProjects);
function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projectsRef.value));
}

export function useProjects() {
  const list = projectsRef;

  function addProject(payload) {
    const newProj = {
      id: Date.now(),
      title: payload.title,
      type: payload.type,
      short: payload.short ?? payload.description?.slice(0, 120) ?? "",
      description: payload.description ?? "",
      image: payload.image ?? "/images/placeholder.png",
      stack: payload.stack ?? []
    };
    list.value.unshift(newProj);
    persist();
  }

  function getById(id) {
    return list.value.find((p) => String(p.id) === String(id));
  }

  function updateProject(updated) {
    const idx = list.value.findIndex((p) => p.id === updated.id);
    if (idx >= 0) {
      list.value[idx] = { ...list.value[idx], ...updated };
      persist();
    }
  }

  return { list, addProject, getById, updateProject };
}
