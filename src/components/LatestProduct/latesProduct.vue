<template>
    <section class="featured">
      <div class="ftitle">
        <h1>Latest Products</h1>
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
      category: "Running shoes for men",
      count: 1,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio animi ducimus voluptas accusamus quis necessitatibus.",
      link: "https://themewagon.github.io/stylish/images/card-item1.jpg",
      price: "716",
      rating: "4.33",
      title: "EltaMD UV Facial Broad-Spectrum SPF 30 Plus - Tube (3 oz.)",
      id: "1",
    },
    {
      category: "Running shoes for men",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio animi ducimus voluptas accusamus quis necessitatibus.",
      link: "https://themewagon.github.io/stylish/images/card-item2.jpg",
      price: "831",
      rating: "7.57",
      title: "EltaMD Barrier Renewal Complex (1.7 oz.)",
      id: "2",
      count: 1,
    },
    {
      category: "Running shoes for men",
      count: 1,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio animi ducimus voluptas accusamus quis necessitatibus.",
      link: "https://themewagon.github.io/stylish/images/card-item3.jpg",
      price: "611",
      rating: "6.01",
      title: "EltaMD UV Lip Balm BroadSpectrum SPF 36 (0.28 oz.)",
      category: "SkinMedica",
      id: "3",
    },
    {
      category: "Running shoes for men",
      count: 1,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio animi ducimus voluptas accusamus quis necessitatibus.",
      link: "https://themewagon.github.io/stylish/images/card-item4.jpg",
      price: "595",
      rating: "8.87",
      title:
        "EltaMD UV Physical Broad-Spectrum SPF 41 Sunscreen - Tinted (3 oz.)",
      id: "4",
    },
    {
      category: "Running shoes for men",
      count: 1,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio animi ducimus voluptas accusamus quis necessitatibus.",
      link: "https://themewagon.github.io/stylish/images/card-item5.jpg",
      price: "879",
      rating: "5.40",
      title: "EltaMD UV Clear SPF46 Broad-Spectrum Duo (Worth $72)",
      id: "5",
    },
    {
      category: "iS Clinical",
      count: 1,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio animi ducimus voluptas accusamus quis necessitatibus.",
      link: "https://static.thcdn.com/images/small/webp//productimg/original/11370307-5484944342267303.jpg",
      price: "895.32",
      rating: "2.18",
      title: "EltaMD Foaming Facial Cleanser (7 oz.)",
      id: "6",
    },
    {
      category: "Eminence",
      count: 1,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio animi ducimus voluptas accusamus quis necessitatibus.",
      link: "https://static.thcdn.com/images/small/webp//productimg/original/11370297-1094944341202318.jpg",
      price: "813.63",
      rating: "2.60",
      title: "EltaMD UV Daily Broad-Spectrum SPF 40 (1.7 oz.)",
      id: "7",
    },
    {
      category: "Organic",
      count: 1,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio animi ducimus voluptas accusamus quis necessitatibus.",
      link: "https://static.thcdn.com/images/small/webp//productimg/original/11370305-1094871771745126.jpg",
      price: "443.99",
      rating: "8.05",
      title: "EltaMD PM Therapy Facial Moisturizer (1.7 oz.)",
      id: "8",
    },
    {
      category: "Skin Care",
      count: 1,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio animi ducimus voluptas accusamus quis necessitatibus.",
      link: "https://static.thcdn.com/images/small/webp//productimg/original/11370311-1644944342668214.jpg",
      price: "1031.95",
      rating: "0.20",
      title: "EltaMD UV Daily Tinted Broad-Spectrum SPF 40 (1.7 oz.)",
      id: "9",
    },
    {
      category: "Revision",
      count: 1,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio animi ducimus voluptas accusamus quis necessitatibus.",
      link: "https://static.thcdn.com/images/small/webp//productimg/original/11370314-1304944342872775.jpg",
      price: "1082.53",
      rating: "5.13",
      title: "EltaMD UV Elements Tinted Broad-Spectrum SPF 44 (2 oz.)",
      id: "10",
    },
    {
      category: "Skincare",
      count: 1,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio animi ducimus voluptas accusamus quis necessitatibus.",
      link: "https://static.thcdn.com/images/small/webp//productimg/original/11370304-1834876993606203.jpg",
      price: "285.38",
      rating: "4.65",
      title: "EltaMD AM Therapy Facial Moisturizer (1.7 oz.)",
      id: "10",
    },
    {
      category: "Neocutis",
      count: 1,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio animi ducimus voluptas accusamus quis necessitatibus.",
      link: "https://static.thcdn.com/images/small/webp//productimg/original/13985789-1635004000024537.jpg",
      price: "215.07",
      rating: "3.23",
      title: "EltaMD UV Luminous Broad Spectrum SPF 41, 1 oz",
      id: "11",
    },
    {
      category: "Oribe",
      count: 1,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio animi ducimus voluptas accusamus quis necessitatibus.",
      link: "https://static.thcdn.com/images/small/webp//productimg/original/13985788-8294996958046114.jpg",
      price: "275.48",
      rating: "3.22",
      title: "EltaMD UV Luminous Broad Spectrum SPF 41, 1.7 oz",
      id: "12",
    },
    {
      category: "Sunday Riley",
      count: 1,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio animi ducimus voluptas accusamus quis necessitatibus.",
      link: "https://static.thcdn.com/images/small/webp//productimg/original/11370312-1044938634157826.jpg",
      price: "294.88",
      rating: "2.14",
      title: "EltaMD UV Clear Broad-Spectrum SPF 46 - Tinted (1.7 oz.)",
      id: "13",
    },
    {
      category: "PCA SKIN",
      count: 1,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio animi ducimus voluptas accusamus quis necessitatibus.",
      link: "https://static.thcdn.com/images/small/webp//productimg/original/11370303-1074944341868735.jpg",
      price: "129.70",
      rating: "5.29",
      title: "EltaMD UV Clear Broad-Spectrum SPF 46 (1.7 oz.)",
      id: "14",
    },
    {
      category: "Cream",
      count: 1,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio animi ducimus voluptas accusamus quis necessitatibus.",
      link: "https://static.thcdn.com/images/small/webp//productimg/original/11370295-4834866341625108.jpg",
      price: "851.80",
      rating: "8.87",
      title: "EltaMD UV Facial Broad-Spectrum SPF 30 Plus - Tube (3 oz.)",
      id: "15",
    },
    {
      category: "SkinCeuticals",
      count: 1,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio animi ducimus voluptas accusamus quis necessitatibus.",
      link: "https://static.thcdn.com/images/small/webp//productimg/original/11370313-1184876993793817.jpg",
      price: "476.44",
      rating: "6.13",
      title: "EltaMD Barrier Renewal Complex (1.7 oz.)",
      id: "15",
    },
    {
      category: "EltaMD",
      count: 1,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio animi ducimus voluptas accusamus quis necessitatibus.",
      link: "https://static.thcdn.com/images/small/webp//productimg/original/11370310-1684944342590145.jpg",
      price: "617.41",
      rating: "7.14",
      title: "EltaMD UV Lip Balm BroadSpectrum SPF 36 (0.28 oz.)",
      id: "16",
    },
    {
      category: "SkinMedica",
      count: 1,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio animi ducimus voluptas accusamus quis necessitatibus.",
      link: "https://static.thcdn.com/images/small/webp//productimg/original/11370298-8474944344996235.jpg",
      price: "368.12",
      rating: "2.83",
      title:
        "EltaMD UV Physical Broad-Spectrum SPF 41 Sunscreen - Tinted (3 oz.)",
      id: "17",
    },
    {
      category: "Obagi",
      count: 1,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio animi ducimus voluptas accusamus quis necessitatibus.",
      link: "https://static.thcdn.com/images/small/webp//productimg/1600/1600/12538013-4764765050522444.jpg",
      price: "785.51",
      rating: "4.40",
      title: "EltaMD UV Clear SPF46 Broad-Spectrum Duo (Worth $72)",
      id: "18",
    },
    {
      category: "iS Clinical",
      count: 1,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio animi ducimus voluptas accusamus quis necessitatibus.",
      link: "https://static.thcdn.com/images/small/webp//productimg/original/11370307-5484944342267303.jpg",
      price: "787.36",
      rating: "6.67",
      title: "EltaMD Foaming Facial Cleanser (7 oz.)",
      id: "19",
    },
    {
      category: "Eminence",
      count: 1,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio animi ducimus voluptas accusamus quis necessitatibus.",
      link: "https://static.thcdn.com/images/small/webp//productimg/original/11370297-1094944341202318.jpg",
      price: "414.53",
      rating: "1.73",
      title: "EltaMD UV Daily Broad-Spectrum SPF 40 (1.7 oz.)",
      id: "20",
    },
    {
      category: "Skin Care",
      count: 1,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio animi ducimus voluptas accusamus quis necessitatibus.",
      link: "https://static.thcdn.com/images/small/webp//productimg/original/11370311-1644944342668214.jpg",
      price: "765.95",
      rating: "1.09",
      title: "EltaMD UV Daily Tinted Broad-Spectrum SPF 40 (1.7 oz.)",
      id: "20",
    },
    {
      category: "Organic",
      count: 1,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio animi ducimus voluptas accusamus quis necessitatibus.",
      link: "https://static.thcdn.com/images/small/webp//productimg/original/11370305-1094871771745126.jpg",
      price: "828.84",
      rating: "1.66",
      title: "EltaMD PM Therapy Facial Moisturizer (1.7 oz.)",
      id: "21",
    },
    {
      category: "Skincare",
      count: 1,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio animi ducimus voluptas accusamus quis necessitatibus.",
      link: "https://static.thcdn.com/images/small/webp//productimg/original/11370304-1834876993606203.jpg",
      price: "963.16",
      rating: "5.40",
      title: "EltaMD AM Therapy Facial Moisturizer (1.7 oz.)",
      id: "22",
    },
    {
      category: "Revision",
      count: 1,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio animi ducimus voluptas accusamus quis necessitatibus.",
      link: "https://static.thcdn.com/images/small/webp//productimg/original/11370314-1304944342872775.jpg",
      price: "476.15",
      rating: "0.74",
      title: "EltaMD UV Elements Tinted Broad-Spectrum SPF 44 (2 oz.)",
      id: "23",
    },
    {
      category: "Neocutis",
      count: 1,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio animi ducimus voluptas accusamus quis necessitatibus.",
      link: "https://static.thcdn.com/images/small/webp//productimg/original/13985789-1635004000024537.jpg",
      price: "1055.90",
      rating: "6.66",
      title: "EltaMD UV Luminous Broad Spectrum SPF 41, 1 oz",
      id: "23",
    },
    {
      category: "PCA SKIN",
      count: 2,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio animi ducimus voluptas accusamus quis necessitatibus.",
      link: "https://static.thcdn.com/images/small/webp//productimg/original/11370303-1074944341868735.jpg",
      price: "564.84",
      rating: "3.85",
      title: "EltaMD UV Clear Broad-Spectrum SPF 46 (1.7 oz.)",
      id: "24",
    },
    {
      category: "Oribe",
      count: 1,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio animi ducimus voluptas accusamus quis necessitatibus.",
      link: "https://static.thcdn.com/images/small/webp//productimg/original/13985788-8294996958046114.jpg",
      price: "856.74",
      rating: "0.94",
      title: "EltaMD UV Luminous Broad Spectrum SPF 41, 1.7 oz",
      id: "24",
    },
    {
      category: "Sunday Riley",
      count: 2,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio animi ducimus voluptas accusamus quis necessitatibus.",
      link: "https://static.thcdn.com/images/small/webp//productimg/original/11370312-1044938634157826.jpg",
      price: "624.20",
      rating: "2.03",
      title: "EltaMD UV Clear Broad-Spectrum SPF 46 - Tinted (1.7 oz.)",
      id: "25",
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
    border-bottom: 1px solid #adb5bd;

  }
  .productContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5rem;
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
  