<template>
  <div id="app">
    <div class="sidebar">
      <!-- 1.侧边栏 -->
      <sidebar-node></sidebar-node>
    </div>
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

/* 1.外侧容器-start */
.sidebar {
  background-color: #2b2c2f;
  height: 100%;
  width: 60px;
  /* 左列 */
  float: left;
}

/* .main {
  height: 100%;
  width: 800px;
  overflow: hidden;
} */
/* 1.外侧容器-end */

/* 2.内部组件-start */
.sidebar_node {
  position: relative;
  height: 100%;
}
/* 2.内部组件-end */
</style>
