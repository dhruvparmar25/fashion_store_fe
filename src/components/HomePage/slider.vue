<template>
  <div class="banner-container">
    <div
      class="slider"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div v-for="(image, index) in images" :key="index" class="slide">
        <img :src="image" alt="Banner Image" />
      </div>
    </div>
    <div class="dots">
      <span
        v-for="(image, index) in images"
        :key="index"
        @click="goToSlide(index)"
        :class="{ active: currentIndex === index }"
      ></span>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, watch } from "vue";

export default {
  setup() {
    const images = ref([
      "https://staticm247.kalkifashion.com/media/wysiwyg/3-mobile-home-mehfilen-500x707-01-03-25.jpg?w=500",
      "https://staticm247.kalkifashion.com/media/wysiwyg/2-slider-banner-mehfilen-1640x615-01-03-25.jpg?w=1440",
      "https://staticm247.kalkifashion.com/media/wysiwyg/4-slider-banner-mehfilen-1640x615-01-03-25.jpg?w=1440",
    ]);

    const currentIndex = ref(0);
    let interval = null;

    const goToSlide = (index) => {
      currentIndex.value = index;
      resetAutoSlide(); // जब user dot पर click करे, तो auto-slide reset हो
    };

    const nextSlide = () => {
      currentIndex.value = (currentIndex.value + 1) % images.value.length;
    };

    const startAutoSlide = () => {
      interval = setInterval(nextSlide, 3000);
    };

    const stopAutoSlide = () => {
      if (interval) clearInterval(interval);
    };

    const resetAutoSlide = () => {
      stopAutoSlide();
      startAutoSlide();
    };

    onMounted(() => {
      startAutoSlide();
    });

    onUnmounted(() => {
      stopAutoSlide();
    });

    return {
      images,
      currentIndex,
      goToSlide,
    };
  },
};
</script>

<style scoped>
.banner-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  max-width: 1200px;
  margin: auto;
}
.slider {
  display: flex;
  transition: transform 0.5s ease-in-out;
}
.slide {
  min-width: 100%;
}
.slide img {
  width: 100%;
  display: block;
}
.dots {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}
.dots span {
  width: 10px;
  height: 10px;
  background: #ccc;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s;
}
.dots span.active {
  background: #333;
}
</style>
