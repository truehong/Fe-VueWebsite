<template>
  <div>
      <p v-for="item in this.$store.state.news">
          <a v-bind:href="item.url"> {{item.title}} </a>
           <small> {{ item.time_ago }} by 
               <router-link v-bind:to="`user/${item.user}`">{{ item.user }} </router-link>
           </small>  
      </p>
  </div>
</template>

<script>

import { fetchNewsList } from '../api/index.js';

export default {
  computed : {
    //...mapGetters([
    //  'fetchedNews'
    //])
    //   newsItems :'fetchedNews' 
    //})
    //#3
    //...mapGetters({
    //   newsItems :'fetchedNews' 
    //})
    
    //#2 
    //...mapState({
    //  news : state => state.news
    //})

    //#1
    //ask(){
    //  return this.s$$store.state.ask;
    //}
  },
  created() {
    this.$store.dispatch('FETCH_NEWS');
   
    // fetchNewsList()
    //   .then(function(response) {
    //       console.log(response);
    //       vm.users = response.data;
    //   }).catch(function(){
    //     console.error();
    //   });


  },

}
</script>

<style>
 a {
    z-index:1;
 }

</style>