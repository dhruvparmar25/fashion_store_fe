<template>
  <div class="dashboard">
    <div class="das-top">
      <h4>welcome to dashboard!!!</h4>
    </div>
    <div class="das-box">
      <router-link :to="{ name: 'adminproducts' }">
        <div class="products">
          <label> Products</label>
          <h4><i class="fa-solid fa-cube"></i> {{ console.log(products) }}</h4>
        </div></router-link
      >
      <router-link :to="{ name: 'adminuser' }">
        <div class="users">
          <label>Users</label>
          <h4><i class="fa-solid fa-user"></i>{{ userdatas.length }}</h4>
        </div></router-link
      >
      <router-link :to="{ name: 'adminorders' }">
        <div class="orders">
          <label>Orders</label>
          <h4><i class="fa-solid fa-bag-shopping"></i>{{ Orders.length }}</h4>
        </div></router-link
      >
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const products = ref([]);
const userdatas = ref([]);
const Orders = ref([]);

const fetchProducts = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/admin/products", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    products.value = res.data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};
const Adduser = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/admin/users", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    userdatas.value = res.data;
  } catch (error) {
    console.log("Error Fetching User", error);
  }
};
const fetchOrders = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/admin/orders", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    Orders.value = res.data;
  } catch (error) {
    console.log("Error Fetching User", error);
  }
};

onMounted(() => {
  fetchProducts();
  Adduser();
  fetchOrders();
});
</script>

<style scoped>
.das-top {
  background-color: #f3f2f2;
  padding: 3rem;
  text-transform: capitalize;
  height: 250px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.das-top h4 {
  font-size: 2rem;
  color: #004b60;
}

.das-box {
  display: flex;
  justify-content: center;
  margin: 3rem;
  gap: 5rem;
  align-items: center;
  position: absolute;
  bottom: 170px;
  left: 370px;
}

.das-box div {
  width: 180px;
  height: 150px;
  background-color: #004b60;
  color: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition:
    transform 0.3s,
    background-color 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
a {
  text-decoration: none;
}

.das-box div:hover {
  transform: translateY(-5px);
  background-color: #006b80;
  cursor: pointer;
}

.das-box label {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.das-box h4 {
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
