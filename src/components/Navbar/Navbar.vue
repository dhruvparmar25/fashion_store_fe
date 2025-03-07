<template>
  <nav>
    <div class="icons">
      <i class="fa-brands fa-facebook fb"></i>
      <i class="fa-brands fa-instagram insta"></i>
      <i class="fa-brands fa-youtube yt"></i>
      <i class="fa-brands fa-x-twitter x"></i>
    </div>

    <div class="offer">
      <p class="offerText">
        <strong>Special Offer</strong>: Free Shipping on all orders above $100
      </p>
    </div>

    <div class="menu">
      <router-link to="/contact" class="menu-item">Contact</router-link>

      <div class="user"><i class="fa-regular fa-user"></i></div>

      <router-link v-if="!isLoggedIn" to="/login" class="menu-item"
        >Login</router-link
      >

      <div v-else>
        <button @click="logout">Logout</button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import router from "@/router/router";
import { onMounted, ref } from "vue";

const isLoggedIn = ref(false);

const checkLoginStatus = () => {
  isLoggedIn.value = !!localStorage.getItem("token");
};
const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  isLoggedIn.value = false;
  router.push("/login");
};

onMounted(() => {
  checkLoginStatus();
});
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 1.5rem;
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
  color: red;
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

.menu button {
  border: none;
  background-color: #f7f8f9;
  text-decoration: none;
}

.menu-item,
.menu button {
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  color: black;
  transition: color 0.3s ease-in-out;
}

.menu-item:hover,
.menu button:hover {
  color: blue;
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

/* Hover Effects */
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

.icon:hover {
  transform: scale(1.1);
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
</style>
