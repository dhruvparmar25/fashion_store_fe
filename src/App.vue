<template>
  <FullNav v-if="!route.path.includes('/admin')" />
  <div><router-view /></div>
  <Modal />
  <mainFooter v-if="!route.path.includes('/admin')" />
</template>

<script setup>
import mainFooter from "./components/Footer/mainFooter.vue";
import { useRoute } from "vue-router";
import FullNav from "./components/Navbar/FullNav.vue";

const route = useRoute();
</script>
