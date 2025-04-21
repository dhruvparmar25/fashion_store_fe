<template>
  <div class="dashboard">
    <div class="das-top">
      <h4>welcome to dashboard!!!</h4>
    </div>
    <div class="das-box">
      <div class="products">
        <label> Products</label>
        <h4><i class="fa-solid fa-cube"></i> {{ products.length }}</h4>
      </div>
      <div class="users">
        <label>Users</label>
        <h4><i class="fa-solid fa-user"></i></h4>
      </div>
      <div class="orders">
        <label>Orders</label>
        <h4><i class="fa-solid fa-bag-shopping"></i></h4>
      </div>
    </div>
  </div>
</template>
<script>
import AdminProducts from "@/components/AdminPage/AdminProducts.vue";
</script>
<style>
.das-top {
  background-color: #f3f2f2;
  padding: 3rem;
  text-transform: capitalize;
  height: 250px;
  position: relative;
}
.das-box {
  display: flex;
  justify-content: center;
  margin: 3rem;
  gap: 5rem;
  align-items: center;
  position: absolute;
  bottom: 270px;
  left: 370px;
}
.das-box div {
  width: 175px;
  height: 150px;
  background-color: #004b60;
  color: white;
  padding: 15px;
  border-radius: 10px;
}
</style>
