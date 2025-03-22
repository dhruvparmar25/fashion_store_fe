import { createRouter, createWebHistory } from "vue-router";
// Importing views for routing
import Product from "@/views/Product.vue";
import Home from "@/views/Home.vue";
import ProductDetail from "@/views/ProductDetail.vue";
import Cart from "@/views/Cart.vue";
import Login from "@/views/login.vue";
import Contact from "@/views/contact.vue";
import Men from "@/views/Men.vue";
import Women from "@/views/Women.vue";

// Define application routes
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
        next({ name: "Home" }); // If already logged in, redirect to Home
      } else {
        next(); // Otherwise, continue to the login page
      }
    },
  },
  {
    path: "/product",
    name: "Product",
    component: Product, // Product page
  },
  {
    path: "/product/:id",
    name: "ProductDetail",
    component: ProductDetail, // Product detail page
    props: true, // Pass the ID as a prop
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact, // Contact page
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart, // Shopping cart page
  },
  {
    path: "/men",
    name: "Men",
    component: Men, // Blog page
  },
  {
    path: "/women",
    name: "Women",
    component: Women, // About page
  },
];

// Create and configure the Vue Router
const router = createRouter({
  history: createWebHistory(), // Use HTML5 history mode
  routes, // Defined routes
});
router.afterEach(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
export default router; // Export the router instance for use in the app
