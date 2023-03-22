<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="move">{{ $route.query.id }}</button>
    {{$route.query}}
  </div>
</template>

<script>
export default{
  setup() {
    
  },
  methods: {
    move() {
      this.$router.push('/')
    }
  }
}
</script>
