<template>
  <section class="sidebar_node">
    <!-- 1.头像 -->
    <header>
      <img class="avatar" src="../assets/img/flameking.jpg" alt="用户名" />
    </header>
    <!-- 2.导航栏 -->
    <nav>
      <div class="nav_container">
        <router-link to="/chat" class="icon iconfont icon-vuexiaoxi nav sidebar_original"/>
      </div>
      <div class="nav_container">
        <router-link to="/friend" class="icon iconfont icon-vuelianxiren nav sidebar_original"/>
      </div>
      <div class="nav_container">
        <router-link to="#1" class="icon iconfont icon-vuecollection-1 nav sidebar_original" />
      </div>
    </nav>
    <footer class="nav_container_bottom">
      <router-link to="#2" class="icon iconfont icon-vueset-3 nav sidebar_original" />
    </footer>
  </section>
</template>

<script>
export default {
  name: "SidebarNode",
  data() {
    return {
    };
  },
  methods: {
    showFriendList(){
      this.$router.push({
        name:'MainFriend',
      })
      // 获取好友列表
      this.$service.get('/api/test/one')
      .then(function(response){
        console.log(response)
      })
      .catch(function(error){
        console.log(error)
      })
    },
    showChatList(){
      this.$router.push({
        path: '/chat/message',
      })
    }
  },
};
</script>

<style>
.avatar {
  width: 36px;
  height: 36px;
  margin: 20px 12px 0;
}
.iconfont{
  font-size: 24px;
}
.sidebar_original {
  color: #adaeaf;
}
.sidebar_active {
  color: #00dc41;
}
.nav_container {
  margin: 28px 18px 0;
}

.nav_container_bottom {
  position: absolute;
  margin: 0 18px 10px;
  bottom: 0px;
}

/* 去掉router-link下划线效果 */
a {
  text-decoration: none;
}


</style>