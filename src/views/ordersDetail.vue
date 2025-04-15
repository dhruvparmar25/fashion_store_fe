<template>
  <div class="order-details">
    <h4>Order details</h4>
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>TotalAmount</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in OrdersDetail.items" :key="index">
          <td>
            <div class="prd-detail">
              <div class="order-img">
                <img
                  :src="item.productId?.image"
                  style="width: 50px; height: 50px"
                />
                <div class="prder-detail">
                  <h6>{{ item.productId?.name }}</h6>

                  <h6>Size:{{ item.size }}</h6>
                </div>
              </div>
            </div>
          </td>
          <td>
            <div class="prd-price">
              {{ item.productId?.price }}
            </div>
          </td>
          <td>
            <div class="prd-qut">{{ item.quantity }}</div>
          </td>
          <td>
            <div class="prd-price">{{ item.price }}</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

onMounted(() => {
  fetchOrders();
});
const OrdersDetail = ref([]);
const route = useRoute();

const fetchOrders = async () => {
  const ordersId = route.params.id;
  console.log("Fetching order with ID:", ordersId); // Log the ID

  if (!ordersId) {
    console.error("order ID not found!");
    return;
  }
  try {
    const res = await axios.get(
      `http://localhost:3000/api/admin/orders/${ordersId}`,
      { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
    );
    OrdersDetail.value = res.data;
  } catch (error) {
    console.log("Error OrdersDetaills User", error);
  }
};  
</script>
<style scoped>
.order-details {
  width: 70%;
  border-radius: 1px solid #e1e6eb;
  margin: 1rem;
}
table,
th,
td {
  border: 1px solid #e1e6eb;
  border-radius: 10px;
  border-collapse: collapse;
  width: fit-content;
  padding: 1rem;
}
thead {
  font-weight: bold;
}
</style>
