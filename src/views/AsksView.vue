<template>
  <div>
    <ul>
      <li class="ask" v-for="item in this.$store.state.asks">
        <a v-bind:href="item.url">{{ item.title }}</a>
        <div class="author">
          <h5>{{ item.time_ago }} by {{ item.user }}</h5>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // created, beforeMount 에서 주로 활용
  created() {
    this.$store.dispatch("FETCH_ASKS");
  },
};
</script>
<style></style>
