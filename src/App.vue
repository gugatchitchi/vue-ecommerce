<template>
  <div class="app">
    <ColorfulMessage />
    <Navbar />
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar"
import ColorfulMessage from "@/components/ColorfulMessage"
export default {
  name: "App",
  components: {
    Navbar,
    ColorfulMessage
  }
}
</script>

<style>
* {
margin: 0;
padding: 0;
font-family: 'Work Sans', sans-serif;
line-height: 1.6;
}
body {
  height: 100%;
  margin: 0;
  background-image: linear-gradient(#FCF9CF, #F0CDE9, #BDEAF3);
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.app {
  max-width: 1600px;
  margin: 0 auto;
}
main {
  min-height: 100vh;
  width: 100%;
  background-color: white;
}
</style>
