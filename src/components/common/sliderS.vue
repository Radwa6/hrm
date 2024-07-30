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
  height: 60vh;
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
@media (max-width: 1200px) {
  .meta-container {
    max-width: 600px; /* ضبط الحجم للشاشات المتوسطة */
  }
}

@media (max-width: 768px) {
  .meta-container {
    max-width: 400px; /* ضبط الحجم للشاشات الصغيرة */
  }
}

@media (max-width: 480px) {
  .meta-container {
    padding: 10px; /* تقليل الـ padding للشاشات الصغيرة جداً */
  }

  .meta-container img {
    object-fit: contain;
    width: 20px;
  }
}
</style>
