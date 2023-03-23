<template>
  <div class="home">
    <!-- {{$store.state.data}} -->
    {{data}}
  <article>
      <h2>vuex 활용</h2>
      <input type="text" v-model="name"/>
      <button @click="save">저장</button>
      <p>전체 회원수 : {{ allUser }}</p>
    </article>
  </div>
</template>

<script>
// @ is an alias to /src

import { mapMutations, mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'HomeView',
  data() {
    return {
      name: null,
    }
  },
  computed: {
    ...mapState(['data']),
    ...mapGetters(['allUser'])
  },
  methods: {
    ...mapMutations(['addUser']),
    ...mapActions(['addUserAction']),
    save() {
      console.log(this.name);
      // this.$store.commit('addUser', {id: 1, name: this.name})
      this.addUser({id:1, name: this.name})
    }
  }
}
</script>
