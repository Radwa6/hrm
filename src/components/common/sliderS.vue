<template>
  <div>
    <carousel
      :per-page-custom="[[0, 1]]"
      :autoplay="true"
      :autoplay-timeout="1000"
      :autoplay-hover-pause="true"
      :navigation-enabled="false"
      :pagination-enabled="false"
      :loop="true"
      @page-change="updateCurrentPage"
      ref="carousel"
    >
      <slide v-for="(image, index) in images" :key="index" class="slide">
        <img :src="image" alt="Image Slide" class="slide-img" />
      </slide>
    </carousel>
    <div class="pagination-dots">
      <button
        v-for="(image, index) in images"
        :key="index"
        @click="goToPage(index)"
        :class="{ active: index === currentPage }"
      >
        ●
      </button>
    </div>
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
      currentPage: 0,
      images: [
        require('@/assets/unsplash_cqbLg3lZEpk.png'),
        require('@/assets/unsplash_g30P1zcOzXo.png'),
        require('@/assets/unsplash_s3EjzLRA4Yw.png'),
        require('@/assets/unsplash_xfngap_DToE.png'),
        require('@/assets/unsplash_YFFGkE3y4F8.png'),
      ],
    }
  },
  watch: {
    currentPage(newIndex) {
      this.$nextTick(() => {
        this.$refs.carousel.goToPage(newIndex)
      })
    },
  },
  methods: {
    goToPage(index) {
      this.currentPage = index
    },
    updateCurrentPage(index) {
      this.currentPage = index
    },
  },
}
</script>

<style scoped>
.carousel {
  width: 100%;
  height: 100%;
}

.slide {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fbfdff;
}

.slide-img {
  width: auto;
  height: 100%;
  max-height: 100%;
  object-fit: contain;
  transform: none;
  object-fit: cover;
}

.pagination-dots {
  text-align: center;
  margin-top: 10px;
}

.pagination-dots button {
  border: none;
  background: none;
  cursor: pointer;
  color: #999999;
  outline: none;
}

.pagination-dots button:focus {
  outline: none;
}

.pagination-dots button.active {
  color: #111c55;
  font-weight: bold;
}
</style>
