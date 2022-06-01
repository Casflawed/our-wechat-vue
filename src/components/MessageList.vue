<template>
  <div class="message-list">
    <!-- 1.聊天窗口 -->
    <div class="message">
      <!-- 聊天框头部 -->
      <header class="header">
        <!-- 聊天对象 -->
        <div class="friendname">flameking</div>
      </header>
      <!-- 聊天内容容器 -->
      <div class="message-wrapper">
        <ul>
          <li class="message-item">
            <!-- 时间 -->
            <div class="time">
              <span>08:00</span>
            </div>
            <div class="message-main">
              <!-- 头像 -->
              <img width="36" height="36" src="../assets/avatar/flameking.jpg" class="friend-avatar">
              <!-- 聊天内容 -->
              <div class="message-content">
                <div class="message-text">亲爱的在么？</div>
              </div>
            </div>
          </li>
          <li class="message-item">
            <div class="time">
              <span>12:01</span>
            </div>
            <div class="message-main">
              <img width="36" height="36" src="../assets/avatar/flameking.jpg" class="friend-avatar">
              <div class="message-content">
                <div class="message-text">晚上有空一起吃饭吧。</div>
              </div>
            </div>
          </li>
          <li class="message-item">
            <div class="time">
              <span>14:44</span>
            </div>
            <div class="message-main self">
              <img width="36" height="36" src="../assets/avatar/flameking.jpg" class="avatar">
              <div class="message-content">
                <div class="message-text">没空，晚上加班！别打扰我！</div>
              </div>
            </div>
          </li>
          <li class="message-item">
            <div class="time">
              <span>17:30</span>
            </div>
            <div class="message-main self">
              <img width="36" height="36" src="../assets/avatar/flameking.jpg" class="avatar">
              <div class="message-content">
                <div class="message-text">哈哈</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- 2.消息发送窗口 -->
    <div class="message-send">
      <div class="emoji">
        <img src="../assets/logo.png" class="emoji-logo">
      </div>
      <textarea></textarea>
      <div class="send">
        <span style="color: green">发送(Enter)</span>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: "MessageList",

  data() {
    return {};
  },
  methods: {

  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


  li {
    list-style: none;
  }
  /* 聊天内容框 */
  .message {
    width: 100%;
    height: 420px;
  }
  .header {
    height: 50px;
    padding: 10px 0 0 15px;
    box-sizing: border-box;
    border-bottom: 1px solid #e7e7e7;
  }
  .friendname {
    font-size: 18px;
    line-height: 30px;
  }
  .message-wrapper {
    min-height: 370px;
    max-height: 370px;
    padding: 10px 0px;
    box-sizing: border-box;
    overflow-y: auto;
    border-bottom: 1px solid #e7e7e7;
  }
  .message-item {
    margin-top: 10px;
  }
  .message {
    margin-bottom: 3px;
  }
  .time {
    width: 100%;
    font-size: 12px;
    margin: 7px auto;
    text-align: center;
  }
  span {
    display: inline-block;
    padding: 4px 6px;
    color: #fff;
    border-radius: 3px;
    background-color: #dcdcdc;
  }
  /*好友头像*/
  .friend-avatar {
    float: left;
    margin-left: 15px;
    border-radius: 3px;
  }
  .message-content {
    display: inline-block;
    margin-left: 8px;
    position: relative;
    padding: 6px 10px;
    max-width: 330px;
    min-height: 36px;
    line-height: 24px;
    box-sizing: border-box;
    font-size: 14px;
    text-align: left;
    word-break: break-all;
    background-color: #fafafa;
    border-radius: 4px;
  }

  .self {
    text-align: right;
  }
  .avatar {
    float: right;
    margin: 0 15px;
  }
  .message-content {
    background-color: #b2e281;
  }

  /* 发送内容框 */
  .message-send {
    position: relative;
    height: 165px;
    /*background: #fff;*/
  }
  /*表情框*/
  .emoji {
    position: relative;
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding: 0 15px;
    box-sizing: border-box;
    color: #7c7c7c;
  }
  .emoji-logo{
    width: 18px;
    height: 18px;
  }

  textarea {
    box-sizing: border-box;
    padding: 2px 15px;
    height: 110px;
    width: 100%;
    border: none;
    outline: none;
    font-family: "Micrsofot Yahei";
    resize: none;
    background-color: whitesmoke;
  }
  .send {
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 90px;
    height: 28px;
    line-height: 28px;
    box-sizing: border-box;
    text-align: center;
    border: 1px solid #e5e5e5;
    border-radius: 3px;
    /*background: #f5f5f5;*/
    font-size: 14px;
    color: #7c7c7c;
  }



</style>