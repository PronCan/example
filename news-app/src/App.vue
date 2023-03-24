<template>
  <nav>
    <button @click="newsWrite"> {{isActive?'-':'+'}}</button>
    <NewsWrite :isActive="isActive" @close="newsWrite" />
  </nav>
  <router-view/>
</template>

<script>
  import NewsWrite from './components/NewsWrite.vue'
  export default {
    components: { NewsWrite },
    data(){
      return{ isActive:false }
    },
    methods: {
      newsWrite(){
        this.isActive = !this.isActive;
      }
    },
  }
</script>

<style lang="scss" scoped>
  nav{
    button{
      width:60px; height:60px;
      font-size:2rem;
      border-radius: 100%;
      background: yellow;
      border:1px solid #000;
      right:30px; top:30px;
      position:fixed;      
    }
  }
</style>
