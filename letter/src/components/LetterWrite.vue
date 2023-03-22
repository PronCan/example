<template>
  <div>
    <form class="write">
      <p><input type="text" placeholder="이름" v-model="name"/></p>
      <p><input type="text" placeholder="메일" v-model="mail"/></p>
      <textarea v-model="content" />
      <input type="submit" value="전송" @click="dataSend">
    </form>
  </div>
</template>

<script>
export default {
    name: 'LetterWrite',
    data() {
        return {
            name: 'name',
            mail: '',
            content: '',
        }
    },
    methods: {
      dataSend(e) {
        e.preventDefault();
        this.$emit('send', {
          name: this.name,
          mail: this.mail,
          content: this.content
        })
      }
    }
}
</script>

<style lang="scss">
    *{box-sizing: border-box;}
    .write{
        width:100%;
        input,textarea{width:100%; padding:10px;}
        textarea{height:200px;}
        
    }

</style>