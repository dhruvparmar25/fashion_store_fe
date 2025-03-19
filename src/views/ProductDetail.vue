<template>
  <section class="productdetail" v-if="product">
    <div class="main">
      <div class="image">
        <div class="mainimage">
          <img :src="product.image" />
        </div>
      </div>
      <div class="detail">
        <div class="productdetail">
          <div class="brand">{{ product.brand }}</div>

          <div class="name" style="margin-top: 1rem">{{ product.name }}</div>
          <div class="combine">
            <h4 class="price">
              <i class="fa-solid fa-indian-rupee-sign"></i> {{ product.price }}
            </h4>
            <h4 class="offer">{{ product.discount }}</h4>
          </div>
          <div class="combine">
            <div class="design">{{ product.design }}</div>
            <h4 class="rating">
              <i class="fa-solid fa-star"></i>{{ product.rating }}
            </h4>
          </div>
          <div class="combine">
            <h6 class="category">{{ product.category }}</h6>
            <div
              v-if="product.tags?.length"
              v-for="tag in product.tags"
              class="label"
            >
              {{ tag.label }}
            </div>
          </div>
        </div>
        <button class="addtocart" @click="addToCart" type="button">
          <i class="fa-solid fa-bag-shopping"></i> Add to bag
        </button>
      </div>
    </div>
  </section>
  <p v-else>Loading...</p>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";

const route = useRoute();
const router = useRouter();
const product = ref(null);
const cart = ref([]);

onMounted(async () => {
  console.log("Route Params:", route.params);
  console.log("Product ID:", route.params.id);

  const productId = route.params.id;

  if (!productId) {
    console.error("Product ID not found!");
    return;
  }

  try {
    const response = await axios.get(
      `http://localhost:3000/api/product/${productId}`
    );
    product.value = response.data;
  } catch (error) {
    console.error("Error fetching product details:", error);
  }
});

const loadCart = () => {
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart.value = JSON.parse(storedCart);
  }
};

const saveCart = () => {
  localStorage.setItem("cart", JSON.stringify(cart.value));
};

const addToCart = () => {
  if (!product.value) return;

  const existingItem = cart.value.find((item) => item.id === product.value.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.value.push({ ...product.value, quantity: 1 });
  }

  saveCart();
  alert("Product added to cart!");

  router.push("/cart");
};
</script>

<!-- css -->
<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: start;
  width: 90%;
  margin: auto;
  gap: 1rem;
}
.image {
  width: 40%;
}
.detail {
  width: 40%;
}
.mainimage img {
  width: 100%;
  height: auto;
}

.productdetail {
  padding: 0%;
  margin: 0;
}
.brand,
.name {
  font-family: "Montserrat";
  font-size: 18px;
  font-weight: 700;
  color: black;
}
.desc,
.design {
  font-family: "Montserrat";
  font-size: 14px;
  color: rgb(115, 126, 147);
}
.combine {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
}
.price {
  font-family: "Montserrat";
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  color: rgb(54, 53, 55);
}
.offer {
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: rgb(0, 140, 45);
  margin-right: 200px;
}
.category {
  font-family: "Montserrat";
  font-weight: 600;
  background-color: rgb(105, 104, 106);
  color: white;
  border: 1px solid rgb(115, 115, 115);
  font-size: 14px;
  padding: 5px;
}
.rating {
  font-family: "Montserrat";
  font-size: 14px;
  font-weight: 700;
  margin-right: 200px;
}
.rating i {
  color: gold;
  margin-right: 0.5rem;
}

.label {
  font-family: "Montserrat";
  font-size: 14px;
  color: rgb(115, 115, 115);
  border: 1px solid rgb(115, 115, 115);
  padding: 5px;
  width: fit-content;
  margin-right: 200px;
}
.addtocart {
  background-color: #ffd232;
  font-family: "Montserrat";
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 24px;
  padding: 1rem;
  width: fit-content;
  border: none;
  border-radius: 10px;
  color: rgb(41, 45, 53);
  margin-top: 2rem;
}
.addtocart i {
  margin-right: 1rem;
}
</style>
