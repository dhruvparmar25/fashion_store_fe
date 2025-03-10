import { createRouter, createWebHistory } from "vue-router";
import Product from "@/views/Product.vue";
import Home from "@/views/Home.vue";
import ProductDetail from "@/views/ProductDetail.vue";
import Cart from "@/views/Cart.vue";
import Login from "@/views/login.vue";
import Contact from "@/views/contact.vue";
import Blog from "@/views/blog.vue";
import About from "@/views/about.vue";
import ProductPage from "@/components/Cards/ProductPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("token")) {
        next({ name: "Home" });
      } else {
        next();
      }
    },
  },
  {
    path: "/product",
    name: "Product",
    component: Product,
  },
  {
    path: "/product/:id",
    name: "ProductDetail",
    component: ProductDetail,
    props: true,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
