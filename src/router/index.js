import { createRouter, createWebHistory } from "vue-router";

import About from "../pages/About.vue";
import Category from "../pages/Category.vue";
import DashBoard from "../pages/DashBoard.vue";
import Product from "../pages/Product/index.vue";
import AddProduct from "../pages/Product/Add.vue";
import Login from "../pages/Login.vue";
import News from '../pages/News.vue'
import Brand from '../pages/Brand.vue'
import Collection from '../pages/Collection.vue'


const routes = [
  { path: "/about", component: About },
  { path: "/dashboard", component: DashBoard },
  { path: "/category", component: Category },
  { path: "/product/add", component: AddProduct },
  {
    path: "/product",
    component: Product,
  },
  { path: "/login", component: Login },
  { path: "/news", component: News },
  { path: "/brand", component: Brand },
  { path: "/collection", component: Collection },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
