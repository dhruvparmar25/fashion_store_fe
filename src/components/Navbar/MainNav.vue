<template>
  <nav>
    <div class="logo">
      <img src="/assest/Fashion.png" />
    </div>
    <div class="main-menu">
      <div><router-link to="/">Home</router-link></div>
      <div><router-link to="/blog">Blog</router-link></div>
      <div class="dropdown">
        <div class="dropbtn">Category</div>
        <div class="dropdown-content">
          <div><router-link to="">Men</router-link></div>
          <div><router-link to="">Women</router-link></div>
        </div>
      </div>
      <div>
        <router-link to="/product">Product</router-link>
      </div>
      <router-link to="/about">AboutUs</router-link>
    </div>
    <div class="main-icon">
      <div class="user"><i class="fa-regular fa-user"></i></div>
      <div class="cart">
        <router-link to="/cart"
          ><i class="fa-solid fa-cart-shopping"></i
        ></router-link>
      </div>
      <div class="srch"><i class="fa-solid fa-magnifying-glass"></i></div>
    </div>
  </nav>
</template>

<script setup></script>

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
}

.dropbtn {
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

/* cart */
.cart i {
  text-decoration: none;
  color: black;
  border: none;
}
</style>

<!-- 
<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
}

.logo > img {
  width: 50px;
  margin-left: 1rem;
}

/* Dropdown Button */
.dropbtn {
  color: black;
  border: none;
}

.main-menu {
  font-weight: normal;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
}

.main-menu a {
  text-decoration: none;
  color: black;
}

.main-menu a:visited {
  color: black;
}

.main-menu a:hover {
  color: red;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  min-width: 100px;
  padding: 0.5rem;
  z-index: 10;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  background-color: white;
  font-size: 16px;
  border-radius: 5px;
  margin-left: 0.5rem;
}

.dropdown-content a {
  color: black;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  color: red;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.main-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
}

.main-icon i {
  width: 20px;
  height: 20px;
  text-decoration: none;
  color: black;
}
.main-icon i:hover {
  color: red;
}
</style> -->
