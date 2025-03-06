<template>
  <section class="banner">
    <div class="grid-wrapper">
      <div v-for="baner in Banners" class="images">
        <img :src="baner.link" />
      </div>
    </div>
    <div class="btn">
      <button>1</button>
      <button>2</button>
      <button>3</button>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";

const Banners = ref([
  {
    link: "https://themewagon.github.io/stylish/images/card-image1.jpg",
  },
  {
    link: "https://themewagon.github.io/stylish/images/card-image2.jpg",
  },
  {
    link: "https://themewagon.github.io/stylish/images/card-image3.jpg",
  },
  {
    link: "https://themewagon.github.io/stylish/images/card-image5.jpg",
  },
  {
    link: "https://themewagon.github.io/stylish/images/card-image6.jpg",
  },
  {
    link: "https://themewagon.github.io/stylish/images/card-image2.jpg",
  },
]);
</script>
<style scoped>
.banner {
  width: 90%;
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.grid-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
}
.images {
  border-radius: 20px;
  overflow: hidden;
}
img {
  width: 100%;
  height: 100%;
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.btn button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-top: 2rem;
  background-color: #e1e1e1;
  outline: none;
  border: none;
  color: transparent;
}
.btn button:hover {
  background-color: #ce071e;
}
.btn button:active {
  background-color: #ce071e;
}
</style>
