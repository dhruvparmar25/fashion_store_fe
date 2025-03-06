<template>
  <nav>
    <div class="icons">
      <div class="fb"><i class="fa-brands fa-facebook"></i></div>
      <div class="insta"><i class="fa-brands fa-square-instagram"></i></div>
      <div class="yt"><i class="fa-brands fa-youtube"></i></div>
      <div class="x"><i class="fa-brands fa-square-x-twitter"></i></div>
    </div>
    <div class="offer">
      <p class="offerText">
        <strong>Special Offer</strong>: Free Shipping on all the orders above
        $100
      </p>
    </div>
    <div class="menu">
      <div><h6>Contact</h6></div>
      <div><h6>Cart</h6></div>
      <div><h6>Login</h6></div>
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
  color: black;
  border-bottom: 1px solid #adb5bd;

}
.menu {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  /* padding: 0rem 1rem; */
  font-size: 1.5rem;
  font-weight: 400;
  color: rgb(0, 0, 0);
}

.offerText {
  font-size: 1rem;
}

.icons{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 0rem 1rem;
}
.icons i{
  width: 20px;
  height: 20px;
}
</style>
