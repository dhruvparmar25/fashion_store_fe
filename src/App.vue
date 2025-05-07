<template>
  <FullNav v-if="!route.path.includes('/admin')" />
  <div><router-view /></div>
  <Footer v-if="!route.path.includes('/admin')" />
</template>

<script setup>
import Footer from "./components/Footer/Footer.vue";
import { useRoute } from "vue-router";
import FullNav from "./components/Navbar/FullNav.vue";

const route = useRoute();
</script>
