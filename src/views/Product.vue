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
      <ProductPage v-for="prdlist in prdlists" :product="prdlist" />
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import ProductPage from "@/components/Cards/ProductPage.vue";
import FilterComponent from "@/components/Filters/FilterComponent.vue";
const isCategoryView = ref(false);
const isBrandView = ref(false);

const prdlists = ref([
  {
    name: "Men's Purple Justice League Society Graphic Printed Oversized T-shirt",
    category: "T-Shirt",
    price: 499,
    design: "Graphic Print",
    image:
      "https://images.bewakoof.com/t640/men-s-purple-justice-league-society-graphic-printed-oversized-t-shirt-581274-1676971303-1.jpg",
    type: "Men",
    offer: "14% OFF",
    brand: "Boogy®",
    discount: "66% OFF",
    tags: [
      {
        type: "fit",
        label: "OVERSIZED FIT",
        bgColor: "rgba(82, 82, 82, 0.8)",
        textColor: "#fff",
      },
    ],
    description:
      "For TriBe Members official dc comics merchandise by bewakoof.com Men's Purple Justice League Society Graphic Printed Oversized T-shirt Men's Purple Justice League Society Graphic Printed Oversized T-shirt",
    id: 1,
    rating: "1.3",
  },
  {
    name: "Men's Grey Old School Graphic Printed T-shirt",
    category: "T-Shirt",
    price: 449,
    design: "Graphic Print",
    image:
      "https://images.bewakoof.com/t640/men-s-grey-old-school-full-sleeve-t-shirt-580631-1676869591-1.jpg",
    type: "Men",
    offer: "14% OFF",
    brand: "Boogy®",
    discount: "70% OFF",
    tags: [
      {
        type: "campaign",
        label: "DESIGN OF THE WEEK",
        bgColor: "rgba(247, 247, 247, 0.8)",
        textColor: "#000000",
      },
    ],
    description:
      "For TriBe Members bewakoof Men's Grey Old School Graphic Printed T-shirt Men's Grey Old School Graphic Printed T-shirt",
    id: 2,
    rating: "2.3",
  },
  {
    name: "Men's Black Chainsaw Man Graphic Printed T-shirt",
    category: "T-Shirt",
    price: 399,
    design: "Graphic Print",
    image:
      "https://images.bewakoof.com/t640/men-s-black-chainsaw-man-graphic-printed-t-shirt-581232-1676898338-1.jpg",
    type: "Men",
    offer: "14% OFF",
    brand: "Boogy®",
    discount: "73% OFF",
    tags: [
      {
        type: "campaign",
        label: "DESIGN OF THE WEEK",
        bgColor: "rgba(247, 247, 247, 0.8)",
        textColor: "#000000",
      },
    ],
    description:
      "For TriBe Members official dc comics merchandise by bewakoof.com Men's Black Chainsaw Man Graphic Printed T-shirt Men's Black Chainsaw Man Graphic Printed T-shirt",
    id: 3,
    rating: "2.6",
  },
  {
    name: "Men's Blue The Panda Way Graphic Printed Oversized T-shirt",
    category: "T-Shirt",
    price: 499,
    design: "Graphic Print",
    image:
      "https://images.bewakoof.com/t640/men-s-blue-the-panda-way-oversized-t-shirt-580637-1676876264-1.jpg",
    type: "Men",
    offer: "14% OFF",
    brand: "Boogy®",
    discount: "66% OFF",
    tags: [
      {
        type: "fit",
        label: "OVERSIZED FIT",
        bgColor: "rgba(82, 82, 82, 0.8)",
        textColor: "#fff",
      },
    ],
    description:
      "For TriBe Members bewakoof Men's Blue The Panda Way Graphic Printed Oversized T-shirt Men's Blue The Panda Way Graphic Printed Oversized T-shirt",
    id: 4,
    rating: "4.0",
  },
  {
    name: "Men's Black Chainsaw Man Graphic Printed Oversized T-shirt",
    category: "T-Shirt",
    price: 699,
    design: "Graphic Print",
    image:
      "https://images.bewakoof.com/t640/chainsaw-man-oversize-fit-full-sleeve-t-shirt-580774-1676876222-1.jpg",
    type: "Men",
    offer: "14% OFF",
    brand: "Boogy®",
    discount: "53% OFF",
    tags: [
      {
        type: "fit",
        label: "OVERSIZED FIT",
        bgColor: "rgba(82, 82, 82, 0.8)",
        textColor: "#fff",
      },
    ],
    description:
      "For TriBe Members official dc comics merchandise by bewakoof.com Men's Black Chainsaw Man Graphic Printed Oversized T-shirt Men's Black Chainsaw Man Graphic Printed Oversized T-shirt",
    id: 5,
    rating: "3.6",
  },
  {
    name: "Men's Blue Justice League Society Graphic Printed Oversized T-shirt",
    category: "T-Shirt",
    price: 699,
    design: "Graphic Print",
    image:
      "https://images.bewakoof.com/t640/men-s-blue-justice-league-society-sleeve-t-shirt-580630-1676869549-1.jpg",
    type: "Men",
    offer: "14% OFF",
    brand: "Boogy®",
    discount: "53% OFF",
    tags: [
      {
        type: "fit",
        label: "OVERSIZED FIT",
        bgColor: "rgba(82, 82, 82, 0.8)",
        textColor: "#fff",
      },
    ],
    description:
      "For TriBe Members bewakoof Men's Blue Justice League Society Graphic Printed Oversized T-shirt Men's Blue Justice League Society Graphic Printed Oversized T-shirt",
    id: 6,
    rating: "3.8",
  },
  {
    name: "Men's Black The Panda Way Graphic Printed Oversized T-shirt",
    category: "T-Shirt",
    price: 699,
    design: "Graphic Print",
    image:
      "https://images.bewakoof.com/t640/men-s-black-the-panda-way-oversize-fit-full-sleeve-t-shirt-580633-1676876417-1.jpg",
    type: "Men",
    offer: "14% OFF",
    brand: "Boogy®",
    discount: "53% OFF",
    tags: [
      {
        type: "fit",
        label: "OVERSIZED FIT",
        bgColor: "rgba(82, 82, 82, 0.8)",
        textColor: "#fff",
      },
    ],
    description:
      "For TriBe Members bewakoof Men's Black The Panda Way Graphic Printed Oversized T-shirt Men's Black The Panda Way Graphic Printed Oversized T-shirt",
    id: 7,
    rating: "4.6",
  },
]);

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
