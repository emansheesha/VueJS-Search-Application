import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue'
import MealListView from '../views/MealListView.vue'
// 1. Define route views.
// These can be imported from other files
// const Home = { template: '<div>Home</div>' }
// const About = { template: '<div>About</div>' }

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    { path: '/', component: HomeView },
    { path: '/letter/:letter',name:'letter', component: MealListView },
  //   { path: '/about', component: About },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
