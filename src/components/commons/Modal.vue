<!-- components/Modal.vue -->
<template>
  <div class="modal-overlay" @click.self="close">
    <div class="modal-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["close"]);
const close = () => emit("close");
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(4px);
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}
.modal-content {
  background: #fff;
  /* padding: 2rem; */
  border-radius: 1rem;
  max-height: 90vh;
  overflow-y: auto;
  width: 100%;
  max-width: fit-content;
  left: 12rem;
}
</style>
