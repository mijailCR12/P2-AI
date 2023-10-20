// main.js

import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/index.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home
  },
  // ... otras rutas
];

const router = new VueRouter({
  mode: 'history', // Modo de historia
  routes
});

export default router;

