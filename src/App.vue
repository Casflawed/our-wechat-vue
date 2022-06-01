<template>
  <div id="app">
    
    <div class="sidebar">
      <!-- 1.侧边栏 -->
      <sidebar-node></sidebar-node>
    </div>
    <!-- 1.主页（用户列表、消息列表） -->
    <div class="main">
      <friend-list></friend-list>
      <message-list></message-list>
    </div>
    <div></div>
  </div>
</template>

<script>
import FriendList from './components/FriendList.vue';
import MessageList from "./components/MessageList.vue";
import SidebarNode from "./components/SidebarNode.vue";

export default {
  name: "App",
  components: {
    MessageList,
    FriendList,
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

.main {
  height: 100%;
  width: 800px;
  /* 1.内容溢出时做隐藏操作，不会出现滚轮，scroll会出现滚轮 
     2.清除浮动效果，这样main容器就不会占据sidebar的文档流*/
  overflow: hidden;
}
/* 1.外侧容器-end */

/* 2.内部组件-start */
.sidebar-node {
  position: relative;
  height: 100%;
}

.friend-list {
  position: relative;
  width: 250px;
  height: 100%;
  float: left;
  background-color: #e6e6e6;
}

.message-list {
  background-color: whitesmoke;
  width: 550px;
  height: 100%;
  overflow: hidden;
}
/* 2.内部组件-end */
</style>
