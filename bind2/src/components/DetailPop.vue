<template lang="">
    <div class="pop" :class="{active:isActice}" @click="close">
        <img :src="detailTag">
      </div>
</template>
<script>
export default {
    name:'DetailPop',
    props:['state'],
    data(){
        return{
            isActice : false,
            detailTag : '',
        }
    },    
    methods:{
        detail(n){
            this.isActice = true;
            this.detailTag = this.data[n].src
        },
        close(){
            this.isActice = false;
        }
    },
    mounted(){
        console.log(this.state)
    },
    updated(){
        console.log(this.state)
    }

}
</script>
<style lang="scss">
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