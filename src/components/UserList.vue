<template>
  <div class="user-list">
    <!-- 1.搜索栏 -->
    <div class="search_wrapper">
      <input class="search_input" placeholder="搜索" />
      <i class="icon iconfont icon-vuesousuo"></i>
    </div>
    <!-- 2.item列表 -->
    <div>
      <ul>
        <!-- 3.item -->
        <li>陈正浩</li>
        <li>谢勤严</li>

      </ul>
    </div>
  </div>
</template>

<script>
// 2.引入weui组件
export default {
  name: "UserList",
  components: {},
  data() {
    return {
    };
  },
  methods:{

  }
};
</script>

<style scoped>
.search_wrapper {
  /* 1.使用弹性布局，使得子容器再x，y轴上对齐 */
  display: flex;
  /* 2.搜索框容器高度 */
  height: 26px;
  /* 3.容器边框颜色调整 */
  border: 1px solid #d9d7d6;

  margin: 16px 12px;
}
.search_input {
  /* 1.去除选中后的黑色边框效果 */
  outline: none;
  /* 2.消除边框 */
  border-style: none;
  /* 3.充满整行 */
  width: 200px;

  background-color: #e5e3e2;
  font-size: 12px;
}

.icon-vuesousuo {
  /* 1.内联块，可以使用行高属性，也可作为块元素，居中height和width，以及外边距和内边距 */
  display: inline-block;
  /* 2.内容水平垂直居中，text-align：水平居中；line-height：垂直居中 */
  line-height: 24px;
  text-align: center;

  height: 24px;
  width: 24px;
}
</style>