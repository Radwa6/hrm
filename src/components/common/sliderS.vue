<template>
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

        { src: require('@/assets/Slides Box.png'), alt: 'Image 1' },

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
</style>
