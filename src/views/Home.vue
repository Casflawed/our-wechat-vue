<template>
  <el-container style="height: 100%">
    <!-- <h3 >通用后台管理系统</h3> -->
    <!-- 1.宽度自适应 -->
    <el-aside width="auto">
      <NavMenu></NavMenu>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import NavMenu from "../components/NavMenu.vue";
export default {
  name: "Home",
  components: {
    NavMenu,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.el-header {
  background-color: #333;
}

.el-main {
  padding-top: 0px;
}
</style>
