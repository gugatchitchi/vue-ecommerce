<template>
  <div class="home">
    <Hero />
    <Slider />
  </div>
</template>

<script>
import Hero from "@/components/Hero"
import Slider from "@/components/Slider"
export default {
  name: 'Home',
  components: {
    Hero,
    Slider
  }
}
</script>
