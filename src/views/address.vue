<template>
  <div class="order-container">
    <h2>Delivery Address</h2>
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
import { toast } from "vue3-toastify"; // Importing toast from vue3-toastify
import "vue3-toastify/dist/index.css"; // Importing toastify CSS

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
      toast.error("Cart is empty!");
      return;
    }
    console.log("using cart ID:", cartId);

    const res = await axios.post(
      `http://localhost:3000/api/orders/${cartId}`,
      { address: address.value },
      { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
    );
    toast.success("Order placed successfully");
    localStorage.removeItem("cartId");
    router.push("/orders");
  } catch (error) {
    console.error("Order failed:", error);
    toast.error("Order failed");
  }
};
</script>
<style scoped>
.order-container h2 {
  text-transform: uppercase;
  padding: 1rem;
}

form {
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 0.5rem;
}
label {
  font-weight: bold;
  color: #333;
  display: block;
}
input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 1rem;
  font-size: 1rem;
  box-sizing: border-box;
}
button.order-btn {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
}
button.order-btn:hover {
  background-color: #0056b3;
}
</style>
