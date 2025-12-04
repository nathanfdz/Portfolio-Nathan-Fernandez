import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Projects from '../pages/Projects.vue';
import ProjectDetails from '../pages/ProjectDetails.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/projects/:id', component: ProjectDetails }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
