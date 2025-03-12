<template>
  <section class="productpages">
    <FilterComponent class="sticky">
      <!-- Category Filter -->
      <div class="categoress">
        <header>
          <h3><i class="fa-solid fa-circle"></i>Category</h3>
          <button @click="toggleCategory">
            {{ isCategoryView ? "∧" : "∨" }}
          </button>
        </header>
        <div class="categoryList">
          <label class="content" :class="{ 'view-content': isCategoryView }">
            <input type="checkbox" value="T-Shirt" /> T-Shirt
          </label>
          <label class="content" :class="{ 'view-content': isCategoryView }">
            <input type="checkbox" value="Vest" /> Vest
          </label>
          <label class="content" :class="{ 'view-content': isCategoryView }">
            <input type="checkbox" value="Sweatshirt" /> Sweatshirt
          </label>
        </div>
      </div>

      <!-- Brand Filter -->
      <div class="brandfilter">
        <header>
          <h3><i class="fa-solid fa-circle"></i>Brand</h3>
          <button @click="toggleBrand">
            {{ isBrandView ? "∧" : "∨" }}
          </button>
        </header>
        <div class="brandList">
          <label class="content" :class="{ 'view-content': isBrandView }">
            <input type="checkbox" value="Boogy®" /> Boogy®
          </label>
          <label class="content" :class="{ 'view-content': isBrandView }">
            <input type="checkbox" value="Nike" /> Nike
          </label>
          <label class="content" :class="{ 'view-content': isBrandView }">
            <input type="checkbox" value="Adidas" /> Adidas
          </label>
        </div>
      </div>
    </FilterComponent>
    <div class="products">
      <ProductPage
        v-for="prdlist in prdlists"
        :key="prdlist._id"
        @click="goToDetails(prdlist)"
        :product="prdlist"
      />
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import ProductPage from "@/components/Cards/ProductPage.vue";
import FilterComponent from "@/components/Filters/FilterComponent.vue";
import axios from "axios";

const isCategoryView = ref(false);
const isBrandView = ref(false);
const router = useRouter();
const prdlists = ref([]);

const goToProductDetail = (id) => {
  router.push(`/product/${id}`);
};

const toggleCategory = () => {
  isCategoryView.value = !isCategoryView.value;
};

const toggleBrand = () => {
  isBrandView.value = !isBrandView.value;
};
const goToDetails = (item) => {
  console.log(item?._id);
  if (!item?._id) return;
  router.push({
    name: "ProductDetail",
    params: {
      id: item?._id,
    },
  });
};
onMounted(async () => {
  await axios
    .get("http://localhost:3000/api/product")
    .then((resp) => {
      prdlists.value = resp.data;
      console.warn(resp.data);
    })
    .catch((error) => {
      console.log("Error Fetching Products", error);
    });
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

.productpages {
  width: 92%;
  margin: auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.fillter {
  width: 18%;
  height: 100vh;
  font-size: 2rem;
  font-weight: 700;
}
.cattitle {
  font-size: 16px;
  text-transform: uppercase;
}

.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 78%;
}
.content {
  display: none;
}
.view-content {
  display: block;
}

.fillter button {
  background-color: yellow;
  border: none;
  text-decoration: dotted;
}

header {
  display: flex;
  justify-content: stretch;
  align-items: center;
  margin-top: 1rem;
}
header h3 {
  font-size: 16px;
  border-radius: 10px;
}
header > h3 i {
  border-radius: 50%;
  color: rgb(199, 203, 212);
  margin-right: 0.5rem;
}
button {
  color: black;
  border-radius: 10px;
  font-size: 12px;
  width: 40px;
  font-weight: 700;
}

label,
input {
  font-family: "Monster";
  font-size: 16px;
  width: 300;
  color: rgb(54, 53, 55);
}

.categoryList {
  margin-top: 0.5rem;
}
.categoress {
  border-top: 1px solid #c7cbd4;
}
.sticky {
  position: sticky;
  top: 0;
}
</style>
