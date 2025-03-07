<template>
  <div class="products">
    <div class="productcard">
      <img :src="product.image" />
      <div class="container">
        <h4>{{ product.category }}</h4>
        <h1>${{ product.price }}</h1>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["product"]);
</script>
<style scoped>
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
