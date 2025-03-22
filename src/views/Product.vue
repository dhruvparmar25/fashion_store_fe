<template>
  <!-- Main Product Pages Section -->
  <section class="productpages">
    <FilterComponent class="sticky" @update-products="updateProductList">
      <!-- Category Filter -->
      <div class="categoress">
        <header>
          <h3>Category</h3>
          <button @click="toggleCategory">
            {{ isCategoryView ? "∧" : "∨" }}
          </button>
        </header>

        <!-- Render categories dynamically from categories array -->
        <label
          v-for="category in categories"
          :key="category._id"
          class="content"
          :class="{ 'view-content': isCategoryView }"
        >
          <input
            type="checkbox"
            :value="category"
            :checked="productMetas.category?.includes(category)"
            @change="filterProducts($event, 'category')"
          />
          {{ category }}
        </label>
      </div>
      <!-- {{ isCategoryView }}
      {{ isBrandView }} -->
      <!-- Brand Filter (Type) -->
      <div class="brandfilter">
        <header>
          <h3>Type</h3>
          <button @click="toggleBrand">
            {{ isBrandView ? "∧" : "∨" }}
          </button>
        </header>
        <div class="brandList">
          <!-- Radio buttons for "Men" and "Women" types -->
          <label class="content" :class="{ 'view-content': isBrandView }">
            <input
              type="radio"
              value="Men"
              :checked="productMetas.type === 'Men'"
              @change="filterProducts($event, 'type')"
            />
            Men
          </label>
          <label class="content" :class="{ 'view-content': isBrandView }">
            <input
              type="radio"
              :checked="productMetas.type === 'Women'"
              value="Women"
              @change="filterProducts($event, 'type')"
            />
            Women
          </label>
        </div>
      </div>
    </FilterComponent>

    <!-- Product Listing Section -->
    <div class="products">
      <!-- Display products dynamically from prdlists -->
      <ProductPage
        v-for="prdlist in prdlists"
        :key="prdlist._id"
        @click="goToDetails(prdlist)"
        :product="prdlist"
      />
    </div>
  </section>

  <!-- Pagination Section -->
  <div class="pagination">
    <!-- Pagination buttons -->
    <div class="prev">&laquo;</div>
    <div class="page1">1</div>
    <div class="page2">2</div>
    <div class="page3">3</div>
    <div class="page4">4</div>
    <div class="next">&raquo;</div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import ProductPage from "@/components/Cards/ProductPage.vue";
import FilterComponent from "@/components/Filters/FilterComponent.vue";
import axios from "axios";

const router = useRouter();
const route = useRoute();
const productMetas = ref({ category: [], type: null });
const isCategoryView = ref(!!productMetas.value?.category?.length);
const isBrandView = ref(!!productMetas.value?.type);
const prdlists = ref([]);
const categories = ref([]);
const selectedCategories = ref([]);
const selectedTypes = ref([]);

// Watch for changes in route query and refetch products accordingly
watch(
  () => route.query,
  () => {
    setQuery();
  },
  { deep: true }
);
const setQuery = () => {
  console.log("chechk", route.query);

  if (Object.values(route.query).length) {
    const q = route.query;
    if (typeof q.category === "string" && q.category) {
      q.category = [q.category];
    }
    productMetas.value = { ...productMetas.value, ...q };
    fetchProducts();
  } else {
    productMetas.value = { category: [], type: null };
    fetchProducts();
  }
  isCategoryView.value = !!productMetas.value?.category?.length;
  isBrandView.value = !!productMetas.value?.type?.length;
};
const toggleCategory = () => {
  isCategoryView.value = !isCategoryView.value;
};
const toggleBrand = () => {
  isBrandView.value = !isBrandView.value;
};

const goToDetails = (item) => {
  if (!item?._id) return;

  productMetas.value = { category: [], type: null };
  router.push({ name: "ProductDetail", params: { id: item._id }, query: {} });
};

// Fetch products based on current filters
const fetchProducts = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/product", {
      params: productMetas.value,
    });
    prdlists.value = response.data;
  } catch (error) {
    console.error("Error Fetching Products", error);
  }
};

// Fetch categories for the category filter
const fetchCategories = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/category");
    categories.value = response.data;
  } catch (error) {
    console.error("Error Fetching Categories", error);
  }
};

// Filter products based on selected categories or types
const filterProducts = (event, filterType) => {
  const val = event.target.value;

  if (filterType === "category") {
    if (productMetas.value.category.includes(val)) {
      productMetas.value.category = productMetas.value.category.filter(
        (f) => f !== val
      );
    } else {
      productMetas.value.category.push(val);
    }
    productMetas.value.type = null;
  } else if (filterType === "type") {
    productMetas.value.type = val;
    productMetas.value.category = [];
  }

  router.push({
    name: "Product",
    query: {
      type: productMetas.value.type || undefined,
      category: productMetas.value.category.length
        ? productMetas.value.category
        : undefined,
    },
  });
  fetchProducts();
};

const updateProductList = (newProducts) => {
  prdlists.value = newProducts;
};

onMounted(() => {
  fetchCategories();
  setQuery();
});
</script>

<style scoped>
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
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
}

header h3 {
  font-size: 17px;
  text-transform: math-auto;
  font-weight: 700;
  letter-spacing: 2px;
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
  font-size: 16px;
  text-transform: capitalize;
  font-family: monospace;
  font-weight: 500;
}

.categoress {
  border-top: 1px solid #c7cbd4;
}

.sticky {
  position: sticky;
  top: 0;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
}
.pagination div.active {
  background-color: dodgerblue;
  color: white;
}
.pagination div:hover:not(.active) {
  background-color: #ddd;
}
</style>
