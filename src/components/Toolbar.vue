<template>
 <!-- Navbar -->
  <nav id="navbar">
    <div class="navbar__logo">
      <i class="fab fa-accusoft"> </i>
      <router-link to="/home">Developer</router-link>
    </div>

    <ul class="navbar__menu">
      <li class="navbar__menu__item"><router-link to="/home">Home</router-link></li>
      <li class="navbar__menu__item"><router-link to="/news">News</router-link></li>
      <router-link to="/asks"><li class="navbar__menu__item">Asks</li></router-link>
      <router-link to="/jobs"><li class="navbar__menu__item">Jobs</li></router-link>
      <li class="navbar__menu__item"> etc </li>
    </ul>

    <ul class="navbar_icons">
      <li><i class="fab fa-twitter"></i></li>
      <li><i class="fab fa-facebook-f"></i></li>
    </ul>
  </nav>
</template>

<style lang="scss">
@import '../style.css';
</style>
