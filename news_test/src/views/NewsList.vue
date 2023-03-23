<template>
  <article class="newsList">
    <h2>NEWS<span>(총 {{allUserNumber}}개)</span></h2>
    
    <ul>
      <li v-for="v in data" :key="v.id">
        <p>{{v.date}}</p>
        <p>{{v.content}}</p>
        <button @click="add">X</button>
      </li>
    </ul>
  </article>
</template>

<script>
import {mapState,mapGetters} from 'vuex';

export default {
  name: 'NewsList',
  computed:{
    ...mapState(['data']),
    ...mapGetters(['allUserNumber'])
  },
  methods:{
    
    
   
  }
}
</script>

<style lang="scss">
ul,li{list-style-type: none;padding:0;margin:0;}
h2{text-align: center;}
h2 span{font-size:1rem;}
  .newsList{
    ul{
      display: flex;
      flex-wrap: wrap;
      li{
        width:20%;
        background: yellow;
        padding:30px;
        position: relative;
        margin:5%;
        button{position:absolute; right:10px; top:10px;}
        p{
          display:-webkit-box; 
          word-wrap:break-word; 
          -webkit-line-clamp:3; 
          -webkit-box-orient:vertical; 
          overflow:hidden; 
          text-overflow:ellipsis;
        }
      }
    }
  }
</style>
