<template>
  <section class="login">
    <div class="main">
      <div class="image">
        <img
          src="https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-OS-T-Shirts-1735907878.jpg"
        />
      </div>
      <div class="text">
        <img src="\assest\Fashion.png" alt="" />
        <h3>{{ isRegistration ? "Registration" : "Login" }}</h3>
        <div class="box">
          <input
            v-if="isRegistration"
            type="text"
            name="Name"
            placeholder="Enter Name"
          /><br />

          <input type="text" name="Email" placeholder="Enter Email" /><br />
          <input
            type="text"
            name="Password"
            placeholder="Enter Password"
          /><br />
          <button type="button">Login</button>
          <p @click="toggleForm">
            {{
              isRegistration
                ? "Already have an account? Login"
                : "Don't have an account? Registration"
            }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<!-- js -->
<script setup>
import { ref } from "vue";

const isRegistration = ref(false);

const toggleForm = () => {
  isRegistration.value = !isRegistration.value;
};
</script>
<!-- style -->

<style scoped>
.main {
  width: 90%;
  height: 100vh;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: start;
  padding: 1rem;
  /* background-color: black; */
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
  border: 1px solid white;
  margin: auto;
  width: 400px;
  background-color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 1rem;
}
.box input {
  width: 80%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  transition: 0.3s;
  margin-top: 1rem;
  width: 80%;
}
.box button {
  width: 80%;
  height: 40px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: skyblue;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s;
  margin: 1rem 0rem;
}
.box button:hover {
  background-color: rgba(0, 0, 255, 0.726);
}
.box p {
  color: skyblue;
  cursor: pointer;
}
</style>
