<template>
  <div>
    <ul class="news-list">
      <li v-for="item in this.$store.state.asks" class="news-list__post">
         <div class="news-list__point">
       {{ item.points }}
      </div>
        <div class="news-list__content__title">
          <router-link v-bind:to="`item/${item.id}`">
            <h3 class="news-list__content__title">{{ item.title }} </h3>
          </router-link>
          <small>
            {{ item.time_ago }} by
            <router-link v-bind:to="`user/${item.user}`">  {{ item.user }} </router-link>
          </small>
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
