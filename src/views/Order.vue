<template>
  <div class="order-container">
    <h2>Checkout</h2>
    <form @submit.prevent="placeOrder">
      <div class="form-group">
        <label>Full Name:</label><br />
        <input
          v-model="address.fullName"
          placeholder="Please Enter Your First Name"
          required
        />
      </div>
      <div class="form-group">
        <label>PHONE NUMBER</label><br />
        <input
          v-model="address.phoneNumber"
          placeholder="Please Enter Your Phone Number"
          required
        />
      </div>
      <div class="form-group">
        <label>Street</label><br />
        <input
          v-model="address.street"
          placeholder="Please Enter Your Street Name"
          required
        />
      </div>
      <div class="form-group">
        <label>City</label><br />
        <input
          v-model="address.city"
          placeholder="Please Enter Your City Name"
          required
        />
      </div>
      <div class="form-group">
        <label>state</label><br />
        <input
          v-model="address.state"
          placeholder="Please Enter Your State Name"
          required
        />
      </div>
      <div class="form-group">
        <label>Zip Code</label><br />
        <input
          v-model="address.zipCode"
          placeholder="Please Enter Your ZipCode Name"
          required
        />
      </div>
      <div class="form-group">
        <label>Country</label><br />
        <input
          v-model="address.country"
          placeholder="Please Enter Your Country Name"
          required
        />
      </div>
      <button type="submit" class="order-btn">Place Order</button>
    </form>
  </div>
</template>
<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const address = ref({
  fullName: "",
  phoneNumber: "",
  street: "",
  city: "",
  state: "",
  zipCode: "",
  country: "",
});

const placeOrder = async () => {
  try {
    const cartId = localStorage.getItem("cartId");
    if (!cartId) {
      alert("Cart is empty!");
      return;
    }
    console.log("using cart ID:", cartId);

    const res = await axios.post(
      `http://localhost:3000/api/orders/${cartId}`,
      { address: address.value },
      { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
    );
    alert("Order placed successfully");
    localStorage.removeItem("cartId");
    router.push("/orders");
  } catch (error) {
    console.error("Order failed:", error);
    alert("Order failed");
  }
};
</script>
<style scoped></style>
