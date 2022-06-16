<template>
  <div class="container">
    <div class="sidebar">
      <!-- 1.侧边栏 -->
      <sidebar-node></sidebar-node>
    </div>
    <!-- 1.主页（用户列表、消息列表） -->
    <div class="main_chat">
      <chat-list></chat-list>
<!--      <message-list></message-list>-->
      <div class="message_list1">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import ChatList from "../components/ChatList.vue";
import SidebarNode from '@/components/SidebarNode'
import MessageList from "../components/MessageList.vue";
export default {
  name: "MainChat",
  components: {
    MessageList,
    ChatList,
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

.main_chat {
  height: 100%;
  width: 800px;
  display: flex;
}
.chat_list {
  position: relative;
  width: 250px;
  height: 100%;
  float: left;
  background-color: #e6e6e6;
}
.message_list1 {
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