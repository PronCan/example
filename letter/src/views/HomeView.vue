<template>
  <div class="home">
    <article>
      <h2>Write</h2>
      <LetterView :data="WriteInfo"/>
    </article>

    <article>
      <h2>Preview</h2>
      <LetterWrite  @send="letterSend" />
    </article>
  </div>
</template>

<script>
// @ is an alias to /src
import LetterView from '../components/LetterView.vue'
import LetterWrite from '../components/LetterWrite.vue'

export default {
  name: 'HomeView',
  components: {
    LetterView, LetterWrite
  },
  data() {
    return{
      WriteInfo: {id:3000}
    }
  },
  methods: {
    letterSend(value) {
      console.log(value)
      this.WriteInfo = value
    }
  }
}
</script>

<style lang="scss">
.home{
  display: flex; justify-content: space-between;
  width:80%; margin:100px auto; 
  article{width:48%;}
}
</style>
