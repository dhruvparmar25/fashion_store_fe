<template>
  <section class="dsb">
    <div class="field">
      <nav>
        <h4>Dashboard</h4>
        <div class="main-menu">
          <div @click="cart()">Carts</div>
          <div @click="order()">Orders</div>
          <div @click="product()">Products</div>
          <div @click="user()">Users</div>
        </div>
      </nav>
    </div>

    <div class="detail">
      <Admincarts v-if="activeTab === 'Cart'" />
      <AdminOrders v-if="activeTab === 'Order'" />
      <AdminProducts v-if="activeTab === 'Product'" />
      <AdminUser v-if="activeTab === 'User'" />
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
import Admincarts from "../AdminPage/Admincarts.vue";
import AdminOrders from "../AdminPage/AdminOrders.vue";
import AdminProducts from "../AdminPage/AdminProducts.vue";
import AdminUser from "../AdminPage/AdminUser.vue";
const activeTab = ref("");
const cart = () => {
  activeTab.value = "Cart";
};
const order = () => {
  activeTab.value = "Order";
};
const product = () => {
  activeTab.value = "Product";
};
const user = () => {
  activeTab.value = "User";
};
</script>
<style scoped>
.dsb {
  width: 100%;
  height: 100%;
  display: flex;
}
.field {
  width: 15%;
  height: 88.5vh;
  background-color: #ccc;
  padding: 1rem;
  position: sticky;
  top: 0;
  bottom: 0;
}
.detail {
  width: 85%;
  padding: 1rem;
  overflow-y: auto;
}
.field nav h4 {
  margin-bottom: 1rem;
}

.main-menu > div {
  cursor: pointer;
  margin-bottom: 1rem;
  color: black;
  transition: color 0.3s ease-in-out;
}
.main-menu > div:hover {
  color: blue;
}
</style>
