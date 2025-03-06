<template>
  <section class="footer">
    <div v-for="nav in footer" class="info">
      <h1>{{ nav.title }}</h1>
      <p v-for="navChild in nav.children || []">
        {{ navChild.title }}
      </p>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";

const footer = ref([
  {
    title: "Info",
    children: [
      {
        title: "Track Your Order",
      },
      {
        title: "Our Blog",
      },
      {
        title: "Privacy policy",
      },
      {
        title: "Shipping",
      },
      {
        title: "Contact Us",
      },
      {
        title: "Help",
      },
      {
        title: "Community",
      },
    ],
  },
  {
    title: "About",
    children: [
      {
        title: "History",
      },
      {
        title: "Our Team",
      },
      {
        title: "Services",
      },
      {
        title: "Company",
      },
      {
        title: "Manufacture",
      },
      {
        title: "Wholesale",
      },
      {
        title: "Retail",
      },
    ],
  },
  {
    title: "Track Your Order",
    children: [
      {
        title: "Track Your Order",
      },
      {
        title: "Our Blog",
      },
      {
        title: "Privacy policy",
      },
      {
        title: "Shipping",
      },
      {
        title: "Contact Us",
      },
      {
        title: "Help",
      },
      {
        title: "Community",
      },
    ],
  },
  {
    title: "Popular",
    children: [
      {
        title: "Prices Drop",
      },
      {
        title: "New Products",
      },
      {
        title: "Best Sales",
      },
      {
        title: "Stores",
      },
      {
        title: "Login",
      },
      {
        title: "Cart",
      },
      {
        title: "",
      },
    ],
  },
  {
    title: "Mens Collection",
    children: [
      {
        title: "Delivery",
      },
      {
        title: "About Us",
      },
      {
        title: "Shoes",
      },
      {
        title: "Contact Us",
      },
    ],
  },
  {
    title: "Info",
    children: [
      {
        title: "Track Your Order",
      },
      {
        title: "Our Blog",
      },
      {
        title: "Privacy policy",
      },
      {
        title: "Shipping",
      },
      {
        title: "Contact Us",
      },
      {
        title: "Help",
      },
      {
        title: "Community",
      },
    ],
  },
]);
</script>
<style scoped>
.footer {
  display: flex;
  align-items: start;
  justify-content: space-between;
  margin: 3rem 1rem;

  /* margin: 0rem 1rem; */
}
.footer h1 {
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 1rem;
}
.footer > div p {
  margin-bottom: 1rem;
}
</style>
