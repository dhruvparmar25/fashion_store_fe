<template>
  <Navbar v-if="!route.path.includes('/admin')" />
  <MainNav v-if="!route.path.includes('/admin')" />
  <div><router-view /></div>
  <Modal />
  <mainFooter v-if="!route.path.includes('/admin')" />
</template>

<script setup>
import Navbar from "./components/Navbar/Navbar.vue";
import MainNav from "./components/Navbar/MainNav.vue";
import mainFooter from "./components/Footer/mainFooter.vue";
import { useRoute } from "vue-router";

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
