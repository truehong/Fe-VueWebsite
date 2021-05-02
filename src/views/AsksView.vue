<template>
    <div>
         <p v-for="item in this.$store.state.asks">
            <a v-bind:href="item.url">   {{ item.title }} </a>
            <small> {{ item.time_ago }} by {{item.user }}</small>
        </p>
    </div>
</template>

<script>

export default {
   
    // created, beforeMount 에서 주로 활용
    created() {
        this.$store.dispatch("FETCH_ASKS");
    }

}
</script>
<style>
</style>