<template>
  <div class="filter">
    <div class="cattitle">Product Filters</div>
    <slot></slot>
  </div>
</template>

<style scoped>
.filter {
  width: 18%;
  height: 100vh;
  font-size: 2rem;
  font-weight: 700;
}
.cattitle {
  font-size: 16px;
  text-transform: uppercase;
}
</style>
