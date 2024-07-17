<template>
  <div>
    <carousel
      :per-page-custom="[[0, 1]]"
      :autoplay-timeout="1000"
      :autoplay-hover-pause="true"
      :navigation-enabled="false"
      :pagination-enabled="true"
    >
      <slide v-for="(image, index) in images" :key="index">
        <img :src="image" alt="Image Slide" />
      </slide>
    </carousel>
    <div class="pagination-dots"></div>
  </div>
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
        require('@/assets/Slides Box.png'),
        require('@/assets/header_img.png'),
        require('@/assets/Slides Box.png'),
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
  background-color: #fbfdff;
}

.slide img {
  width: 100%;
  height: auto;
  background-color: #fbfdff;
}

.pagination-dots {
  text-align: center;
}
</style>
