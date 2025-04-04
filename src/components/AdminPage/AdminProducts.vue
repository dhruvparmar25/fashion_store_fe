<template>
  <h1>Product Page</h1>
  <div class="top">
    <div class="srch">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search.."
        @keyup.enter="fetchAdminProducts"
        name="search"
      />
      <button @click="fetchAdminProducts">
        <i class="fa fa-search"></i>
      </button>
    </div>
    <div class="prd-btn"><button>+ Add Product</button></div>
  </div>
  <div class="produts-cards">
    <div class="admin-cards">
      <div class="card-detail" v-for="product in products" :key="product._id">
        <div class="card-img">
          <img :src="product.image" />
        </div>
        <div class="title">
          <h4>{{ product.name }}</h4>
        </div>
        <div class="card-field">
          <div class="price">₹ {{ product.price }}</div>
          <div class="category">
            {{ product.category }}
          </div>
        </div>
        <div class="card-field">
          <div class="edit"><button type="button">Edit</button></div>
          <div class="remove">
            <button @click="removeAdminProduct(product)" type="button">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="addPrd">
    <form action="">
      <div class="brand">
        <label>Brand:</label><br />
        <input
          type="text"
          v-model="form.brand"
          placeholder="Example:@Boogy"
          required
        />
      </div>
    </form>
  </div>
</template>
<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { toast } from "vue3-toastify";

const form = ref({
  brand: "",
  price: "",
  size: "",
  offer: "",
  design: "",
  rating: "",
  category: "",
  label: "",
  images: [],
});
const searchQuery = ref("");
const products = ref([]);
onMounted(() => {
  fetchAdminProducts();
});

const fetchAdminProducts = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/admin/products", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      params: { q: searchQuery.value }, // <-- search query bhej rahe hai
    });
    products.value = res.data;
    console.log("Fetched products:", res.data);
  } catch (error) {
    console.log("Error Fetching Products", error);
  }
};

const AddAdminProducts = async () => {
  try {
    const res = await axios.post("http://localhost:3000/api/admin/products", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
  } catch (error) {}
};

//Remove Product
const removeAdminProduct = async (product) => {
  if (!product || !product._id) {
    console.error("error:product id is missing");
    return;
  }
  const id = product._id;
  try {
    await axios.delete(`http://localhost:3000/api/admin/products/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    products.value = products.value.filter((i) => i._id !== id);
    toast.success("product remove");
  } catch (error) {
    console.error("Error Removing Item :", error);
  }
};
</script>

<style scoped>
.admin-cards {
  height: auto;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
}
.card-detail {
  padding: 0.5rem;
  border-radius: 10px;
  background-color: rgba(231, 229, 229, 0.938);
}
.card-img img {
  width: 100%;
  border-radius: 10px;
  margin-bottom: 1rem;
}
.title h4 {
  font-size: 14px;
  font-weight: bold;
  height: 65px;
}
.card-field {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.price {
  font-size: large;
  font-weight: bold;
  margin-bottom: 10px;
  color: red;
}
.category {
  color: green;
}
.edit button,
.remove button {
  border: none;
  border-radius: 5px;
  width: 80px;
  padding: 5px;
}
.edit button,
.prd-btn button {
  background-color: lightblue;
}
.remove button {
  background-color: lightcoral;
}
.edit button:hover,
.prd-btn button:hover {
  background-color: blue;
  color: white;
}
.remove button:hover {
  background-color: red;
  color: white;
}
.prd-btn button {
  border: none;
  border-radius: 5px;
  width: fit-content;
  padding: 5px;
}
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}
.srch {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
