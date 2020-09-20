<template>
  <div class="home">
    <Hero />
    <Slider />
    <Touts />
  </div>
</template>

<script>
import Hero from "@/components/Hero"
import Slider from "@/components/Slider"
import Touts from "@/components/Touts"
export default {
  name: 'Home',
  components: {
    Hero,
    Slider,
    Touts
  }
}
</script>
