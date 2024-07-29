<!-- <template>
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
</style> -->
<template>
  <div class="carousel-wrapper">
    <div class="carousel">
      <div class="carousel-inner">
        <div class="carousel-content">
          <div class="slide" v-for="(image, index) in images" :key="index">
            <img :src="image" alt="Image Slide" />
          </div>
          <div
            class="slide"
            v-for="(image, index) in images"
            :key="index + images.length"
          >
            <img :src="image" alt="Image Slide" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
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
        require('@/assets/Logo (1).png'),
        require('@/assets/Logo (2).png'),
        require('@/assets/Logo (3).png'),
        require('@/assets/Logo (4).png'),
        require('@/assets/Logo (5).png'),
        require('@/assets/Logo.png'),
        require('@/assets/Logo (1).png'),
        require('@/assets/Logo (2).png'),
        require('@/assets/Logo (3).png'),
        require('@/assets/Logo (4).png'),
        require('@/assets/Logo (5).png'),
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
.carousel-wrapper {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 120px;
}

.carousel {
  width: 100%;
  height: 100%;
}

.carousel-inner {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.carousel-content {
  display: flex;
  width: calc(100% * 2);
  height: 100%;
  animation: scroll 20s linear infinite;
}

.slide {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 100%;
  margin-right: 80px;
}

.slide img {
  width: 100%;
  height: auto;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(80%);
  }
}
</style>
