<template>
  <nav>
    <div class="logo">
      <img src="/public/Fashion.png" />
    </div>
    <div class="main-menu">
      <router-link to="/">Home</router-link>
      <router-link to="/blog">Blog</router-link>

      <!-- Dynamic Category Dropdown -->
      <div class="dropdown">
        <span class="dropbtn">Category</span>
        <div class="dropdown-content">
          <router-link v-for="category in categories">
            {{ category }}
          </router-link>
        </div>
      </div>

      <router-link to="/product">Product</router-link>
      <router-link to="/about">About Us</router-link>
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

const categories = ref([]); // Categories store karne ke liye

// Categories API se fetch karne ka function
const fetchCategories = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/category");
    categories.value = response.data; // API response ko categories me store karo
  } catch (error) {
    console.error("Error fetching categories", error);
  }
};

onMounted(() => {
  fetchCategories();
});
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
}

.main-menu a {
  text-decoration: none;
  color: black;
  transition: color 0.3s ease-in-out;
}

.main-menu a:hover {
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
  min-width: 120px;
  padding: 0.5rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  z-index: 10;
}

.dropdown-content a {
  display: block;
  padding: 8px 10px;
  color: black;
  transition: color 0.3s;
}

.dropdown-content a:hover {
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

.main-icon i {
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
