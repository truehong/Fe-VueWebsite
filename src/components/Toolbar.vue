<template>
 <!-- Navbar -->
  <nav id="navbar">
    <div class="navbar__logo">
      <i class="fab fa-accusoft" style="color:#d49466;margin: 0 20px;" > </i>
      <a  class="navbar__a">Developer</a>
    </div>

    <ul class="navbar__menu">
      <li class ="navbar__menu__item"><router-link to="/home"><a class="navbar__a">Home</a></router-link></li>
      <li class ="navbar__menu__item"><router-link class="router" to="/news"><a class="navbar__a">News</a></router-link> </li>
      <li class ="navbar__menu__item"><router-link class="router" to="/asks"><a class="navbar__a">Asks</a></router-link></li>
      <li class ="navbar__menu__item"><router-link class="router" to="/jobs"><a class="navbar__a">Jobs</a></router-link></li>
      <li class ="navbar__menu__item"><a class="navbar__a"> etc </a></li>
    </ul>

    <ul class="navbar_icons">
      <li><i class="fab fa-twitter"></i></li>
      <li><i class="fab fa-facebook-f"></i></li>
    </ul>

    <a href="" class="navbar_togleBtn">
      <i class="fas fa-bars"></i>
    </a>
  </nav>
</template>

<style lang="scss">
@import '../style.css';
</style>



<script>






</script>
