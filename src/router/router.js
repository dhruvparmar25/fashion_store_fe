import { createRouter, createWebHistory } from "vue-router";
import Product from "@/views/Product.vue";
import Home from "@/views/Home.vue";
import ProductDetail from "@/views/ProductDetail.vue";
import Cart from "@/views/Cart.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/product",
    name: "Product",
    component: Product,
  },
  {
    path: "/productdetail",
    name: "ProductDetail",
    component: ProductDetail,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
