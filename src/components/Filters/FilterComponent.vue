<template>
  <div class="fillter">
    <div class="srch">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search.."
        @keyup.enter="fetchProducts"
        name="search"
      />
      <button @click="fetchProducts">
        <i class="fa fa-search"></i>
      </button>
    </div>

    <div class="cattitle">Product Filters</div>
    <slot></slot>
  </div>
</template>
<script setup>
import axios from "axios";
import { ref } from "vue";

const searchQuery = ref("");
const emit = defineEmits(["update-products"]);

const fetchProducts = async () => {
  try {
    const resp = await axios.get("http://localhost:3000/api/product", {
      params: { q: searchQuery.value },
    });
    emit("update-products", resp.data);
  } catch (error) {
    console.error("Error fetching products", error);
  }
};
</script>

<style scoped>
.fillter {
  width: 18%;
  height: 100vh;
  font-size: 2rem;
  font-weight: 700;
  overflow-y: auto;
  padding: 10px;
  background: #f8f9fa;
  border-right: 1px solid #ddd;
}

.cattitle {
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 10px;
}
.srch {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.fillter input {
  width: 140px;
  padding: 6px;
  margin: 1rem 0rem;
  font-size: 12px;
  border: none;
  border-radius: 10px;
}

.fillter button {
  padding: 4px;
  background: #ddd;
  font-size: 13px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.fillter button:hover {
  background: #ccc;
}
</style>
