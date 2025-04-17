<template>
  <div class="orders-page">
    <h2>Your Orders</h2>
    <div v-if="orders.length > 0">
      <div v-for="order in orders" :key="order._id" class="order-item">
        <!-- {{ order }} -->
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
          <div class="item-label">
            <h4>Ordered Items:</h4>

            <p>
              Order-Date: {{ formatDate(order.updatedAt || order.createdAt) }}
            </p>
          </div>
          <div
            v-for="item in order.items"
            v-if="order?.items?.length"
            :key="item.productId?._id"
            class="prd-detail"
          >
            <div class="prd-img">
              <img :src="item.productId?.image" />
            </div>

            <div class="prd-list">
              <!-- {{ item }} -->
              <label><strong>Order Id:</strong> {{ order._id }}</label
              ><br />
              <label
                ><strong>Product Name:</strong>
                {{ item.productId?.name }}</label
              ><br />
              <label><strong>Product Size:</strong> {{ item.size }} </label
              ><br />
              <label
                ><strong>Quantiy:</strong> {{ item.quantity }} x ₹{{
                  item.productId.price
                }}</label
              ><br />
              <label><strong>Price:</strong> {{ item.price }} </label>
            </div>
          </div>
          <div class="total">
            <strong style="margin-right: 1rem">Total Amount : </strong> ₹{{
              order.totalAmount
            }}
          </div>
          <!-- {{ order.status }} -->
          <div class="paymentMessage" v-if="order.status == 'Success'">
            <p>Order Completed!!</p>
            <button @click="openBillModal(order)">BillView</button>
            <Modal v-if="showBillModal" @close="showBillModal = false">
              <div class="bill-modal">
                <h3>Bill Details</h3>
                <p><strong>Order ID:</strong> {{ selectedOrder._id }}</p>
                <p>
                  <strong>Total Amount:</strong> ₹{{
                    selectedOrder.totalAmount
                  }}
                </p>
                <p>
                  <strong>Order Date:</strong>
                  {{
                    formatDate(
                      selectedOrder.updatedAt || selectedOrder.createdAt
                    )
                  }}
                </p>
                <h4>Items:</h4>
                <ul>
                  <li
                    v-for="item in selectedOrder.items"
                    :key="item.productId._id"
                  >
                    {{ item.productId.name }} - {{ item.quantity }} x ₹{{
                      item.productId.price
                    }}
                    = ₹{{ item.price }}
                  </li>
                </ul>
              </div>
            </Modal>
          </div>
          <div class="btn-group" v-if="order.status !== 'Success'">
            <div class="cancel">
              <button @click="removeOrders(order._id)">Cancel Order</button>
            </div>
            <div class="payment">
              <button @click="payment(order)">Payment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p class="err" v-else>No Orders Found</p>
  </div>
</template>

<script setup>
import { completeOrderPayment } from "@/utils/helpers";
import axios from "axios";
import { onMounted, ref } from "vue";
import { toast } from "vue3-toastify";
import Modal from "@/components/commons/Modal.vue";

const orders = ref([]);
const remove = ref(false);
const showBillModal = ref(false);
const selectedOrder = ref(null); // jis order ka bill dikhana hai

const openBillModal = (order) => {
  selectedOrder.value = order;
  showBillModal.value = true;
};

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

const payment = async (order) => {
  await completeOrderPayment(order, loadOrders);
};
const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short", // ya "long"
    year: "numeric",
  });
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
.item-label {
  display: flex;
  justify-content: space-between;
}
.item-label p {
  background-color: black;
  color: white;
  padding: 5px;
  font-size: 14px;
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
  justify-content: flex-end;
  margin-bottom: 1rem;
}
.total .tm {
  margin-top: 0.5rem;
}
.item,
.add {
  padding: 1rem;
  background-color: #f8f9fa;
}
.paymentMessage p {
  font-size: 27px;
  color: green;
  text-align: end;
  font-style: italic;
}
.btn-group {
  grid-column: 2 / span 2;
  display: flex;
  justify-content: flex-end;
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

.bill-modal {
  padding: 1rem;
  min-width: 300px;
}
</style>
