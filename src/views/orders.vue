<template>
  <div class="orders-page">
    <h2>Your Orders</h2>
    <div v-if="orders.length > 0">
      <div v-for="order in orders" :key="order._id" class="order-item">
        <div class="add">
          <h4>Delivery Address</h4>
          <div class="add-detail">
            <p><strong>Name:</strong> {{ order.address.fullName }}</p>
            <p><strong>Mobile No:</strong> {{ order.address.phoneNumber }}</p>
            <p><strong>Street:</strong> {{ order.address.street }}</p>
            <p><strong>City:</strong>{{ order.address.city }}</p>
            <p><strong>State:</strong> {{ order.address.state }}</p>
            <p><strong>zipCode:</strong> {{ order.address.zipCode }}</p>
            <p><strong>Country:</strong> {{ order.address.country }}</p>
          </div>
        </div>

        <div class="item">
          <h4>Ordered Items:</h4>
          <div
            v-for="item in order.items"
            :key="item.productId._id"
            class="prd-detail"
          >
            <div class="prd-img">
              <img :src="item.productId.image" />
            </div>

            <div class="prd-list">
              {{}}
              <label><strong>Order Id:</strong> {{ order._id }}</label
              ><br />
              <label
                ><strong>Product Name:</strong> {{ item.productId.name }}</label
              ><br />
              <label><strong>Product Size:</strong> {{ item.size }} </label
              ><br />
              <label
                ><strong>Quantiy:</strong> {{ item.quantity }} x ₹{{
                  item.productId.price
                }}</label
              >
              <div class="total">
                <div class="tm">
                  <strong>Total Amount:</strong> ₹{{ order.totalAmount }}
                </div>
              </div>
            </div>
          </div>
          <div class="btn-group">
            <div class="cancel">
              <button @click="removeOrders(order._id)">Remove</button>
            </div>
            <div class="payment"><button>Payemnt</button></div>
          </div>
        </div>
      </div>
    </div>
    <p class="err" v-else>No Orders Found</p>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { toast } from "vue3-toastify";

const orders = ref([]);
const remove = ref(false);

const loadOrders = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/orders", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    console.log("Orders fetched:", res.data); // Debugging ke liye
    orders.value = res.data;
  } catch (error) {
    console.error("Error loading orders:", error);
  }
};
const removeOrders = async (orderId) => {
  if (!orderId) {
    console.error("Order ID is missing!");
    return;
  }
  remove.value = true;
  try {
    await axios.delete(`http://localhost:3000/api/orders/${orderId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    toast.success("Order removed successfully!");
    orders.value = orders.value.filter((order) => order._id !== orderId);
  } catch (error) {
    console.error("Error removing order:", error);
  } finally {
    remove.value = false;
  }
};
onMounted(() => {
  loadOrders();
});
</script>

<style scoped>
.order-item {
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-evenly;
  grid-gap: 10px;
  border-top: 1px solid #d5d9d9;
  border-bottom: 1px solid #d5d9d9;
}
.orders-page h2 {
  padding: 1rem;
}
.prd-detail {
  display: flex;
  justify-content: space-evenly;
  padding: 1rem;
}
.add-detail {
  padding: 1rem;
}
.prd-img img {
  max-width: 100px;
  height: 115px;
  margin-top: 0.5rem;
}
.prd-list {
  width: 75%;
  margin-bottom: 0.5rem;
}
.total {
  border-top: 2px solid #d5d9d9;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
}
.total .tm {
  margin-top: 0.5rem;
}
.item,
.add {
  padding: 1rem;
  background-color: #f8f9fa;
}

.btn-group {
  grid-column: 2 / span 2;
  display: flex;
  justify-content: center;
  gap: 2rem;
}
.btn-group button {
  width: 150px;
  border: none;
  padding: 5px;
  border: 1px solid;
  border-radius: 9px;
}

.btn-group > .cancel button {
  background-color: lightcoral;
  color: white;
}
.btn-group > .cancel button:hover {
  background-color: red;
  color: white;
}
.btn-group > .payment button {
  background-color: lightgreen;
  color: white;
}
.btn-group > .payment button:hover {
  background-color: green;
}
.err {
  text-align: center;
  font-size: 18px;
  padding: 1rem;
}
</style>
