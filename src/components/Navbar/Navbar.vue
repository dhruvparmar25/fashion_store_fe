<template>
  <nav>
    <!-- Dynamic Offer Message -->
    <div class="offer">
      <p class="offerText">
        <strong><i class="fas fa-shipping-fast"></i></strong>FREE SHIPPING on
        all orders above ₹399
      </p>
    </div>

    <!-- Menu Section -->
    <div class="menu">
      <router-link to="/contact" class="menu-item">Contact</router-link>
      <div class="dropdown">
        <div class="user">
          <i class="fa-regular fa-user"></i>
          <div class="dropdown-content">
            <router-link to="/orders"><label>MyOrders</label></router-link>
          </div>
        </div>
      </div>
      <!-- Login / Logout Button -->
      <router-link v-if="!isLoggedIn" to="/login" class="login"
        >Login</router-link
      >
      <button v-else class="logout-btn" @click="logout">Logout</button>
    </div>
  </nav>
</template>

<script setup>
import { useAuth } from "@/composables/useAuth";
import { ref } from "vue";

const { isLoggedIn, logout } = useAuth();
</script>

<style scoped>
/* Navigation Bar */
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 2.5rem;
  color: black;
  border-bottom: 1px solid #adb5bd;
  background-color: #f8f9fa;
}

/* Offer Text */
.offerText {
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
}

/* Menu */
.menu {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.menu-item {
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  color: black;
  transition: color 0.3s ease-in-out;
}

.menu-item:hover {
  color: blue;
}
/* Login Button */
.login {
  background-color: rgba(0, 0, 0, 0.753);
  color: white;
  border: none;
  padding: 5px 10px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  text-decoration: none;
}
.login:hover {
  background-color: #000;
}

/* Logout Button */
.logout-btn {
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.logout-btn:hover {
  background-color: darkred;
}

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
.dropdown-content label {
  padding: 5px;
  color: black;
}
/* Social Media Hover Effects */
.fb:hover {
  color: #1877f2;
}

.insta:hover {
  color: #e4405f;
}

.yt:hover {
  color: #ff0000;
}

.x:hover {
  color: #000;
}
@media (max-width: 768px) {
  .offerText {
    display: none;
  }
}
@media (max-width: 480px) {
  .offerText {
    display: none;
  }
}
</style>
