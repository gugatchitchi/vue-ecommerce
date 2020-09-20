<template>
  <div class="hero">
    <img src="@/assets/img/hero.png" alt="Skincare products">
    
    <div class="content">
      <h1>Lorem ipsum? <br/> sit amet consectetur</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A illum expedita inventore delectus, commodi totam fugiat amet exercitationem. Facere, rem repellat exercitationem eos explicabo porro possimus quidem atque blanditiis reiciendis!</p>
      <button>Shop With Us</button>
    </div>

  </div>
</template>

<script>
export default {
  name: "Hero"
}
</script>

<style scoped>
.hero {
  position: relative;
  top: 2em;
  margin-bottom: 2em;
  text-align: center;
  background-color: #E1F8F9;
  display: flex;
  flex-direction: column;
}
img {
  width: 100%;
  margin-top: 2rem;
}
h1 {
  font-weight: 600;
  font-size: 1.4em;
  max-width: 80%;
  margin: 1rem auto;
}
p {
  font-size: 0.8em;
  max-width: 80%;
  margin: 0 auto;
}
button {
  border: none;
  background-color: #FBD113;
  padding: 0.5rem 1.5rem;
  margin: 1rem;
  box-shadow: 3px 3px 0 #73d2e6;
  border-radius: 3px;
}

/* Media Queries */
@media (min-width:800px) {
  .hero {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  img {
    margin: 2rem 0 2rem 2rem;
    width: 50%;
  }
}
</style>