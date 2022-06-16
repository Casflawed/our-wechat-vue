<template>
  <section class="sidebar_node">
    <!-- 1.头像 -->
    <header>
      <img class="avatar" src="../assets/img/flameking.jpg" alt="用户名" />
    </header>
    <!-- 2.导航栏 -->
    <nav>
      <!-- 4.后续采用编程式路由，不需要a标签也行，直接用其他元素也可以跳转 -->
      <div class="nav_container">
        <!-- 4-1.消息 -->
<!--        <span @click="showChatList" class="icon iconfont icon-vuexiaoxi nav sidebar_original"></span>-->
        <router-link to="/chat" class="icon iconfont icon-vuexiaoxi nav sidebar_original" @click.native="changeActive(1)"
                     :class="isActive === 1 ? 'myactive' : 'no_active'"/>
      </div>
      <div class="nav_container">
        <!-- 4-2.联系人 -->
<!--        <span @click="showFriendList" class="icon iconfont icon-vuelianxiren nav sidebar_active"></span>-->
        <router-link to="/friend" class="icon iconfont icon-vuelianxiren nav sidebar_original" @click.native="changeActive(2)"
                     :class="isActive ===2 ? 'myactive' : 'no_active'"/>
      </div>
      <div class="nav_container">
        <!-- 4-3.收藏 -->
<!--        <span class="icon iconfont icon-vuecollection-1 nav sidebar_original"></span>-->
        <router-link to="#" class="icon iconfont icon-vuecollection-1 nav sidebar_original"  @click.native="changeActive(3)"
                     :class="isActive === 3 ? 'myactive' : 'no_active'"/>
      </div>
    </nav>
    <footer class="nav_container_bottom">
      <!-- 4-4.设置 -->
<!--        <span class="icon iconfont icon-vueset-3 nav sidebar_original"></span>-->
      <router-link to="#" class="icon iconfont icon-vueset-3 nav sidebar_original"/>
    </footer>
  </section>
</template>

<script>
export default {
  name: "SidebarNode",
  data() {
    return {
      isActive: 2,
    };
  },
  methods: {
    changeActive(num){
      this.isActive = num
    },
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
  /*color: #00dc41;*/
}
.nav_container {
  margin: 28px 18px 0;
}

.nav_container_bottom {
  position: absolute;
  margin: 0 18px 10px;
  bottom: 0px;
}

/*设置router-link高亮*/
.myactive {
  color: #00dc41;
}
.no_active {
  color: #adaeaf;
}

</style>