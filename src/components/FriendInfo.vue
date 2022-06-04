<template>
  <div class="friend_info">
    <div class="info_wrapper">
      <div class="friend_info_box">
        <div class="introduce_info">
          <div class="introduce_left_box">
            <div class="introduce_base_info">
              <div class="nickname">王威</div>
              <svg-icon class="gender_female" iconname="icon-vuenanshi"></svg-icon>
            </div>
            <div class="signature">Life is flawed, but we still love life</div>
          </div>
          <div class="introduce_right_box">
            <img class="my_avatar" src="../assets/img/flameking.jpg" />
          </div>
        </div>
        <div class="detail_info">
          <div class="remark">
            <span class="detail_info_span">备&nbsp;&nbsp;&nbsp;注</span>flameking
          </div>
          <div class="area">
            <span class="detail_info_span">地&nbsp;&nbsp;&nbsp;区</span>湖南 常德
          </div>
          <div class="wxid">
            <span class="detail_info_span">微信号</span>flameking123
          </div>
        </div>
        <div class="message_send_box"><span>发消息</span></div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from "./SvgIcon.vue";
export default {
  components: { SvgIcon },
  name: "FriendInfo",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.friend_info_box {
  flex: 1;
  padding: 0 90px;
}
/* 介绍信息：昵称、座右铭、性别、头像 */
.introduce_left_box {
  flex: 1;
}
.introduce_info {
  display: flex;
  align-items: center;
  padding: 100px 0 45px 0;
}
.nickname {
  display: inline-block;
  font-size: 20px;
  margin-bottom: 16px;
}
.signature {
  font-size: 14px;
  color: rgba(153, 153, 153, 0.8);
}
.gender_male,
.gender_female {
  display: inline-block;
  width: 18px;
  height: 18px;
  vertical-align: top;
  margin-top: 2px;
}
.my_avatar {
  /* 图片边框圆角 */
  border-radius: 3px;
  width:60px;
  height:60px;
}

/* 个人详细信息：备注、地区、微信号 */
.remark,
.area,
.wxid {
  font-size: 14px;
  margin-top: 20px;
}
.remark {
  margin-top: 0;
}
.detail_info {
  padding: 40px 0;
  border-top: 1px solid #e7e7e7;
  border-bottom: 1px solid #e7e7e7;
}
.detail_info_span {
  font-size: 14px;
  color: rgba(153, 153, 153, 0.8);
  margin-right: 40px;
}

/* 消息发送框 */
.message_send_box {
  position: relative;
  text-align: center;
  width: 140px;
  height: 36px;
  left: 115px;
  top: 50px;
  line-height: 36px;
  font-size: 14px;
  color: #fff;
  background-color: #1aad19;
  cursor: pointer;
  border-radius: 2px;
}
</style>