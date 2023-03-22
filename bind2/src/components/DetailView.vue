<template>
    <div 
      class="pop" 
      :class="{active:is}" 
      v-html="de" 
      @click="close"></div>
      <!-- {{ temp_fnc }} -->
</template>

<script>

export default {
    name: 'DetailView',
    props: {
        is: {type:Boolean},
        de: {type:String}
    },
    data(){
        return{
            detail:'',
            // isActive:this.is
            isActive:false
        }        
    },
    // computed: {
    //     temp_fnc() {
    //         return this.isActive = this.is
    //     }
    // },
    // created() {
    //     return this.isActive = this.is
    // },
    // updated() {
    //     console.log(this.is, this.de)
    //     this.isActive = this.is
    // },
    methods:{
        close(e){
            if(e.target.nodeName != 'IMG')
            // this.isActive = false;
            this.$emit('child', false)  // emit : 하위(자식)컴포넌트에서 부모 컴포넌트에 값 보낼때 사용
        }
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