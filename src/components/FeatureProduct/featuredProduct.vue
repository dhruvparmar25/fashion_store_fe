<template>
  <section class="featured">
    <div class="ftitle">
      <h1>Featured Products</h1>
      <p>VIEW ALL</p>
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
      console.log("Error Fetching Products", error);
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
  color: rgb(33, 37, 41);
  letter-spacing: 0.5rem;
  text-transform: uppercase;
}
.ftitle p {
  font-weight: 700;
  font-size: 16px;
  color: rgb(51, 51, 51);
}
.featured {
  height: fit-content;
  margin: 2rem 0rem;
}
.productContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
