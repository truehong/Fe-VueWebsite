<template>
  <div id="app">
    <toor-bar></toor-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import ToorBar from "./components/Toolbar.vue";
export default {
  components: {
    ToorBar,
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

#app {
}
</style>
