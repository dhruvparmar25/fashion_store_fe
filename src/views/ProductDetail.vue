<template>
  <section class="productdetail" v-if="product">
    <div class="main">
      <div class="image">
        <div class="mainimage">
          <img :src="product.image" />
        </div>
      </div>
      <div class="detail">
        <div class="productdetail">
          <div class="brand">{{ product.brand }}</div>
          <p class="desc">{{ product.description }}</p>
          <div class="name">{{ product.name }}</div>
          <div class="combine">
            <h4 class="price">
              <i class="fa-solid fa-indian-rupee-sign"></i> {{ product.price }}
            </h4>
            <h4 class="offer">{{ product.discount }}</h4>
          </div>
          <div class="combine">
            <div class="design">{{ product.design }}</div>
            <h4 class="rating">
              <i class="fa-solid fa-star"></i>{{ product.rating }}
            </h4>
          </div>
          <div class="combine">
            <h6 class="category">{{ product.category }}</h6>
            <div
              v-if="product.tags?.length"
              v-for="tag in product.tags"
              class="label"
            >
              {{ tag.label }}
            </div>
          </div>
        </div>
        <button class="addtocart" type="button">
          <i class="fa-solid fa-bag-shopping"></i> Add to bag
        </button>
      </div>
    </div>
  </section>
  <p v-else>Loading...</p>
</template>

<!-- JavaScript -->
<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const product = ref(null); // Single product store karne ke liye

const products = ref([
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

onMounted(() => {
  const productId = parseInt(route.params.id); // Route se id lo (string to number convert karo)
  product.value = products.value.find((p) => p.id === productId);
});
</script>

<!-- css -->
<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: start;
  width: 90%;
  margin: auto;
  gap: 1rem;
}
.image {
  width: 40%;
}
.detail {
  width: 40%;
}
.mainimage img {
  width: 100%;
  height: auto;
}

.productdetail {
  padding: 0%;
  margin: 0;
}
.brand,
.name {
  font-family: "Montserrat";
  font-size: 18px;
  font-weight: 700;
  color: black;
}
.desc,
.design {
  font-family: "Montserrat";
  font-size: 14px;
  color: rgb(115, 126, 147);
}
.combine {
  display: flex;
  justify-content: stretch;
  align-items: center;
}
.price {
  font-family: "Montserrat";
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  color: rgb(54, 53, 55);
}
.offer {
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: rgb(0, 140, 45);
}
.category {
  font-family: "Montserrat";
  font-weight: 600;
  background-color: rgb(105, 104, 106);
  color: white;
  border: 1px solid rgb(115, 115, 115);
  font-size: 14px;
  padding: 0.5rem;
}
.rating {
  font-family: "Montserrat";
  font-size: 14px;
  font-weight: 700;
  margin-top: 0.5rem;
}
.rating i {
  color: gold;
  margin-right: 0.5rem;
}

.label {
  font-family: "Montserrat";
  font-size: 14px;
  color: rgb(115, 115, 115);
  border: 1px solid rgb(115, 115, 115);
  padding: 5px;
  width: fit-content;
}
.addtocart {
  background-color: #ffd232;
  font-family: "Montserrat";
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 24px;
  padding: 1rem;
  width: fit-content;
  border: none;
  border-radius: 10px;
  color: rgb(41, 45, 53);
  margin-top: 1rem;
}
.addtocart i {
  margin-right: 1rem;
}
</style>
