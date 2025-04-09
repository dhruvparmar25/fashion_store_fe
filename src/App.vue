<template>
  <Navbar v-if="!route.name?.includes('admin')" />
  <MainNav v-if="!route.name?.includes('admin')" />
  <!-- <Admin v-if="route.name?.includes('admin')" /> -->
  <div><router-view></router-view></div>
  <Modal />
  <Footer v-if="!route.name?.includes('admin')" />
</template>

<script setup>
import Navbar from "./components/Navbar/Navbar.vue";
import MainNav from "./components/Navbar/MainNav.vue";
import Footer from "./components/Footer/footer.vue";
import { useRoute } from "vue-router";
import Admin from "./components/Admin/Admin.vue";

const route = useRoute();
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");

* {
  margin: 0%;
  padding: 0;
}
body {
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
}
</style>
