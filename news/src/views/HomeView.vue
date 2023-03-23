<template>
  <div class="home">
    <NewsList :data="NewsWrite"/>
    <NewsWrite @send="WriteContent"/>
  </div>
  <NewsView />
</template>

<script>
// @ is an alias to /src
import NewsList from '@/components/NewsList.vue'
import NewsWrite from '@/components/NewsWrite.vue'
import NewsView from '@/components/NewsView.vue'

export default {
  name: 'HomeView',
  components: {
    NewsList, NewsWrite, NewsView
  },
  data() {
    return {
      NewsWrite: {
        name: '',
        content: ''
      }
    }
  },
  methods: {
    addData(value) {
      console.log(value)
      this.NewsWrite = value;
    },
    open(e) {
      e.preventDefault();
      this.isActive = true;
      this.detail = 'aa';
    },
    close() {
        this.isActive = false;
    }
  }
}
</script>

<style>
.home {
  display: flex;
  justify-content: center;
  margin: 0 20%;
}
.line {
  width: 2px;
  background-color: #000;
  height: 300px
}
</style>
