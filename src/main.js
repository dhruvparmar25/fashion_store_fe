import App from "./App.vue";
import router from "./router/router";
import Vue3Toastify from "vue3-toastify"; // Importing Vue3Toastify
import "vue3-toastify/dist/index.css"; // Importing CSS for Toastify
import "./global.css";
import { createApp } from "vue";
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();
app.use(Vue3Toastify, {
  autoClose: 3000,
  position: "top-right", // Ensure position is set
  theme: "dark", // Ensure theme is applied
});

app.use(pinia);
app.use(router);
app.mount("#app");
