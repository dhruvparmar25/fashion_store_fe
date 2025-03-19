<template>
  <h1>Category</h1>
  <section class="banner">
    <div class="image1">
      <img src="/public/Men.jpg" />
    </div>
    <div class="image2">
      <img src="/public/women.jpg" />
    </div>
  </section>
</template>
<script setup></script>
<style scoped>
h1 {
  width: fit-content;
  font-size: 22px;
  font-weight: 700;
  line-height: normal;
  background-color: black;
  color: white;
  padding: 0.5rem;
  letter-spacing: 0.5rem;
  text-transform: uppercase;
  margin-left: 1rem;
}
.banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: auto;
  /* margin: 5rem 0rem; */
}
img {
  width: 90%;
  border-radius: 0.5rem;
  margin: 1rem;
}
</style>
