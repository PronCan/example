<template>
  <div>
    <header>
      <nuxt-link to="/">Home</nuxt-link>
      <NuxtLink to="/about">About</NuxtLink>
    </header>
    <div class="image"> 
      <img src="@/assets/img/img-04.jpg" />
    </div>
  
    <TestContent/>
  </div>
</template>

<script>
export default {
    name: "IndexPage",

}
</script>

<style scoped>
  .image{border:5px solid red;}
</style>
