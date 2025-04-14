<template>
  <div class="title"><h4>Orders</h4></div>
  <section>
    <table style="width: 100%">
      <thead>
        <tr>
          <th>No</th>
          <th>Order ID</th>
          <th>Name</th>
          <th>Order Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(order, index) in Orders">
          {{
            order
          }}

          <td>{{ index + 1 }}</td>
          <td>{{ order.id }}</td>
          <td>{{ order.name }}</td>
          <!-- <td>{{ userdata.role }}</td> -->
          <td><button class="viewall">viewall</button></td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

const Orders = ref([]);
onMounted(() => {
  fetchOrders();
});
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
</script>
<style scoped>
table,
th,
td {
  border: 1px solid #e1e6eb;
  border-radius: 10px;
  border-collapse: collapse;
  width: fit-content;
  padding: 1rem;
  width: 230px;
}
.adminusers-main {
  border-radius: 10px;
  margin: 1rem;
}
thead {
  font-weight: bold;
}
.title {
  border-bottom: 1px solid #e1e6eb;
}
.title h4 {
  margin: 1rem;
  font-size: 16px;
  font-weight: 700;
  font-family: "inter";
}
.viewall {
  background-color: lightcoral;
  color: white;
  border: none;
  padding: 5px 10px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.viewall:hover {
  background-color: red;
}
</style>
