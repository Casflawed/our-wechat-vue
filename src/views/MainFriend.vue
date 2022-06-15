<template>
  <div class="container">
    <div class="sidebar">
      <!-- 1.侧边栏 -->
      <sidebar-node></sidebar-node>
    </div>
    <!-- 1.主页（用户列表、消息列表） -->
    <div class="main_friend">
      <friend-list></friend-list>
      <friend-info></friend-info>
    </div>
  </div>
</template>

<script>
import FriendList from "../components/FriendList.vue";
import FriendInfo from "../components/FriendInfo.vue";
import SidebarNode from '../components/SidebarNode.vue';

export default {
  name: "MainFriend",
  components: {
    FriendList,
    FriendInfo,
    SidebarNode
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.container {
  height: 100%;
  width: 800px;
  display: flex;
}
.main_friend {
  height: 100%;
  width: 800px;
  display: flex;
}
.friend_list {
  position: relative;
  width: 250px;
  height: 100%;
  float: left;
  background-color: #e6e6e6;
}
.friend_info {
  background-color: whitesmoke;
  width: 550px;
  height: 100%;
  overflow: hidden;
}

.sidebar {
  background-color: #2b2c2f;
  height: 100%;
  width: 60px;
  float: left;
}
.sidebar_node {
  position: relative;
  height: 100%;
}
</style>