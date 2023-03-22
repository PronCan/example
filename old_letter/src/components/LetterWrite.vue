<template>
  <div>
    <p><input type="text" placeholder="이름"></p>
    <p><input type="text" placeholder="메일"></p>
    <p><input type="text" placeholder="내용"></p>
    <input type="submit" v-text="전송">
  </div>
</template>

<script>
export default {
    name: 'LetterWrite',
    props: ['data'],
    data() {
        return {
            name: this.data.name,
            mail: this.data.mail,
            content: this.data.content,
        }
    }
}
</script>

<style>

</style>