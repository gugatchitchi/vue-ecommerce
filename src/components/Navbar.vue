<template>
  <nav>
    <!-- Appbar -->
    <div class="appbar"> 
      <!-- Mobile -->
      <font-awesome-icon icon="bars" class="mobile margin" v-if="!dropdown" @click="dropdown = true; search = true" />
      <font-awesome-icon icon="times" class="mobile margin" v-if="dropdown" @click="dropdown = false; search = false" />
      <font-awesome-icon icon="bars" class="mobile" style="visibility: hidden;"/>
      <!-- Desktop -->
      <font-awesome-icon icon="search" class="margin desktop-svg" @click="search=!search" />
      <font-awesome-icon icon="map-marker-alt" class="desktop-svg"/>
      <!-- Shared -->
      <h1 class="title">Company</h1>
      <font-awesome-icon icon="hand-paper" class="margin" />
      <font-awesome-icon icon="shopping-bag" />
    </div>

    <!-- links row -->
    <div class="linkRow desktop">
      <router-link to="/">New</router-link>
      <router-link to="/">Category1</router-link>
      <router-link to="/">Category2</router-link>
      <router-link to="/">Category3</router-link>
      <router-link to="/">Category4</router-link>
      <router-link to="/">About us</router-link>
    </div>

    <!-- Search -->
    <div class="search" v-if="search">
      <input type="text" placeholder="What are you looking for?" />
      <div class="search-text">
        <p class="search-button">search</p>
        <p @click="dropdown = false; search=false">cancel</p>
      </div>
    </div>
    <!-- Dropdown -->
    <div class="dropdown mobile" v-if="dropdown">
      <ul>
        <li><router-link to="/">New</router-link></li>
        <li><router-link to="/">Category1</router-link></li>
        <li><router-link to="/">Category2</router-link></li>
        <li><router-link to="/">Category3</router-link></li>
        <li><router-link to="/">Category4</router-link></li>
        <li><router-link to="/">About us</router-link></li>
      </ul>
      <div class="banners">
        <img @click="$router.push('/')" src="@/assets/img/banner 1.webp" alt="sale banner 1" />
        <img @click="$router.push('/')" src="@/assets/img/banner 2.webp" alt="sale banner 2" />
      </div>
    </div>

  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      dropdown: false,
      search: false,
    }
  }
}
</script>

<style scoped>
nav {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background-color: #6fd3e7;
  z-index: 1;
}
/* Appbar */
.appbar {
  display: flex;
  align-items: center;
  /* background-color: #6fd3e7; */
  color: white;
  padding: 1rem;
}
.title {
  margin: 0 auto;
  font-size: 2rem; 
  font-weight: bold;
}
.transparent {
  opacity: 0;
}
.appbar svg {
  font-size: 1.5em;
  width: 1.5rem;
}
.appbar svg:hover {
  cursor: pointer
}
.margin {
  margin-right: 1rem;
}

/* Search */
.search {
  background-color: #c7f0f7;
}
.search input {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
  max-width: 300px;
  margin: 1rem auto;
  border: none;
  color: grey;
  padding: 1rem;
}
.search-text {
  color: white;
  padding-bottom: 1rem;
  text-align: center;
  font-weight: 600;
}
.search-text p {
  display: inline;
  padding: 1rem;
}
.search p:hover {
  cursor: pointer;
  background-color: #6fd3e7;
}
.search-button {
  margin-right: 3rem;
}

/* Link Row */
.linkRow {
  background-color:#6fd3e7;
  display: flex;
  justify-content: center;
  color: white;
}
.linkRow a {
  text-decoration: none;
  text-transform: uppercase;
  color: white;
  padding: 0.5rem;
  font-weight: 600;
  font-size: 1em;
}
.linkRow a::after{
  content: '/';
  margin-left: 0.5rem;
}
.linkRow :last-child::after{
  content: '';
  margin-left: 0;
}

/* Dropdown */
.dropdown {
  background-color: #c7f0f7;
}
li {
  padding: 0.5rem 1rem;
  border-top: 1px solid #e2f4f7;
  border-bottom: 1px solid #e2f4f7;
  text-align: center;
  list-style: none;
}
li a {
 text-decoration: none;
 color: #4e95a3;
 font-weight: 600;
}
.banners {
  display: flex;
}
.banners img {
  flex: 1;
  margin: 1rem;
}
.banners img:hover{
  cursor: pointer;
}

/* Media Queries */
.linkRow {
  display: none;
}
.desktop-svg {
  display: none;
}
@media (min-width: 1000px) {
  .linkRow {
    display: flex;
  }
  .desktop-svg {
    display: inline-block;
  }
  .mobile {
    display: none;
  }
  /* nav {
    max-width: 1600px;
    margin: 0 auto;
  } */
}
</style>