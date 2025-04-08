<template>
  <h1>Product Page</h1>
  <div class="addPrd">
    <form @submit.prevent="AddAdminProducts">
      <h2>Add Product</h2>
      <div class="detail">
        <label>Product Name:</label><br />
        <input
          type="text"
          v-model="form.name"
          placeholder="Enter product name"
          required
        />
      </div>
      <div class="brand">
        <label>Brand:</label><br />
        <input
          type="text"
          v-model="form.brand"
          placeholder="Example:@Boogy"
          required
        />
      </div>
      <div class="type">
        <label>Type:</label><br />
        <input
          type="text"
          v-model="form.type"
          placeholder="Example:@Men"
          required
        />
      </div>
      <div class="add-price">
        <label>Price :[Indian ₹]</label><br />
        <input type="number" v-model="form.price" required />
      </div>
      <div class="size">
        <label>Size:</label><br />
        <input type="checkbox" v-model="form.size" value="S" />S
        <input type="checkbox" v-model="form.size" value="M" />M
        <input type="checkbox" v-model="form.size" value="L" />L
        <input type="checkbox" v-model="form.size" value="XL" />Xl
        <input type="checkbox" v-model="form.size" value="XXL" />XXl
      </div>
      <div class="offer">
        <label>Offer:</label><br />
        <input placeholder="14%" type="text" v-model="form.offer" required />
      </div>
      <div class="design">
        <label>Design:</label><br />
        <input
          type="text"
          v-model="form.design"
          placeholder="Enter design"
          required
        />
      </div>
      <div class="rating">
        <label>Rating:[1 to 5]</label><br />
        <input
          type="number"
          v-model="form.rating"
          min="1"
          max="5"
          step="1"
          required
        />
      </div>
      <div class="add-category">
        <label>Category:</label><br />
        <input
          type="text"
          v-model="form.category"
          placeholder="Enter category"
          required
        />
      </div>
      <div class="label">
        <label>Label:</label><br />
        <input
          type="text"
          v-model="form.label"
          placeholder="Enter label"
          required
        />
      </div>
      <div class="image">
        <label for="image-upload"> Product Image : </label><br />
        <input @change="uploadImage" type="file" accept="image/*" required />
      </div>
      <div class="submit">
        <button type="button" @click="AddAdminProducts">Add Product</button>
      </div>
    </form>
  </div>
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
</template>
<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { toast } from "vue3-toastify";

const form = ref({
  brand: "",
  price: "",
  size: [],
  offer: "",
  design: "",
  rating: "",
  category: "",
  label: "",
  image: "",
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
const uploadImage = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      form.value.image = reader.result; // yeh image ka base64 URL set karega
      console.log("Image preview URL:", form.value.image);
    };
    reader.readAsDataURL(file); // file ko base64 string mein convert karta hai
  }
};

const AddAdminProducts = async () => {
  try {
    const res = await axios.post(
      "http://localhost:3000/api/admin/products",
      form.value,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
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
/* form */
.addPrd {
  max-width: 500px;
  margin: 50px auto;
  background: #fff;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: "Segoe UI" sans-serif;
}
.addPrd h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}
.addPrd div {
  margin-bottom: 15px;
}
.addPrd label {
  font-weight: 600;
  display: block;
  color: #555;
}
.addPrd input[type="text"],
.addPrd input[type="number"] {
  width: 100%;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  outline: none;
  transition: border 0.3s;
}
.addPrd input[type="text"]:focus,
.addPrd input[type="number"]:focus {
  border-color: #3498db;
}
.addPrd .size input[type="checkbox"] {
  margin-right: 5px;
  font-size: 18px;
}
.addPrd .size label {
  margin-right: 10px;
}

.image input[type="file"] {
  color: red;
}
.submit {
  text-align: center;
}

.submit button {
  background-color: #27ae60;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  transition: background-color 0.3s;
}

.submit button:hover {
  background-color: #219150;
}
</style>
