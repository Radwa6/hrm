<template>
  <carousel
    :per-page-custom="[
      [0, 1],
      [480, 2],
      [768, 3],
      [1024, 4],
      [1200, 5],
    ]"
    :autoplay="true"
    :autoplay-timeout="1000"
    :autoplay-hover-pause="true"
    :navigation-enabled="false"
    :pagination-enabled="false"
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
      ],
    }
  },
}
</script>

<style scoped>
* {
  background-color: #f9fcff;
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

.slide img {
  height: auto;
}
</style>
