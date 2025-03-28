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
              value="Women"
              :checked="productMetas.type === 'Women'"
              @change="filterProducts($event, 'type')"
            />
            Women
          </label>
        </div>
      </div>
    </FilterComponent>

    <!-- Product Listing Section -->
    <div class="products">
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
    <button @click="prePage" :disabled="currenPage === 1" class="prev">
      &laquo;
    </button>
    <button
      v-for="page in paginationNumbers"
      :key="page"
      @click="changePage(page)"
      :class="{ active: currenPage === page }"
    >
      {{ page }}
    </button>
    <button @click="nextPage" :disabled="prdlists.length < perPage">
      &raquo;
    </button>
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
const currenPage = ref(1);
const perPage = 12;

// Pagination numbers (Hardcoded for now, can be dynamic)
const paginationNumbers = computed(() => {
  return [1, 2, 3, 4];
});

// Fetch categories and set initial query on component mount
onMounted(() => {
  fetchCategories();
  setQuery();
});

// Watch for changes in route query and refetch products accordingly
watch(
  () => route.query,
  () => {
    setQuery();
  },
  { deep: true }
);

// Set query parameters based on URL
const setQuery = () => {
  if (Object.values(route.query).length) {
    const q = route.query;
    if (typeof q.category === "string" && q.category) {
      q.category = [q.category];
    }
    productMetas.value = { ...productMetas.value, ...q };

    if (q.category?.length) {
      productMetas.value.type = null;
    }
    fetchProducts();
  } else {
    productMetas.value = { category: [], type: null };
    fetchProducts();
  }
  isCategoryView.value = !!productMetas.value?.category?.length;
  isBrandView.value = !!productMetas.value?.type?.length;
};

// Toggle category and brand views
const toggleCategory = () => {
  isCategoryView.value = !isCategoryView.value;
};
const toggleBrand = () => {
  isBrandView.value = !isBrandView.value;
};

// Navigate to product details page
const goToDetails = (item) => {
  if (!item?._id) return;
  productMetas.value = { category: [], type: null };
  router.push({ name: "ProductDetail", params: { id: item._id }, query: {} });
};

// Fetch products from API
const fetchProducts = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/product", {
      params: productMetas.value,
      page: currenPage.value,
      per_page: perPage,
    });
    prdlists.value = response.data;
  } catch (error) {
    console.error("Error Fetching Products", error);
  }
};

// Fetch categories from API
const fetchCategories = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/category");
    categories.value = response.data;
  } catch (error) {
    console.error("Error Fetching Categories", error);
  }
};

// Filter products based on category or type
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

// Update product list
const updateProductList = (newProducts) => {
  prdlists.value = newProducts;
};

// Pagination functions
const changePage = (page) => {
  currenPage.value = page;
  router.push({ name: "Product", query: { ...route.query, page } });
  fetchProducts();
};
const prePage = () => {
  if (currenPage.value > 1) changePage(--currenPage.value);
};
const nextPage = () => {
  if (prdlists.value.length === perPage) changePage(++currenPage.value);
};
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

/* .pagination {
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
} */

.pagination {
  display: flex;
  /* padding-left: 0; */
  /* list-style: none; */
  justify-content: center;
  gap: 1rem;
}
.pagination button {
  color: black;
  border-radius: 5px;
  font-size: 12px;
  width: 40px;
  text-align: center;
  border: none;
}
.pagination button.active {
  background-color: black;
  color: white;
}
</style>
