<template>
  <div class="footer">
    <div class="column">
      <h1 class="title">Categories</h1>
      <ul>
        <li><a href="#">Category 1</a></li>
        <li><a href="#">Category 2</a></li>
        <li><a href="#">Category 3</a></li>
        <li><a href="#">Category 4</a></li>
      </ul>
    </div>
    <div class="column">
      <h1 class="title">About Us</h1>
      <ul>
        <li><a href="#">About Company</a></li>
        <li><a href="#">Who we are</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </div>
    <div class="column">
      <h1 class="title">Social Links</h1>
      <ul>
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Youtube</a></li>
      </ul>
    </div>
    <div class="column form">
      <h1 class="title">To recieve updates from us</h1>
      <input type="text" placeholder="Email"/>
      <button>Join Us</button>
    </div>
    <div class="rigths">
      <p>All rights reservet to LLC Company. 2020</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.footer {
  /* padding: 2rem; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
}
.column {
  padding: 3rem;
}
h1 {
  font-size: 1.2em;
  font-weight: 600;
  color: rgb(56, 55, 55);
}
ul {
  list-style: none;
}
a {
  color: rgb(100, 100, 100);
  text-decoration: none;
  font-weight: 400;
}
a:hover {
  cursor: pointer;
}
.rigths {
  background-color: white;
  color: #8CD0E3;
  margin-top: 2rem;
  width: 100%;
  padding: 1rem;
}
.form {
  background-color: #f5ea77;
}
.form .title {
  padding: 1rem;
}
input {
 padding: 0.5rem 1.5rem;
 border: none;
 display: block;
 margin: 0 auto;
}
button {
  background-color: #8CD0E3;
  border: none;
  display: block;
  margin: 1rem auto 0 auto;
  padding: 0.5rem 1.5rem;
}

@media (min-width: 1000px) {
  .form {
    margin-top: -2rem;
  }
}
</style>