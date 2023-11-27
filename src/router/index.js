import { createRouter, createWebHistory } from "vue-router";

import About from "../pages/About.vue";
import Category from "../pages/Category/index.vue";
import DashBoard from "../pages/DashBoard.vue";
import Product from "../pages/Product/index.vue";
import AddProduct from "../pages/Product/Add.vue";
import Login from "../pages/Login.vue";
import News from '../pages/News.vue'
const routes = [
  { path: "/about", component: About },
  { path: "/dashboard", component: DashBoard },
  { path: "/category", component: Category },
  { path: "/add-product", component: AddProduct },
  {
    path: "/product",
    component: Product,
  },
  { path: "/login", component: Login },
  { path: "/news", component: News },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router