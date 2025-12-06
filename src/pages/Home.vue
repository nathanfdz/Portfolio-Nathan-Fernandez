<template>
  <Hero />

  <!-- Section À propos -->
  <section id="about" class="mt-20 max-w-3xl mx-auto px-6">
    <h2 class="text-3xl font-bold text-primary dark:text-primary text-center mb-6">À propos</h2>
    
    <p class="text-gray-900 dark:text-gray-100 text-justify">
      Je m’appelle <strong>Nathan Fernandez Puente</strong>, actuellement en 3ᵉ année de Bachelor Développeur Web & Data à l’EFREI Bordeaux. Je suis à la recherche d’une alternance en développement web et mobile pour mettre en pratique mes compétences techniques et approfondir mes connaissances en entreprise.
    </p>

    <p class="text-gray-900 dark:text-gray-100 mt-4">
      Mon rythme d’alternance évolue ainsi :
    </p>
    <ul class="text-gray-900 dark:text-gray-100 list-disc list-inside ml-6 mb-4">
      <li>Jusqu’à fin décembre 2025 : 1 semaine en entreprise / 2 semaines à l’école</li>
      <li>De janvier à avril 2026 : 2 semaines en entreprise / 1 semaine à l’école</li>
      <li>À partir du 27 avril 2026 : 100% en entreprise</li>
    </ul>

    <p class="text-gray-900 dark:text-gray-100 text-justify mt-2">
      J’ai réalisé deux stages en entreprise. Lors de mon stage chez SYENSQO (mai-juin 2024),
      j’ai développé une application web interactive avec Python (Plotly Dash et Pandas),
      permettant la visualisation et l’analyse de données. Plus récemment, chez DEDALUS
      (mai-juin 2025), j’ai programmé des flux automatisés avec Power Automate vers Power BI,
      et conçu des tableaux de bord interactifs intégrant des calculs de KPI. Ces projets m’ont
      permis de combiner mes compétences en développement et en data afin de répondre à
      des besoins concrets de l’entreprise.
    </p>

    <p class="text-gray-900 dark:text-gray-100 text-justify mt-4">
      Passionné par la technologie, le design UX/UI et la visualisation de données, je maîtrise des outils comme <strong>HTML/CSS, JavaScript, NodeJS, Vue.js, Nuxt, PHP, Symfony, React Native, Python, Java</strong>, ainsi que des bases de données <strong>SQL, PostgreSQL, MongoDB, MariaDB</strong> et des outils de business intelligence comme <strong>Power BI et Excel</strong>. J’évolue également dans des environnements professionnels utilisant <strong>Docker</strong> et <strong>Linux (Debian)</strong>.
    </p>

    <p class="text-gray-900 dark:text-gray-100 text-justify mt-4">
      Reconnu pour mon esprit collaboratif, ma persévérance et ma curiosité, je m’investis pleinement dans chaque projet et suis toujours prêt à apprendre et à relever de nouveaux défis.
    </p>

    <p class="text-gray-900 dark:text-gray-100 text-justify mt-4">
      En dehors du travail et des études, je suis passionné par le <strong>football, le ski, la course à pied</strong> et j’aime découvrir de nouveaux horizons à travers mes voyages en <strong>Italie, Espagne, Guadeloupe</strong> et <strong>Portugal</strong>.
    </p>
  </section>

  <!-- Section Compétences -->
  <section id="skills" class="mt-20 max-w-5xl mx-auto px-6">
    <h2 class="text-3xl font-bold text-primary dark:text-primary text-center mb-6">Compétences</h2>
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
    <h2 class="text-3xl font-bold text-primary dark:text-primary text-center mb-6">Services</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="service in services"
        :key="service.title"
        class="card bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-500 hover:scale-105 transition transform p-6 text-white"
      >
        <h3 class="font-bold text-lg mb-2">{{ service.title }}</h3>
        <p class="text-gray-200">{{ service.desc }}</p>
      </div>
    </div>
  </section>

  <!-- Section Contact -->
  <section id="contact" class="mt-20 max-w-3xl mx-auto px-6">
    <h2 class="text-3xl font-bold text-primary dark:text-primary text-center mb-6">Contact</h2>
    <ContactForm />
  </section>
</template>

<script>
import ContactForm from '../components/ContactForm.vue';
import Hero from '../components/Hero.vue';

export default {
  components: { Hero, ContactForm },
  data() {
    return {
      skills: ["HTML", "CSS", "JavaScript", "Vue.js", "Nuxt", "Tailwind", "Git", "NodeJS", "PHP", "Symfony", "React Native", "Figma", "SQL", "Python", "Java", "Power BI", "Excel", "Docker", "Linux", "R"],
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
