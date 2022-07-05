<template>
  <div class="chat_list">
    <!-- 1.搜索栏 -->
    <div class="search_wrapper">
      <input class="search_input" placeholder="搜索" />
      <i class="icon iconfont icon-vuesousuo"></i>
    </div>
    <!-- 2.item列表 -->
    <div class="chat_list_wrapper">
      <ul>
        <!-- 3.item -->
        <li>
          <div class="chat_item_wrapper" @click="goToMessage">
            <div class="chat_item_block">
              <div class="chat_item_left">
                <img class="chat_avatar" src="../assets/img/flameking.jpg" />
              </div>
              <div class="chat_item_mid">
                <span class="chat_nick">flameking</span>
                <p class="chat_digest">woc</p>
              </div>
              <div class="chat_item_right">
                <span class="chat_time_stamp">12:00</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="chat_item_wrapper" @click="goToMessage">
            <div class="chat_item_block">
              <div class="chat_item_left">
                <img class="chat_avatar" src="../assets/img/flameking.jpg" />
              </div>
              <div class="chat_item_mid">
                <span class="chat_nick">flameking</span>
                <p class="chat_digest">woc</p>
              </div>
              <div class="chat_item_right">
                <span class="chat_time_stamp">12:00</span>
              </div>
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
  name: "chatList",
  components: {},
  data() {
    return {};
  },
  methods: {
    goToMessage(){
      var payload = 1;
      this.$store.dispatch('switchChannelId', payload);
    }
  },
  mounted(){
    console.log('chatList的Vuex：', this.$store)
  }
};
</script>

<style scoped>
/* 好友选项卡样式start */
.chat_item_block:hover {
  background-color: #c4c4c4;
}
.chat_item_active {
  /* 好友选项卡激活样式 */
  background-color: #c4c4c4;
}
ul {
  /* 消除list样式 */
  list-style-type: none;
}
.chat_item_block {
  /* block采用flex布局，子元素x,y方向自动对其 */
  display: flex;
  padding: 12px;
}
.chat_nick {
  /* display: inline-block;
  line-height: 36px;
  text-align: center; */
  font-size: 14px;
}
.chat_digest {
  font-size: 12px;
  color: #999;
  width: 150px;
  height: 15px;
}
.chat_time_stamp {
  font-size: 10px;
  color: #999;
}
.chat_avatar {
  width: 42px;
  height: 42px;
  margin-right: 12px;
  border-radius: 5px;
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
  /* 1.去除选中后的黑色内边线效果 */
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

  width: 24px;
  height: 24px;
  font-size: 14px;
}
/* 搜索框样式end */
</style>