<template>
  <nav>
    <div class="logo">
      <router-link to="/"><img src="/public/Fashion.png" /></router-link>
    </div>
    <div class="hamburger" @click="toggleMenu">
      <i :class="showMenu ? 'fas fa-times' : 'fas fa-bars'"></i>
    </div>
    <div :class="['main-menu', { show: showMenu }]">
      <router-link to="/" @click="showMenu = false"> Home</router-link>
      <div
        @click="
          openType('Men');
          showMenu = false;
        "
        class="men"
      >
        Men
      </div>
      <div
        @click="
          openType('Women');
          showMenu = false;
        "
        class="women"
      >
        Women
      </div>
      <div class="dropdown">
        <span class="dropbtn">Category</span>
        <div class="dropdown-content">
          <div
            @click="
              openCate(category);
              showMenu = false;
            "
            v-for="category in categories"
            :key="category._id"
          >
            {{ category.name }}
          </div>
        </div>
      </div>

      <router-link to="/product" @click="showMenu = false">Product</router-link>
      <router-link to="/cart" @click="showMenu = false" class="cart">
        <i class="fa-solid fa-cart-shopping"></i>
      </router-link>
      <!-- <div class="main-icon"></div> -->
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const categories = ref([]);
const router = useRouter();
const showMenu = ref(false);

router.afterEach(() => {
  showMenu.value = false;
});

const fetchCategories = async () => {
  axios
    .get("http://localhost:3000/api/category", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((response) => {
      categories.value = response?.data?.data || [];
      console.log("Categories:", response);
    })

    .catch((error) => {
      console.error("Error Fetching Categories", error);
    });
};

onMounted(() => {
  fetchCategories();
});

const openCate = (category) => {
  router.push({
    name: "Product",
    query: { category: [category], type: undefined },
  });
};

const openType = (type) => {
  router.push({
    name: "Product",
    query: { type: type, category: undefined },
  });
};

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
}
.hamburger i {
  color: black;
  font-size: 24px;
  padding: 10px;
}

.logo img {
  width: 100px;
  margin-left: 1rem;
}

/* Main Menu */
.main-menu {
  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
}

.main-menu a,
.main-menu div {
  padding: 5px;
  text-decoration: none;
  color: black;
  transition: color 0.3s ease-in-out;
}

.main-menu a:hover,
.main-menu > div:hover {
  background-color: #63848e;
  color: white;
  border-radius: 10px;
}

/* Dropdown */
.dropdown {
  position: relative;
  cursor: pointer;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: white;
  width: fit-content;
  padding: 0.5rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  z-index: 10;
}

.dropdown-content div {
  display: block;
  padding: 8px 10px;
  color: black;
  transition: color 0.3s;
}

.dropdown-content div:hover {
  color: blue;
  background-color: rgba(255, 0, 0, 0.1);
}

.dropdown:hover .dropdown-content {
  display: block;
}

/* Icons */
.main-icon {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.main-icon i,
.main-icon div {
  font-size: 20px;
  cursor: pointer;
  transition: color 0.3s;
}

.main-icon i:hover {
  color: blue;
}

/* Cart */
.cart i {
  text-decoration: none;
  color: black;
}

/* Search Button */
.search-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}
.hamburger {
  display: none;
  font-size: 24px;
  cursor: pointer;
  margin-right: 1rem;
}

@media (max-width: 768px) {
  .hamburger {
    display: block;
  }
  .hamburger i {
    color: black;
    padding: 10px;
  }
  .main-menu {
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    background-color: white;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
    display: none;
    z-index: 1000;
  }
  .main-menu.show {
    display: flex;
  }
  .main-menu a,
  .main-menu div {
    width: 100%;
    padding: 10px;
    border-bottom: 1px solid #eee;
  }
  .main-icon {
    position: absolute;
    top: 105px;
    right: 100px;
  }
  @media (max-width: 480px) {
    .main-icon {
      position: absolute;
      top: 100;
      right: 20px;
    }
  }
}
</style>
