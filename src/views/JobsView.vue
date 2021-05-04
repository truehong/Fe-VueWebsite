<template>
  <div>
    <ul class="news-list">
    <li class="news-list__post" v-for="job in this.$store.state.jobs">
           <div class="news-list__point">
   
  </div>
       <div class="news-list__content__title">
      <a v-bind:href="job.url"> <h3 class="news-list__content__title"> {{ job.title }} </h3></a>
      <small> {{ job.time_ago }} , by {{ job.domain }} </small>
       </div>
    </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("FETCH_JOBS");
  },
};
</script>

<style lang="scss">
</style>
