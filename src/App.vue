<template>
  <div id="app">
    <div class="sidebar">
      <card></card>
      <list></list>
    </div>
    <div class="main">主页面</div>
  </div>
</template>

<script>
import Card from "./components/card.vue";
import List from "./components/list.vue";
export default {
  name: "App",
  components: {
    Card,
    List,
  },
};
</script>

<style scoped>
#app {
  margin: 20px auto;
  width: 800px;
  height: 600px;
  background-color: skyblue;
  overflow: hidden;
  border-radius: 3px;
}

.sidebar,
.main {
  height: 100%;
}

.sidebar {
  float: left;
  width: 200px;
  color: #f4f4f4;
  background-color: #2e3238;
}

.main {
        position: relative;
        overflow: hidden;
        background-color: skyblue;
    }
</style>
