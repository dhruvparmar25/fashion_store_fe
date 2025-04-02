import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import Vue3Toastify from "vue3-toastify"; // Importing Vue3Toastify
import "vue3-toastify/dist/index.css"; // Importing CSS for Toastify

const app = createApp(App);
app.use(Vue3Toastify, {
  autoClose: 3000,
  position: "top-right", // Ensure position is set
  theme: "dark", // Ensure theme is applied
});
app.use(router);
app.mount("#app");
