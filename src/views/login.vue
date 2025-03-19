<template>
  <section class="login">
    <!-- Main container for login/registration section -->
    <div class="main">
      <!-- Left section displaying an image -->
      <div class="image">
        <img
          src="https://images.bewakoof.com/t640/men-s-blue-the-panda-way-oversized-t-shirt-580637-1676876264-1.jpg"
          alt="Fashion T-shirt"
        />
      </div>

      <!-- Right section containing the login/registration form -->
      <div class="text">
        <img src="/public/Fashion.png" alt="Fashion Logo" />
        <h3>
          {{ data.isRegistration ? "Registration" : "Login" }}
        </h3>
        <div class="box">
          <form @submit.prevent="saveData">
            <!-- Display Name input field if registration is true -->
            <input
              v-if="data.isRegistration"
              v-model="data.name"
              type="text"
              name="Name"
              placeholder="Enter Name"
            />
            <br />

            <!-- Always display Email input field -->
            <input
              type="text"
              v-model="data.email"
              name="Email"
              placeholder="Enter Email"
            />
            <br />

            <!-- Always display Password input field -->
            <input
              v-model="data.password"
              name="Password"
              placeholder="Enter Password"
              type="password"
            />
            <br />

            <!-- Submit button with dynamic text -->
            <button type="submit">
              {{ data.isRegistration ? "Registration" : "Login" }}
            </button>

            <!-- Toggle between Login and Registration forms -->
            <p @click="toggleForm">
              {{
                data.isRegistration
                  ? "Already have an account? Login"
                  : "Don't have an account? Registration"
              }}
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import router from "@/router/router";
import { getHeader } from "@/utils/helpers";

// Reactive state to manage form data (login/registration)
const data = ref({
  isRegistration: false,
  name: "",
  email: "",
  password: "",
});

// Toggle between registration and login form
const toggleForm = () => {
  data.value.isRegistration = !data.value.isRegistration;
};

// Handle form submission (login or registration)
const saveData = () => {
  const endpoint = data.value.isRegistration ? "register" : "login";
  const headers = data.value.isRegistration ? {} : getHeader();

  axios
    .post(`${import.meta.env.VITE_API_BASE_URL}${endpoint}`, data.value, {
      headers,
    })
    .then((res) => {
      if (!data.value.isRegistration) {
        // Store token and user data on successful login
        localStorage.setItem("token", res.data?.token || "");
        localStorage.setItem("user", JSON.stringify(res.data?.user || {}));
        alert("Login Successful!");
        router.push("/").then(() => {
          // window.location.reload();
        });
      } else {
        alert("Registration Successful! Please Login");
        data.value.isRegistration = false;
      }
    })
    .catch((err) => {
      alert(
        data.value.isRegistration
          ? "Registration Failed!"
          : "Invalid Email or Password"
      );
      console.error("Error:", err);
    });
};
</script>

<style scoped>
/* Main layout styling */
.main {
  width: 90%;
  height: 100vh;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: start;
  padding: 1rem;
}

/* Image styling */
.image {
  width: 50%;
  height: 100%;
}

.image img {
  width: 100%;
  height: 100%;
}

/* Form container styling */
.text {
  width: 50%;
  height: 100%;
  text-align: center;
  padding: 2rem;
}

/* Logo image styling */
.text img {
  width: 100px;
  border-radius: 50%;
}

/* Form heading styling */
.text > h3 {
  font-family: "Montserrat";
  font-size: 20px;
  color: #2c3e50;
  font-weight: 600;
  text-transform: uppercase;
}

/* Form box styling */
.box {
  margin: auto;
  width: 400px;
  background-color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 1rem;
}

/* Input and button common styling */
.box input,
.box button {
  width: 80%;
}

/* Input field styling */
.box input {
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  margin-top: 1rem;
}

/* Submit button styling */
.box button {
  height: 40px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: skyblue;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s;
  margin: 1rem 0;
}

/* Button hover effect */
.box button:hover {
  background-color: rgba(0, 0, 255, 0.726);
}

/* Styling for toggle text */
.box p {
  color: skyblue;
  cursor: pointer;
}
</style>
