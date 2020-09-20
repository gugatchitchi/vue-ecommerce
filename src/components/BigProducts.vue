<template>
  <div class="big-products">
    <div class="product">
      <img src="@/assets/img/big-pictures/picture1.jpg">
      <div class="content">
        <h1>Category Name</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </div>
      <button>shop category</button>
    </div>
    <div class="product">
      <img src="@/assets/img/big-pictures/picture2.jpg">
      <div class="content">
        <h1>Category Name</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </div>
      <button>shop category</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BigProducts"
}
</script>

<style scoped>
.big-products {
  background-image: linear-gradient(#EF8DCD, #8FCEE2);
  padding: 2rem;
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-items: center;
}
.product {
  flex-grow: 1;
  text-align: center;
  margin: 2rem;
}
img {
  max-width: 800px;
  width: 100%;
  display: block;
  margin: 0 auto;
}
.content {
  background-color: white;
  padding: 2rem 1rem;
  width: 80%;
  max-width: 600px;
  margin: 0 auto;
  margin-top: -1rem;
  z-index: 999;
}
h1 {
  margin-bottom: 1rem;
  font-weight: 600;
  font-size: 1.3em;
}
p {
  color: grey;
  font-size: 0.8em;
}
button {
  margin-top: -1rem;
  padding: 1rem 2rem;
  background-color:  #f5ea77;
  color:white;
  box-shadow: 3px 3px 0 #8CD0E3;
  border: none;
  font-weight: bold;
}

/* Media Queries */
/* @media (min-width: 800px) {
  .big-products {
    flex-direction: row;
    justify-content: space-around;
  }
} */
</style>