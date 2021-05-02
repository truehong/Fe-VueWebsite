<template>
  <nav class="navbar">
    <div class="navbar_logo">
      <i> </i>
      <a href="">Developer</a>
    </div>
    <ul class="navbar_menu">

      <router-link to="/news"><li>News</li></router-link>

      <router-link to="/asks"><li>Asks</li> </router-link>

      <router-link to="/jobs"><li>Jobs</li> </router-link>
    </ul>
    <ul class="navbar_links">
      <i>A</i>
      <i>B</i>
    </ul>
  </nav>
</template>

<style lang="scss">
body {
  margin: 0;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #263343;
  padding: 8px 12px;
  a {
    text-decoration: none;
    color: white;
  }

  li {
    text-decoration: none;
    padding : 8px 12px;
    list-style: none;
  }

  .navbar_log {
    font-size: 24px;
    color: white;
  }

  .navbar_log i {
    font-size: 24px;
    color: white;
  }
  i {
    color: white;
  }
  .navbar_menu {
      display: flex;
      padding-left: 0;
  }
}
</style>
