<template>
  <carousel
    :per-page-custom="[
      [0, 1],
      [480, 2],
      [768, 3],
      [924, 4],
      [1024, 5],
      [1224, 6],
    ]"
    :autoplay="true"
    :autoplay-timeout="1000"
    :autoplay-hover-pause="true"
    :navigation-enabled="false"
    :pagination-enabled="false"
    :loop="true"
  >
    <slide v-for="(image, index) in images" :key="index">
      <img :src="image" alt="Image Slide" />
    </slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      images: [
        require('@/assets/Logo.png'),
        require('@/assets/Logo (1).png'),
        require('@/assets/Logo (2).png'),
        require('@/assets/Logo (3).png'),
        require('@/assets/Logo (4).png'),
        require('@/assets/Logo (5).png'),
        require('@/assets/Logo.png'),
      ],
    }
  },
}
</script>

<style scoped>
* {
  background-color: #fbfdff;
  padding-top: 10px;
  padding-bottom: 20px;
}
.carousel {
  width: 100%;
  height: 100%;
}

.slide {
  display: flex;
  align-items: center;
}
</style>
