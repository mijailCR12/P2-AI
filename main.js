// main.js

import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Home from './pages/index.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home }
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
