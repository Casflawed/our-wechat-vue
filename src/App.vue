<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import SidebarNode from "./components/SidebarNode.vue";

export default {
  name: "App",
  components: {
    SidebarNode,
  },
};
</script>

<style scoped>
#app {
  height: 600px;
  width: 860px;
  margin: 20px auto;
}
</style>
