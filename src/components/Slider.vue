<template>
  <div class="slider">  
    <h1>What's New</h1>
    <!-- Mobile -->
    <VueSlickCarousel v-bind="settingsMobile" class="carousel mobile" ref="carousel">
      <div v-for="product in products" :key="product.id" class="carousel-item">
        <img src="@/assets/img/products/product1.webp">
        <font-awesome-icon icon="heart" v-for="n in product.rating" :key="n"/>
        <p class="title">{{ product.name }}</p>
        <p class="descrip">{{ product.descrip }}</p>
        <button>Add to bag for {{ product.price }} ₾.</button>
      </div>
    </VueSlickCarousel>

    <!-- Desktop -->
    <div class="desktop">
      <div @click="showPrev()" class="arrow-prev arrow">
        <font-awesome-icon icon="arrow-left" />
      </div>
      <VueSlickCarousel v-bind="settingsDesktop" class="carousel" ref="carousel">
        <div v-for="product in products" :key="product.id" class="carousel-item">
          <img src="@/assets/img/products/product1.webp">
          <font-awesome-icon icon="heart" v-for="n in product.rating" :key="n"/>
          <p class="title">{{ product.name }}</p>
          <p class="descrip">{{ product.descrip }}</p>
          <button>Add to bag for {{ product.price }} ₾.</button>
        </div>
      </VueSlickCarousel>
      <div @click="showNext()" class="arrow-next arrow">
        <font-awesome-icon icon="arrow-right" />
      </div>
    </div>
  </div>
</template>

<script>
// Slider
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
// Database
import products from "@/database/products"
export default {
  name: "Slider",
  components: { 
    VueSlickCarousel
  },
  data() {
    return {
      products: [],
      settingsMobile: {
        arrows:false,
        dots: true,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        touchThreshold: 5,
        autoplay: true,
      },
      settingsDesktop: {
        arrows:false,
        dots: true,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        touchThreshold: 5,
        autoplay: true,
      },
    }
  },
  created() {
    this.products = products
  },
  methods: {
    showNext() {
      this.$refs.carousel.next()
    },
    showPrev() {
      this.$refs.carousel.prev()
    },
  },
}
</script>

<style scoped>
h1 {
  margin-top: 4rem;
  font-weight: 600;
  text-align: center;
}
.carousel {
  margin: 4rem auto;
  text-align: center;
}
.carousel-item {
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
}
img {
  width: 90%;
  margin: 0 auto;
}
svg {
  color: #8CD0E3;
  padding: 1rem 0.3rem 0 0.3rem;
}
.title {
  font-weight: 600;
  font-size: 1.2em;
  padding: 1rem 0;
}
.descrip {
  line-height: 1.5;
  color:grey;
}
.descrip,
.title {
  max-width: 80%;
  margin: 0 auto;
}
button {
  padding: 0.5rem 1.5rem;
  margin-top: 1rem;
  background-color: #8CD0E3;
  color:white;
  box-shadow: 3px 3px 0 #f5ea77;
  border: none;
}
/* Desktop view properties */
.desktop {
  display: none;
  align-items: center;
}
.arrow-prev {
  /* padding-left: 2rem; */
}
.arrow-next {
  /* padding-right: 2rem; */
}
.arrow {
  font-size: 1.6em;
}


/* Media Queris */
@media (min-width: 1000px) {
  .desktop {
    display: flex;
    padding: 0 2rem;
  }
  .mobile {
    display: none;
  }
  .carousel {
    width: 90%;
  }
}
</style>