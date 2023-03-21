<template>
    <div class="test">
      <h1>Photo List</h1>
      <ul class="list">
        <li v-for="v in data" :key="v.id" @click="()=>open(v.id)">
            <img :src="v.src">
            <p>{{v.name}}</p>
        </li>
      </ul>

    {{show}}
        <DetailPopVue :state="show"/>
    </div>
</template>

<script>
import DetailPopVue from '../components/DetailPop.vue';

export default {
    components:{
        DetailPopVue
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
            show:'asdf'
        }        
    },
    computed () {
        console.log(this.props)
    },
    methods:{
        open(n){
            // this.isActice = true;
            // this.detailTag = this.data[n].src;
            this.show = n;
            
            
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
    .pop{
        width:100%; height:100%;
        position:fixed; left:0; top:0; 
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0,0,0,0.6);
        display: none;
        &.active{display:flex;}
    }
</style>