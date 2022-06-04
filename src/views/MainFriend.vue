<template>
  <!-- 1.主页（用户列表、消息列表） -->
  <div class="main_friend">
    <friend-list></friend-list>
    <friend-info></friend-info>
  </div>
</template>

<script>
import FriendList from "../components/FriendList.vue";
import FriendInfo from "../components/FriendInfo.vue";

export default {
  name: "MainFriend",
  components: {
    FriendList,
    FriendInfo,
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.main_friend {
  height: 100%;
  width: 800px;
  /* 1.内容溢出时做隐藏操作，不会出现滚轮，scroll会出现滚轮 
     2.清除浮动效果，这样main容器就不会占据sidebar的文档流*/
  overflow: hidden;
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
</style>