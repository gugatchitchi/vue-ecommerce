<template>
  <div class="home">
    <Hero />
    <Slider :title="'Whats New?'" />
    <Touts />
    <BigProducts />
    <Slider :title="'Best Sellers'" />
  </div>
</template>

<script>
import Hero from "@/components/Hero"
import Slider from "@/components/Slider"
import Touts from "@/components/Touts" 
import BigProducts from "@/components/BigProducts" 
export default {
  name: 'Home',
  components: {
    Hero,
    Slider,
    Touts,
    BigProducts
  }
}
</script>
