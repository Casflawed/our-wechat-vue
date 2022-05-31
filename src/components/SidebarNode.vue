<template>
  <section class="sidebar-node">
    <!-- 1.头像 -->
    <header>
      <img class="avatar" src="../assets/avatar/flameking.jpg" alt="用户名" />
    </header>
    <!-- 2.导航栏 -->
    <nav>
      <!-- 4.后续采用编程式路由，不需要a标签也行，直接用其他元素也可以跳转 -->
      <div class="nav_container">
        <!-- 4-1.消息 -->
        <span class="icon iconfont icon-vuexiaoxi nav"></span>
      </div>
      <div class="nav_container">
        <!-- 4-2.联系人 -->
        <span class="icon iconfont icon-vuelianxiren nav"></span>
      </div>
      <div class="nav_container">
        <!-- 4-3.收藏 -->
        <span class="icon iconfont icon-vuecollection-1 nav"></span>
      </div>
    </nav>
    <footer class="nav_container_bottom">
      <!-- 4-4.设置 -->
        <span class="icon iconfont icon-vueset-3 nav"></span>
    </footer>
  </section>
</template>

<script>
export default {
  name: "SidebarNode",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.avatar {
  width: 36px;
  height: 36px;
  margin: 20px 12px 0;
}

.nav {
  font-size: 22px;
  color: #adaeaf;
}

.nav_container {
  margin: 28px 18px 0;
}

.nav_container_bottom {
  position: absolute;
  margin: 0 18px 10px;
  bottom: 0px;
}

</style>