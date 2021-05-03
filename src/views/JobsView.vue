<template>
  <div>
    <div class="job" v-for="job in this.$store.state.jobs">
     
      <a v-bind:href="job.url"> {{ job.title }} </a>
      <small> {{ job.time_ago }} , by {{ job.domain }} </small>
    </div>
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
