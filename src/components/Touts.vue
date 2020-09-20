<template>
  <div class="touts">
    <div class="line-top"></div>
    <div class="item title">
      <h1>Only on example.com</h1>
    </div>
    <div class="item">
      <font-awesome-icon icon="truck" />
      <h1>Free Shipping</h1>
      <p>(on orders above 40₾.)</p>
    </div>
    <div class="item">
      <font-awesome-icon icon="vial" />
      <h1>Free Samples</h1>
      <p>(Yep, its true.)</p>
    </div>
    <div class="item">
      <font-awesome-icon icon="surprise" />
      <h1>Surprises</h1>
      <p>(You will love it.)</p>
    </div>
    <div class="line-bottom"></div>
  </div>
</template>

<script>
export default {
  name: "touts",
}
</script>

<style scoped>
.touts {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0rem auto;
  padding: 2rem;
  max-width: 1000px;
}
.line-top {
  height: 2px;
  width: 100%;
  background-image: linear-gradient(to right, #EF8DCD, #8FCEE2);
  margin-bottom: 1rem;
}
.line-bottom {
  height: 2px;
  width: 100%;
  background-image: linear-gradient(to right, #8FCEE2, #EF8DCD);
  margin-top: 1rem;
}
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  padding: 1rem;
  text-align: center;
}
h1 {
  font-size: 1em;
  color: grey;
  font-weight: 600;
}
svg {
  color: #8FCEE2;
  font-size: 1.6em;
  margin-bottom: 0.5rem;
}
.title {
  font-size: 1.2em;
  margin-top: 0;
}
</style>