<template>
  <section class="productpages">
    <FilterComponent>
      <!-- Category Filter -->
      <div class="categoress">
        <header>
          <h3>Category</h3>
          <button style="background-color: royalblue" @click="toggleCategory">
            {{ isCategoryView ? "-" : "+" }}
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
          <h3>Brand</h3>
          <button style="background-color: royalblue" @click="toggleBrand">
            {{ isBrandView ? "-" : "+" }}
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
        :key="prdlist.id"
        :product="prdlist"
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import ProductPage from "@/components/Cards/ProductPage.vue";
import FilterComponent from "../components/Filters/FilterComponent.vue";

const isCategoryView = ref(false);
const isBrandView = ref(false);

const toggleCategory = () => {
  isCategoryView.value = !isCategoryView.value;
};

const toggleBrand = () => {
  isBrandView.value = !isBrandView.value;
};
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
  font-size: 22px;
  background-color: white;
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
  color: white;
  background: black;
  font-size: 16px;
  padding: 5px;
  border-radius: 10px;
}
button {
  color: white;
  background-color: royalblue;
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
  margin-top: 1rem;
}
.categoress {
  border-top: 1px solid #c7cbd4;
  margin-top: 1rem;
}
</style>
