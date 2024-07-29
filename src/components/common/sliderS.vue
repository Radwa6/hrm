<!-- <template>
  <div id="carouselExampleIndicators" class="carousel slide">
    <ol class="carousel-indicators">
      <li
        v-for="(image, index) in images"
        :key="index"
        :data-target="'#carouselExampleIndicators'"
        :data-slide-to="index"
        :class="{ active: index === currentIndex }"
      ></li>
    </ol>
    <div class="carousel-inner justify-content-center">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="carousel-item"
        :class="{ active: index === currentIndex }"
      >
        <img
          :src="image.src"
          class="d-block w-100 justify-content-center"
          :alt="image.alt"
        />
      </div>
    </div>
    <a
      class="carousel-control-prev justify-content-center"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next justify-content-center"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { src: require('@/assets/unsplash_s3EjzLRA4Yw.png'), alt: 'Image 3' },
        { src: require('@/assets/unsplash_YFFGkE3y4F8.png'), alt: 'Image 5' },

        { src: require('@/assets/Slide Item — 1.png'), alt: 'Image 1' },

        { src: require('@/assets/unsplash_g30P1zcOzXo.png'), alt: 'Image 2' },
        { src: require('@/assets/unsplash_xfngap_DToE.png'), alt: 'Image 4' },
      ],
      currentIndex: 2,
    }
  },
}
</script>

<style scoped>
.carousel {
  background-color: #f9fcff;
  height: 100%;
}
.jus {
  background-color: #f9fcff;
}
.carousel-inner {
  align-items: center;
  justify-content: center;
  background-color: #f9fcff;
}
.carousel-inner .carousel-item {
  height: 100%;
  background-color: #f9fcff;
}

.carousel-inner .carousel-item img {
  background-color: #f9fcff;
  height: 440px;
}

.carousel-indicators {
  position: absolute;
  left: 34%;
  transform: translateX(-42%);
  z-index: 15;
}

.carousel-indicators li {
  background-color: #000; /* Dot color */
  width: 10px; /* Dot size */
  height: 10px; /* Dot size */
  border-radius: 50%;
}

.carousel-indicators .active {
  background-color: #b2b2b2; /* Active dot color */
}
.carousel-item {
  padding: 20px 40px 90px;
}
</style> -->

<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="../../assets/unsplash_xfngap_DToE.png" alt="" />
      </div>
      <div class="swiper-slide">
        <img src="../../assets/unsplash_g30P1zcOzXo.png" alt="" />
      </div>
      <div class="swiper-slide">
        <img src="../../assets/Slide Item — 1.png" alt="" />
      </div>
      <div class="swiper-slide">
        <img src="../../assets/unsplash_YFFGkE3y4F8.png" alt="" />
      </div>
      <div class="swiper-slide">
        <img src="../../assets/unsplash_s3EjzLRA4Yw.png" alt="" />
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper, {
  Navigation,
  Autoplay,
  EffectCoverflow,
  Pagination,
} from 'swiper'
import 'swiper/swiper-bundle.min.css'

Swiper.use([Navigation, Autoplay, EffectCoverflow, Pagination])

export default {
  name: 'SliderS',
  mounted() {
    new Swiper('.swiper-container', {
      loop: false,
      speed: 1000,
      autoplay: {
        delay: 3000,
      },
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: 100,
        depth: 300,
        modifier: 1,
        slideShadows: true,
      },
      initialSlide: 2,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  },
}
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 600px;
  padding-top: 50px;
  padding-bottom: 50px;
  position: relative;
}
.swiper-slide {
  width: 400px;
  height: 480px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-slide img {
  height: 100%;
  object-fit: cover;
}
.swiper-pagination {
  position: absolute;
  display: flex;
  justify-content: center;
}
.swiper-pagination-bullet {
  background: #000;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.swiper-pagination-bullet-active {
  background: #b2b2b2;
}
</style>
