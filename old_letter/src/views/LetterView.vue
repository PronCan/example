<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <LetterView />
  </div>
</template>

<script>
// @ is an alias to /src
import LetterView from '@/components/LetterView.vue'

export default {
  name: 'LetterView',
  components: {
    LetterView, LetterWrite
  }
}
</script>
