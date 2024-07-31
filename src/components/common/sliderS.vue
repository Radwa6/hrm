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
        slideShadows: false,
      },
      initialSlide: 2,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
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
  background-color: #f9fcff;
}
.swiper-slide {
  width: 400px;
  height: 480px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9fcff;
}
.swiper-slide img {
  height: 60vh;
  object-fit: cover;
  box-shadow: none;
}
.swiper-pagination {
  position: absolute;
  display: flex;
  justify-content: center;
}
.swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  box-shadow: none;
}

@media (max-width: 768px) {
  .swiper-slide img {
    height: 40vh;
  }
  .swiper-slide,
  .swiper-slide-prev {
    height: 30vh;
  }
}

@media (max-width: 480px) {
  .swiper-slide img {
    height: 30vh;
    padding: 20px;
  }
  .swiper-slide,
  .swiper-slide-prev {
    height: 30vh;
  }
  .swiper-container {
    height: 40vh;
  }
}
</style>
