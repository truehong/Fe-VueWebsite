<template>
    <div>
        <div v-for="ask in asks"> {{ ask.title }} </div>
    </div>
</template>

<script>
import { fetchAskList } from '../api/index.js'
export default {
    data() {
        return {
            asks : []
        }
    },
    
    // created, beforeMount 에서 주로 활용
    created() {
       var vm = this; 
       fetchAskList()
            .then(function(response){
               vm.asks = response.data
            })
            .catch(function(error){
                console.log(error);
            });
    }

}
</script>

<style>

</style>