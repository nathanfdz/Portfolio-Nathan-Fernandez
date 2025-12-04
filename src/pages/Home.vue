<template>
  <Hero />

  <!-- Section Compétences -->
  <section id="skills" class="mt-20 max-w-5xl mx-auto px-6">
    <h2 class="text-3xl font-bold text-primary text-center mb-6">Compétences</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div
        v-for="skill in skills"
        :key="skill"
        class="card bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-500 hover:scale-105 transition transform"
      >
        <p class="text-white font-semibold">{{ skill }}</p>
      </div>
    </div>
  </section>

  <!-- Section Services -->
  <section id="services" class="mt-20 max-w-5xl mx-auto px-6">
    <h2 class="text-3xl font-bold text-primary text-center mb-6">Services</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="service in services"
        :key="service.title"
        class="card bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-500 hover:scale-105 transition transform p-6 text-white"
      >
        <h3 class="font-bold text-lg mb-2">{{ service.title }}</h3>
        <p class="text-gray-200 text-sm">{{ service.desc }}</p>
      </div>
    </div>
  </section>

  <!-- Section À propos -->
<section id="about" class="mt-20 max-w-3xl mx-auto px-6">
  <h2 class="text-3xl font-bold text-primary text-center mb-6">À propos</h2>
  <p class="text-gray-300  text-justify">
    Étudiant en 3ᵉ année de Bachelor Développement Web & Data, je suis passionné par la création d’applications et de sites web performants, ainsi que par l’analyse et la visualisation de données. 
    Au cours de mes différentes expériences professionnelles, j’ai travaillé sur le développement de webapps interactives, la mise en forme de bases de données et la création de dashboards pour le suivi de projets et l’aide à la décision. 
    J’ai également participé à l’automatisation de rapports et à la connexion d’outils métiers avec des solutions BI comme Power BI et Excel. 
    Curieux et persévérant, j’aime apprendre de nouvelles technologies et améliorer constamment mes compétences en programmation, notamment avec HTML, CSS, JavaScript, Vue.js, NodeJS, Python et R. 
    Rigoureux et collaboratif, je valorise le travail structuré et efficace au sein d’équipes dynamiques, tout en gardant un intérêt particulier pour l’UX/UI et la création d’expériences utilisateurs intuitives et agréables. 
    Mon objectif est de contribuer à des projets ambitieux, que ce soit en alternance, en mission freelance ou dans des environnements innovants, en mettant mes compétences techniques et analytiques au service d’applications et de solutions de qualité.
  </p>
</section>

  <!-- Section Contact -->
  <section id="contact" class="mt-20 max-w-3xl mx-auto px-6">
    <h2 class="text-3xl font-bold text-primary text-center mb-6">Contact</h2>
    <ContactForm />
  </section>
</template>

<script>
import Hero from '../components/Hero.vue';
import ContactForm from '../components/ContactForm.vue';

export default {
  components: { Hero, ContactForm },
  data() {
    return {
      skills: ["HTML", "CSS", "JavaScript", "Vue.js","Nuxt", "Tailwind", "Git", "NodeJS","PHP","Symfony","React Native", "Figma","SQL","Pyhton", "Java","Power BI","Excel","Docker","Linux","Langage R",],
      services: [
  { title: "Site vitrine", desc: "Création de sites web responsive et optimisés pour présenter une entreprise ou un projet." },
  { title: "Boutique en ligne / e-commerce", desc: "Développement de boutiques en ligne avec catalogue, panier et paiement sécurisé." },
  { title: "Programmation statistique", desc: "Analyse et traitement de données avec Python, R ou SQL pour extraire des insights utiles." },
  { title: "Webapps interactives", desc: "Outils web interactifs pour visualiser des données ou faciliter la gestion des processus." },
  { title: "Applications mobiles", desc: "Applications hybrides pour Android et iOS, connectées à des bases de données ou dashboards." },
  { title: "Visualisation de données", desc: "Dashboards Power BI / Excel pour suivre les KPIs et analyser les performances." },
  { title: "Automatisation de rapports", desc: "Scripts Python ou SQL pour automatiser la collecte et la visualisation de données." },
  { title: "UX/UI Design", desc: "Création ou amélioration de maquettes Figma et optimisation de l’expérience utilisateur." },
  { title: "Audit SEO et performance", desc: "Analyse des sites existants pour améliorer vitesse, référencement et ergonomie." }
]

    };
  }
};
</script>
