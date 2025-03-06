<template>
  <nav>
    <div class="icons">
      <router-link to="https://facebook.com" target="_blank" class="icon fb">
        <i class="fa-brands fa-facebook"></i>
      </router-link>
      <router-link
        to="https://instagram.com"
        target="_blank"
        class="icon insta"
      >
        <i class="fa-brands fa-instagram"></i>
      </router-link>
      <router-link to="https://youtube.com" target="_blank" class="icon yt">
        <i class="fa-brands fa-youtube"></i>
      </router-link>
      <router-link to="https://twitter.com" target="_blank" class="icon x">
        <i class="fa-brands fa-x-twitter"></i>
      </router-link>
    </div>

    <div class="offer">
      <p class="offerText">
        <strong>Special Offer</strong>: Free Shipping on all orders above $100
      </p>
    </div>

    <div class="menu">
      <router-link to="/contact" class="menu-item">Contact</router-link>
      <router-link to="/login" class="menu-item">Login</router-link>
    </div>
  </nav>
</template>

<script setup></script>

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
</style>
