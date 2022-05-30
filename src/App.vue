<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
import Home from '@/views/Home'
export default {
  name: "App",
  components: {
    Home
  },
};
</script>

<style scoped>
#app {
  /* 一屏高 */
  height: 100vh;
}
</style>
