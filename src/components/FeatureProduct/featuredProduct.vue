<template>
  <section class="featured">
    <div class="ftitle">
      <h1>Featured Products</h1>
      <p>VIEW ALL</p>
    </div>
    <div class="productContainer">
      <ProductCard v-for="prd in prds.slice(0, 5)" :product="prd" />
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
import ProductCard from "../Cards/ProductCard.vue";

const prds = ref([
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
</script>
<style scoped>
.ftitle {
  display: flex;
  justify-content: space-between;
  margin: 1rem;
}
.ftitle h1 {
  font-size: 22px;
  font-weight: 700;
  line-height: normal;
  color: rgb(33, 37, 41);
  letter-spacing: 0.5rem;
  text-transform: uppercase;
}
.ftitle p {
  font-weight: 700;
  font-size: 16px;
  color: rgb(51, 51, 51);
}
.featured {
  height: fit-content;
  margin: 2rem 0rem;
}
.productContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.products {
  margin: 1rem;
}

.productcard img {
  max-width: 100%;
  height: auto;
}

.container {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  padding: 0%;
}
.container h4,
.container h1 {
  font-size: 16px;
  font-weight: 300;
  color: rgb(51, 51, 51);
}
.container h1 {
  font-weight: 700;
}
</style>
