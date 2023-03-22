<template>
  <div>
    <p>이름: {{ data.name }}</p>
    <p>메일: {{ data.mail }}</p>
    <p>내용: {{ data.content }}</p>
  </div>
  <router-link :to="{ name: 'about', query: data }">저장하기</router-link>
</template>

<script>
export default {
  name: "LetterView",
  props: {
    data: { type: Object },
  },
  updated() {
    console.log(this.data);
  },
};
</script>

<style lang="scss">
div {
  background: #eee;
  padding: 40px;
  p {
    border-bottom: 1px solid #000;
    padding: 10px;
    display: flex;
  }
  p:last-child {
    min-height: 200px;
  }
}
</style>
