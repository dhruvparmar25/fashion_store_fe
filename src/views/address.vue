<template>
  <div class="order-container">
    <h2>Delivery Address</h2>

    <form @submit.prevent="placeOrder">
      <div class="form-group">
        <label>Full Name:</label>
        <input
          v-model="address.fullName"
          placeholder="Please Enter Your First Name"
          required
        />
      </div>
      <div class="form-group">
        <label>PHONE NUMBER</label>
        <input
          v-model="address.phoneNumber"
          placeholder="Please Enter Your Phone Number"
          required
        />
      </div>
      <div class="form-group">
        <label>Street</label>
        <input
          v-model="address.street"
          placeholder="Please Enter Your Street Name"
          required
        />
      </div>
      <div class="form-group">
        <label>City</label>
        <input
          v-model="address.city"
          placeholder="Please Enter Your City Name"
          required
        />
      </div>
      <div class="form-group">
        <label>state</label>
        <input
          v-model="address.state"
          placeholder="Please Enter Your State Name"
          required
        />
      </div>
      <div class="form-group">
        <label>Zip Code</label>
        <input
          v-model="address.zipCode"
          placeholder="Please Enter Your ZipCode Name"
          required
        />
      </div>
      <div class="form-group">
        <label>Country</label>
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
import { completeOrderPayment, } from "@/utils/helpers";
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { toast } from "vue3-toastify"; // Importing toast from vue3-toastify
import "vue3-toastify/dist/index.css"; // Importing toastify CSS

const props = defineProps(['cart'])

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
    const cartId = props.cart?._id;
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
    toast.success(" Delivery Address added successfully", {
      autoClose: 2000,
      position: "top-right",
    });
    localStorage.removeItem("cartId");
   await completeOrderPayment(res.data)

  } catch (error) {
    console.error("Address failed:", error);
    const errorMessage = error.response?.data?.msg || "somthing went a wrong";
    toast.error(errorMessage);
  }
};
</script>

<style scoped>
.order-container h2 {
  text-transform: uppercase;
  font-size: 1rem;
  margin: 1rem 0;
  text-align: center;
}

form {
  max-width: 700px; /* 👈 Width badha diya */
  margin: 10px auto;
  padding: 10px; /* 👈 Height kam karne ke liye padding ghata diya */
  background-color: #fafafa;
  border: 1px solid #ddd;
  border-radius: 6px;
}

.form-group {
  margin-bottom: 0.4rem; /* 👈 Spacing aur chhota kiya */
}

label {
  font-size: 0.85rem;
  color: #222;
  margin-bottom: 0.1rem;
  display: block;
}

input {
  width: 100%;
  padding: 6px 8px; /* 👈 Height kam karne ke liye padding kam */
  font-size: 0.9rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button.order-btn {
  width: 100%;
  padding: 8px; /* 👈 Button height bhi kam */
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 0.95rem;
  margin-top: 8px;
  cursor: pointer;
}

button.order-btn:hover {
  background-color: #0056b3;
}
</style>


