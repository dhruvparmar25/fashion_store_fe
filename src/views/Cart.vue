<template>
  <div class="main">
    <div class="bag">
      <div class="title"><h4>Shopping Bag</h4></div>
      <div v-if="cart.length > 0" class="cart-items">
        <div v-for="item in cart" :key="item.id" class="cart-item">
          <img :src="item.image" alt="product image" class="cart-item-image" />
          <div class="cart-item-details">
            <h5>{{ item.name }}</h5>
            <p>Price: ₹{{ item.price }}</p>
            <div class="quantity-control">
              <button @click="decreaseQuantity(item)" class="qty-btn">-</button>
              <span>{{ item.quantity }}</span>
              <button @click="increaseQuantity(item)" class="qty-btn">+</button>
            </div>
            <button @click="removeFromCart(item.id)" class="remove-btn">
              Remove
            </button>
          </div>
        </div>
      </div>
      <p v-else class="empty-cart">Your cart is empty.</p>
    </div>
    <div class="summary">
      <div class="title"><h4>Order Summary</h4></div>
      <p>
        Total Items: <span>{{ totalItems }}</span>
      </p>
      <p>
        Total Price: ₹<span>{{ totalPrice }}</span>
      </p>
      <button class="checkout-btn">Proceed to Checkout</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const cart = ref([]);

const loadCart = () => {
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart.value = JSON.parse(storedCart);
  }
};

const saveCart = () => {
  localStorage.setItem("cart", JSON.stringify(cart.value));
};

const increaseQuantity = (item) => {
  item.quantity++;
  saveCart();
};

const decreaseQuantity = (item) => {
  if (item.quantity > 1) {
    item.quantity--;
  } else {
    cart.value = cart.value.filter((cartItem) => cartItem.id !== item.id);
  }
  saveCart();
};

const removeFromCart = (id) => {
  cart.value = cart.value.filter((item) => item.id !== id);
  saveCart();
};

const totalItems = computed(() =>
  cart.value.reduce((sum, item) => sum + item.quantity, 0)
);
const totalPrice = computed(() =>
  cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
);

onMounted(() => {
  loadCart();
});
</script>

<style scoped>
.main {
  width: 90%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  padding: 2rem 0;
}

.bag {
  width: 65%;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.title h4 {
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 15px;
}

.cart-items {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.cart-item {
  display: flex;
  gap: 15px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #f9f9f9;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.cart-item:hover {
  transform: translateY(-3px);
  box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.1);
}

.cart-item-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid #ddd;
}

.cart-item-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.cart-item-details h5 {
  font-size: 16px;
  font-weight: 600;
  color: #444;
}

.cart-item-details p {
  font-size: 14px;
  color: #777;
}

.quantity-control {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
}

.qty-btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 5px 12px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;
}

.qty-btn:hover {
  background: #0056b3;
}

.remove-btn {
  background: #ff4d4d;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;
  width: fit-content;
}

.remove-btn:hover {
  background: #e60000;
}

.empty-cart {
  font-size: 16px;
  color: #777;
  text-align: center;
  margin-top: 10px;
}

.summary {
  width: 30%;
  background: #f8f8f8;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.summary p {
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin: 10px 0;
}

.summary p span {
  font-weight: 600;
  color: #111;
}

.checkout-btn {
  width: 100%;
  background: #28a745;
  color: white;
  font-size: 16px;
  font-weight: 600;
  padding: 10px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;
}

.checkout-btn:hover {
  background: #218838;
}

@media (max-width: 768px) {
  .main {
    flex-direction: column;
    align-items: center;
  }

  .bag,
  .summary {
    width: 100%;
  }

  .cart-item {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .cart-item-image {
    width: 100px;
    height: 100px;
  }
}
</style>
