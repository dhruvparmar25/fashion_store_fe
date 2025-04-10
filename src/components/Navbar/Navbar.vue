<template>
  <nav>
    <!-- Social Media Icons -->
    <div class="icons">
      <i class="fa-brands fa-facebook fb"></i>
      <i class="fa-brands fa-instagram insta"></i>
      <i class="fa-brands fa-youtube yt"></i>
      <i class="fa-brands fa-x-twitter x"></i>
    </div>

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
      <div class="user">
        <i class="fa-regular fa-user"></i>
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

/* Social Icons */
.icons {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.icon {
  font-size: 20px;
  color: black;
  transition:
    color 0.3s ease-in-out,
    transform 0.2s ease-in-out;
}

.icon:hover {
  transform: scale(1.1);
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
