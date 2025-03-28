<template>
  <h1>Category</h1>
  <section class="banner">
    <div @click="openType('Men')" class="image1">
      <img src="/public/Men.jpg" />
    </div>
    <div @click="openType('Women')" class="image2">
      <img src="/public/women.jpg" />
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const categories = ref([]);
const router = useRouter();

const fetchCategories = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/category");
    categories.value = response.data;
  } catch (error) {
    console.error("Error fetching categories", error);
  }
};

onMounted(() => {
  fetchCategories();
});

const openType = (type) => {
  router.push({
    name: "Product",
    query: { type: type, category: undefined },
  });
};
</script>
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
section.banner {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 90%;
  margin: auto;
  margin-left: 5rem;
}
img {
  width: 90%;
  border-radius: 0.5rem;
  margin: 1rem;
}
</style>
