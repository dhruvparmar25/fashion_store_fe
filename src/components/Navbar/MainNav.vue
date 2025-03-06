<template>
  <nav>
    <div class="logo">
      <img src="/public/assest/Fashion.png" />
    </div>
    <div class="main-menu">
      <div><router-link to="/">Home</router-link></div>
      <div>Men</div>
      <div>Women</div>
      <div class="dropdown">
        <div class="dropbtn">Page</div>
        <div class="dropdown-content">
          <a><router-link to="/">Home</router-link></a>
          <a><router-link to="/product">Product</router-link> </a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <div>
        <router-link to="/product">Product</router-link>
      </div>
      <div>Sale</div>
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
  font-weight: normal;
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
  min-width: 70px;
  z-index: 1;
  background-color: rgb(219, 219, 219);
  font-size: 16px;
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
}
</style>
