<template>
  <nav>
    <div class="logo">
      <img src="/public/Fashion.png" />
    </div>
    <div class="main-menu">
      <router-link to="/">Home</router-link>
      <div @click="openType('Men')" class="men">Men</div>
      <div @click="openType('Women')" class="women">Women</div>
      <div class="dropdown">
        <span class="dropbtn">Category</span>
        <div class="dropdown-content">
          <div @click="openCate(category)" v-for="category in categories">
            {{ category }}
          </div>
        </div>
      </div>

      <router-link to="/product">Product</router-link>
    </div>
    <div class="main-icon">
      <router-link to="/cart" class="cart">
        <i class="fa-solid fa-cart-shopping"></i>
      </router-link>
    </div>
  </nav>
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

const openCate = (category) => {
  router.push({
    name: "Product",
    query: { category: [category], type: undefined },
  });
};

const openType = (type) => {
  router.push({
    name: "Product",
    query: { type: type, category: undefined },
  });
};
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
}

.logo img {
  width: 50px;
  margin-left: 1rem;
}

/* Main Menu */
.main-menu {
  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
}

.main-menu a,
.main-menu div {
  text-decoration: none;
  color: black;
  transition: color 0.3s ease-in-out;
}

.main-menu a:hover,
.main-menu > div:hover {
  color: blue;
}

/* Dropdown */
.dropdown {
  position: relative;
  cursor: pointer;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: white;
  width: fit-content;
  padding: 0.5rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  z-index: 10;
}

.dropdown-content div {
  display: block;
  padding: 8px 10px;
  color: black;
  transition: color 0.3s;
}

.dropdown-content div:hover {
  color: blue;
  background-color: rgba(255, 0, 0, 0.1);
}

.dropdown:hover .dropdown-content {
  display: block;
}

/* Icons */
.main-icon {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.main-icon i,
.main-icon div {
  font-size: 20px;
  cursor: pointer;
  transition: color 0.3s;
}

.main-icon i:hover {
  color: blue;
}

/* Cart */
.cart i {
  text-decoration: none;
  color: black;
}

/* Search Button */
.search-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}
</style>
