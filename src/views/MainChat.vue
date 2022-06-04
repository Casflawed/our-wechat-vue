<template>
  <!-- 1.主页（用户列表、消息列表） -->
  <div class="main_chat">
    <chat-list></chat-list>
    <message-list></message-list>
  </div>
</template>

<script>
import ChatList from "../components/ChatList.vue";

import MessageList from "../components/MessageList.vue";
export default {
  name: "MainChat",
  components: {
    MessageList,
    ChatList,
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.main_chat {
  height: 100%;
  width: 800px;
  /* 1.内容溢出时做隐藏操作，不会出现滚轮，scroll会出现滚轮 
     2.清除浮动效果，这样main容器就不会占据sidebar的文档流*/
  overflow: hidden;
}
.chat_list {
  position: relative;
  width: 250px;
  height: 100%;
  float: left;
  background-color: #e6e6e6;
}
.message_list {
  background-color: whitesmoke;
  width: 550px;
  height: 100%;
  overflow: hidden;
}
</style>