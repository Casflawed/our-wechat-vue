<template>
  <div class="friend-list">
    <!-- 1.搜索栏 -->
    <div class="search_wrapper">
      <input class="search_input" placeholder="搜索" />
      <i class="icon iconfont icon-vuesousuo"></i>
    </div>
    <!-- 2.item列表 -->
    <div class="friend_list_wrapper">
      <ul>
        <!-- 3.item -->
        <li>
          <div class="friend_item_wrapper">
            <div class="prefix_letter">F</div>
            <div class="friend_item_block active">
              <img class="friend_avatar" src="../assets/avatar/flameking.jpg" />
              <span class="friend_nick">flameking</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// 2.引入weui组件
export default {
  name: "FriendList",
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
/* 好友选项卡样式start */
.prefix_letter {
  /* 联系人名称首字母 */
  color: #999;
  padding: 0px 12px;
  font-size: 12px;
}
.active {
  /* 好友选项卡激活样式 */
  background-color: #c4c4c4;
}
ul{
  /* 消除list样式 */
  list-style-type: none;
}
.friend_item_block {
  /* block采用flex布局，子元素x,y方向自动对其 */
  display: flex;
  padding: 12px;
}
.friend_nick {
  display: inline-block;
  line-height: 36px;
  text-align: center;
  font-size: 14px;
}
.friend_avatar {
  width: 36px;
  height: 36px;
  margin-right: 12px;
}
/* 好友选项卡样式end */


/* 搜索框样式start */
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
  /* 1.内联块，可以使用line-height属性，也可作为块元素，居中height和width，以及外边距和内边距 */
  display: inline-block;
  /* 2.内容水平垂直居中，text-align：水平居中；line-height：垂直居中 */
  line-height: 24px;
  text-align: center;

  height: 24px;
  width: 24px;
}
/* 搜索框样式end */
</style>