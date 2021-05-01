<template>
    <div class="header">
        <!-- a 태그로 자동 변환 -->
        <router-link to="/news">News</router-link> | 
        <router-link to="/asks">Asks</router-link> |
        <router-link to="/jobs">Jobs</router-link> 
    </div>
</template>

<style scoped>
    .header {        
        color: white;
        background-color: #42b883;
        display: flex;
        padding: 8px;
    }
    .header .router-link-exact-active{
        color: #35495e
    }
    .header a {
        color: white;
    }

</style>