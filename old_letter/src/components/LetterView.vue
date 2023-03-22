<template>
  <div>
    <p>이름: {{ name }}</p>
    <p>메일: {{ mail }}</p>
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
    name: 'LetterView',
    props: ['data'],
    computed: {

    },
    data() {
        return {
            name : this.data.name,
            mail : this.data.mail,
            content : this.data.content
        }
    }
}
</script>

<style>

</style>