<template>
  <section class="featured">
    <div class="ftitle">
      <h1>Latest Products</h1>
      <router-link to="/product"> <button>View All</button></router-link>
    </div>
    <div class="productContainer">
      <ProductCard v-for="prd in prds.slice(0, 5)" :product="prd" />
    </div>
  </section>
</template>
<script setup>
import { onMounted, ref } from "vue";
import ProductCard from "../Cards/ProductCard.vue";
import axios from "axios";

const prds = ref([]);

onMounted(async () => {
  await axios
    .get("http://localhost:3000/api/product")
    .then((resp) => {
      prds.value = resp.data;
    })
    .catch((error) => {
      console.log("error fetching", error);
    });
});
</script>
<style scoped>
.ftitle {
  display: flex;
  justify-content: space-between;
  margin: 1rem;
}
.ftitle h1 {
  font-size: 22px;
  font-weight: 700;
  line-height: normal;
  background-color: black;
  color: white;
  padding: 0.5rem;
  letter-spacing: 0.5rem;
  text-transform: uppercase;
}
.ftitle button {
  background-color: white;
  border: none;
  font-size: 14px;
  padding: 5px;
}
.ftitle button:hover {
  background-color: black;
  color: white;
  border-radius: 10px;
}
.featured {
  height: fit-content;
  margin: 2rem 0rem;
  border-bottom: 1px solid #adb5bd;
}
.productContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5rem;
}
.products {
  margin: 1rem;
}

.productcard img {
  max-width: 100%;
  height: auto;
}

.container {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  padding: 0%;
}
.container h4,
.container h1 {
  font-size: 16px;
  font-weight: 300;
  color: rgb(51, 51, 51);
}
.container h1 {
  font-weight: 700;
}
</style>
