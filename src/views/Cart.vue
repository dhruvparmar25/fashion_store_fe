<template>
  <div class="main">
    <div class="bag">
      <div class="title"><h4>Bag</h4></div>
      <div class="produtdetail">
        <div class="img"></div>
        <div class="details"></div>
      </div>
    </div>

    <div class="summary">
      <div class="title"><h4>Summary</h4></div>
    </div>
  </div>
</template>
<script setup>
import Product from "./Product.vue";
</script>
<style scoped>
.main {
  width: 90%;
  height: 100vh;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.bag {
  width: 65%;
  height: 100vh;
}
.summary {
  width: 25%;
  height: 100vh;
}

.produtdetail {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
