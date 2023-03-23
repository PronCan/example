<template>
  <article class="write" v-if="isActive===true">
    <h2>글쓰기</h2>
    <form @submit.prevent="submitHanduler">
      <input type="text" v-model="userName"/>
      <textarea v-model="newsContent" />
      <input type="submit"/>
    </form>
    
  </article>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'NewsWrite',
  props:['isActive'],
  data(){
    return{ userName:null, newsContent:null}
  },
  methods:{
    ...mapActions(['createUser']),
    submitHanduler(){
      let today = new Date();
      today = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
      this.createUser({id:Date.now(),name:this.userName, content:this.newsContent, date:today});
      
      this.userName='';
      this.newsContent='';
      this.$emit('close')
    }
  }
}
</script>
<style  lang="scss" scoped>

*{box-sizing: border-box;}
.write{
  position:fixed; z-index:9999;
  right:3%; top:100px;
  width:400px; 
  background: rgb(255, 255, 128);
  padding:40px;
  border:1px solid rgb(86, 86, 86);
  box-shadow: 10px 10px 10px rgba(0,0,0,0.2);
  border-radius: 20px;
  input{width:100%; padding:10px;}
  textarea{width:100%; height:200px; margin:10px 0; padding:10px;}
}
  
</style>
