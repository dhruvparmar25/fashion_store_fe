<template>
  <div class="fillter">
    <div class="srch">
      <input type="text" placeholder="Search.." name="search" />
      <button type="button"><i class="fa fa-search"></i></button>
    </div>

    <div class="cattitle">Product Filters</div>
    <slot></slot>
  </div>
</template>

<style scoped>
.fillter {
  width: 18%;
  height: 100vh;
  font-size: 2rem;
  font-weight: 700;
  overflow-y: auto;
  padding: 10px;
  background: #f8f9fa;
  border-right: 1px solid #ddd;
}

.cattitle {
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 10px;
}
.srch {
  display: contents;
  justify-content: space-between;
  align-items: center;
}

.fillter input {
  padding: 6px;
  margin-top: 8px;
  font-size: 8px;
  border: none;
}

.fillter button {
  float: right;
  padding: 5px 10px;
  margin-top: 20px;
  margin-right: 25px;
  background: #ddd;
  font-size: 9px;
  border: none;
  cursor: pointer;
}

.fillter button:hover {
  background: #ccc;
}
</style>
