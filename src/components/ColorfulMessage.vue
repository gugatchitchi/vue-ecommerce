<template>
  <div class="colorful-message" v-if="showMessage">
    <!-- For Padding -->
    <font-awesome-icon icon="times" style="visibility:hidden" />
    <!-- Actual content -->
    <div class="text">
      <p>Save up to 10% by paying with card</p>
      <p>Promotion lasts up to 31 october</p>
    </div>
    <font-awesome-icon icon="times" @click="showMessage=false" />
  </div>
</template>

<script>
export default {
  name: "ColorfulMessage",
  data() {
    return {
      showMessage: true
    }
  }
}
</script>

<style scoped>
.colorful-message {
  background-image: linear-gradient(to right,#EF8DCD, #8FCEE2);
  text-align: center;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
p {
  color: white;
  font-size: 0.8em;
  line-height: 1.6;
}
svg {
  color: white;
  font-weight: 400;
  margin-right: 2rem;
}
svg:hover  {
  cursor: pointer;
}
</style>