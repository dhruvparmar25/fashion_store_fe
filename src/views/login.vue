<template>
  <section class="login">
    <div class="main">
      <div class="image">
        <img
          src="https://images.bewakoof.com/t640/men-s-blue-the-panda-way-oversized-t-shirt-580637-1676876264-1.jpg"
          alt="Fashion T-shirt"
        />
      </div>
      <div class="text">
        <img src="/public/Fashion.png" alt="Fashion Logo" />
        <h3>
          {{ data.isRegistration ? "Registration" : "Login" }}
        </h3>
        <div class="box">
          <form @submit.prevent="saveData">
            <input
              v-if="data.isRegistration"
              v-model="data.name"
              type="text"
              name="Name"
              placeholder="Enter Name"
            />
            <br />

            <input
              type="text"
              v-model="data.email"
              name="Email"
              placeholder="Enter Email"
            />
            <br />

            <input
              v-model="data.password"
              name="Password"
              placeholder="Enter Password"
              type="password"
            />
            <br />

            <button type="submit">
              {{ data.isRegistration ? "Registration" : "Login" }}
            </button>

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

const data = ref({
  isRegistration: false,
  name: "",
  email: "",
  password: "",
});

const toggleForm = () => {
  data.value.isRegistration = !data.value.isRegistration;
};

const saveData = () => {
  const endpoint = data.value.isRegistration ? "register" : "login";
  const headers = data.value.isRegistration ? {} : getHeader();

  axios
    .post(`${import.meta.env.VITE_API_BASE_URL}${endpoint}`, data.value, {
      headers,
    })
    .then((res) => {
      if (!data.value.isRegistration) {
        localStorage.setItem("token", res.data?.token || "");
        localStorage.setItem("user", JSON.stringify(res.data?.user || {}));
        alert("Login Successful!");
        router.push("/").then(() => {
          window.location.reload();
        });
        // window.location.reload();
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
.main {
  width: 90%;
  height: 100vh;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: start;
  padding: 1rem;
}

.image {
  width: 50%;
  height: 100%;
}

.image img {
  width: 100%;
  height: 100%;
}

.text {
  width: 50%;
  height: 100%;
  text-align: center;
  padding: 2rem;
}

.text img {
  width: 100px;
  border-radius: 50%;
}

.text > h3 {
  font-family: "Montserrat";
  font-size: 20px;
  color: #2c3e50;
  font-weight: 600;
  text-transform: uppercase;
}

.box {
  margin: auto;
  width: 400px;
  background-color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 1rem;
}

.box input,
.box button {
  width: 80%;
}

.box input {
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  margin-top: 1rem;
}

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

.box button:hover {
  background-color: rgba(0, 0, 255, 0.726);
}

.box p {
  color: skyblue;
  cursor: pointer;
}
</style>
