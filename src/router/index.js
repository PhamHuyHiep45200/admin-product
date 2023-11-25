import { createRouter, createWebHistory } from "vue-router";

import About from '../pages/About.vue'
import Category from '../pages/Category.vue'
import DashBoard from '../pages/DashBoard.vue'
import Product from '../pages/Product.vue'
const routes = [
  { path: "/about", component: About },
  { path: "/dashboard", component: DashBoard },
  { path: "/category", component: Category },
  { path: "/product", component: Product },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router