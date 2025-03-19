<template>
  {{ productMetas }}

  <section class="productpages">
    <!-- FilterComponent: Displays filters for categories and brands -->
    <FilterComponent class="sticky">
      <!-- Category Filter -->
      <div class="categoress">
        <header>
          <h3>Category</h3>
          <button @click="toggleCategory">
            {{ isCategoryView ? "∧" : "∨" }}
          </button>
        </header>

        <label
          v-for="category in categories"
          :key="category._id"
          class="content"
          :class="{ 'view-content': isCategoryView }"
        >
          <input
            type="checkbox"
            :value="category"
            v-model="selectedCategories"
            @change="filterProducts($event, 'category')"
          />
          {{ category }}
        </label>
      </div>

      <!-- Brand Filter -->
      <div class="brandfilter">
        <header>
          <h3>Type</h3>
          <button @click="toggleBrand">
            {{ isBrandView ? "∧" : "∨" }}
          </button>
        </header>
        <div class="brandList">
          <label class="content" :class="{ 'view-content': isBrandView }">
            <input
              type="radio"
              value="Men"
              v-model="selectedTypes"
              @change="filterProducts($event, 'type')"
            />
            Men
          </label>
          <label class="content" :class="{ 'view-content': isBrandView }">
            <input
              type="radio"
              value="Women"
              v-model="selectedTypes"
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
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { useRouter } from "vue-router";
import ProductPage from "@/components/Cards/ProductPage.vue";
import FilterComponent from "@/components/Filters/FilterComponent.vue";
import axios from "axios";

// Reactive variables
const isCategoryView = ref(false);
const isBrandView = ref(false);
const prdlists = ref([]);
const productMetas = ref({ category: [], type: [] });
const categories = ref([]); // Stores fetched categories
const selectedCategories = ref([]); // Stores selected categories
const selectedTypes = ref([]); // Stores selected types

const router = useRouter();

// Toggle functions
const toggleCategory = () => {
  isCategoryView.value = !isCategoryView.value;
};
const toggleBrand = () => {
  isBrandView.value = !isBrandView.value;
};

// Navigate to product details
const goToDetails = (item) => {
  if (!item?._id) return;
  router.push({ name: "ProductDetail", params: { id: item._id } });
};

// // Fetch products
// const fetchProducts = async () => {
//   try {
//     const response = await axios.get("http://localhost:3000/api/product", {
//       params: productMetas.value,
//     });
//     prdlists.value = response.data;
//   } catch (error) {
//     console.error("Error Fetching Products", error);
//   }
// };

// // Fetch categories
// const fetchCategories = async () => {
//   try {
//     const response = await axios.get("http://localhost:3000/api/category");
//     categories.value = response.data; // Store categories
//   } catch (error) {
//     console.error("Error Fetching Categories", error);
//   }
// };

// // Filter products based on selected categories and types
// const filterProducts = (event, filterType) => {
//   const val = event.target.value;

//   if (filterType === "category") {
//     if (productMetas.value.category.includes(val)) {
//       productMetas.value.category = productMetas.value.category.filter(
//         (f) => f !== val
//       );
//     } else {
//       productMetas.value.category.push(val);
//     }
//   } else if (filterType === "type") {
//     if (productMetas.value.type.includes(val)) {
//       productMetas.value.type = productMetas.value.type.filter(
//         (f) => f !== val
//       );
//     } else {
//       productMetas.value.type.push(val);
//     }
//   }
//   fetchProducts();
// };

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

// Fetch categories
const fetchCategories = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/category");
    categories.value = response.data; // Store categories
  } catch (error) {
    console.error("Error Fetching Categories", error);
  }
};

///Filter products based on selected categories and types
const filterProducts = (event, filterType) => {
  const val = event.target.value;

  if (filterType === "category") {
    // Checkbox Logic: Multiple Selection Allowed
    if (productMetas.value.category.includes(val)) {
      productMetas.value.category = productMetas.value.category.filter(
        (f) => f !== val
      );
    } else {
      productMetas.value.category.push(val);
    }
  } else if (filterType === "type") {
    productMetas.value.type = val; // Directly assign the selected value
  }

  fetchProducts(); // Call fetchProducts after updating filters
};

// Fetch data on component mount
onMounted(() => {
  fetchProducts();
  fetchCategories();
});
</script>

<style scoped>
/* Scoped styles for the Product page */
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

/* Product grid style */
.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 78%;
}

/* Styling for the filter sections */
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
  font-size: 16px;
  text-transform: capitalize;
  font-family: monospace;
  font-weight: 700;
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
</style>
