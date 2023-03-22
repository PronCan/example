<template>
    <div class="test">
      <h1>Photo List</h1>
      <ul class="list">
        <ItemList v-for="v in data" :key="v.id" :data="v" @click="()=>open(v.id)"/>
        <!-- <li v-for="v in data" :key="v.id" @click="()=>open(v.id)">
            <img :src="v.src">
            <p>{{v.name}}</p>
        </li> -->
      </ul>

      <DetailView :is="isActive" :de="detail" @child="close"/>
      
    </div>
</template>

<script>
import DetailView from '../components/DetailView.vue'
import ItemList from '../components/Items.vue'

export default {
   components: {
    ItemList,
    DetailView
   },
    data(){
        return{
            data : [
                {id:0, name:'이미지1' ,src:"./img/01.jpg"},
                {id:1, name:'이미지2' ,src:"./img/02.jpg"},
                {id:2, name:'이미지3' ,src:"./img/03.jpg"},
                {id:3, name:'이미지4' ,src:"./img/04.jpg"},
                {id:4, name:'이미지5' ,src:"./img/05.jpg"},
                {id:5, name:'이미지5' ,src:"./img/06.jpg"},
                {id:6, name:'이미지5' ,src:"./img/07.jpg"},
                {id:7, name:'이미지5' ,src:"./img/08.jpg"},
                {id:8, name:'이미지5' ,src:"./img/09.jpg"},
                {id:9, name:'이미지5' ,src:"./img/10.jpg"},
            ],
            detail:'',
            isActive:false
        }        
    },
    methods:{
        open(id){
            this.isActive = true;
            this.detail = `<img src=${this.data[id].src}>`;            
        },
        close(){
            // if(e.target.nodeName != 'IMG')
            this.isActive = false;
        }
    }
}
</script>
<style lang="scss">
ul{list-style-type: none; margin:0; padding:0;}
    .list{
        width:80%; margin:0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li{
            width:30%; margin-bottom:5%;
            img{width:100%;}
        }
    }
    
</style>