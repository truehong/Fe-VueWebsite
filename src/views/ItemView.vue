<template>
  <div>
    <!-- 질문 상세 -->
    <section>
      <div class="user__container">
        <img src="@/imgs/main.png" alt="" class="askitem__profile__img" />
      </div>
      <div class="user__container__description">
         <router-link :to="`/user/${fetchedItem.user}`"> <h3>{{ fetchedItem.user }} </h3></router-link>
        <small> {{ fetchedItem.time_ago }}</small>
      </div>

      <h2>
        {{ fetchedItem.title }}
      </h2>
    
    </section>
    <!-- 질문 댓글 -->
    <section>
       <div v-html="fetchedItem.content"></div>
 
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["fetchedItem"]),
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch("FETCH_ITEM", itemId);
  },
};
</script>

<style></style>
