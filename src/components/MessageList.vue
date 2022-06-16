<template>
  <div class="message_list">
    <!-- 1.聊天窗口 -->
    <div class="message" v-show="$store.state.channelId > 0">
      <!-- 聊天框头部 -->
      <header class="header">
        <!-- 聊天对象 -->
        <div class="friendname">flameking</div>
      </header>
      <!-- 聊天内容容器 -->
      <div class="message_wrapper">
        <ul>
          <li class="message_item" v-for="(message) in this.records ">
            <!-- 时间 -->
            <div class="time">
              <span>{{ formatDate(message.time) }}</span>
            </div>
            <div class="message_main" :class="message.channelId === 1 ? 'self' : ''">
              <!-- 头像 -->
              <img
                width="36"
                height="36"
                src="../assets/img/flameking.jpg"
                :class="message.channelId === 1 ? 'avatar' : 'friend_avatar'"
              />
              <!-- 聊天内容 -->
              <div class="message_content">
                <div class="message_text">{{ message.body }}</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- 2.消息发送窗口 -->
    <div class="message_send" v-show="$store.state.channelId > 0">
      <div class="emoji">
        <img src="../assets/logo.png" class="emoji_logo" />
      </div>
      <textarea v-model="msg" @keyup.enter="sendMsg"></textarea>
      <div class="send" >
        <span style="color: green" @click='sendMsg'>发送(Enter)</span>
      </div>
    </div>
  </div>
</template>
<script>
// 建立WebSocket连接
const ws = new WebSocket("ws://localhost:7379");
export default {
  name: "MessageList",
  data() {
    return {
      records: [
          {
            time: new Date().getTime(),
            body: '哈哈哈',
            channelId: 1,
            weixinId: 'bigchen',
            imgUrl: '',
          },
          {
            time: new Date().getTime(),
            body: '哈哈哈----',
            channelId: 2,
            weixinId: 'bigchen',
            imgUrl: '../assets/img/flameking.jpg',
          },
          {
            time: new Date().getTime(),
            body: '哈哈哈~~~',
            channelId: 1,
            weixinId: 'bigchen',
            imgUrl: '../assets/img/flameking.jpg',
          }
      ],
      msg: '',
    };
  },
  methods: {
    // 时间格式化
    formatDate(time,format='YY-MM-DD hh:mm:ss'){
      var date = new Date(time);

      var year = date.getFullYear(),
          month = date.getMonth()+1,//月份是从0开始的
          day = date.getDate(),
          hour = date.getHours(),
          min = date.getMinutes(),
          sec = date.getSeconds();
      var preArr = Array.apply(null,Array(10)).map(function(elem, index) {
        return '0'+index;
      });

      var newTime = format.replace(/YY/g,year)
          .replace(/MM/g,preArr[month]||month)
          .replace(/DD/g,preArr[day]||day)
          .replace(/hh/g,preArr[hour]||hour)
          .replace(/mm/g,preArr[min]||min)
          .replace(/ss/g,preArr[sec]||sec);

      return newTime;
    },

    sendMsg(){
      ws.send(JSON.stringify({
        weixinId: this.$store.state.weixinId,
        channelId: this.$store.state.channelId,
        msg: this.msg
      }))
      let record = {
        time: new Date().getTime(),
        body: this.msg,
        channelId: 1,
        weixinId: 'bigchen',
        imgUrl: '',
      }
      this.records.push(record)
      this.msg = ''
    },
    // 定义ws事件回调函数
    handleWsOpenEvent(event){
      console.log("websocket 连接通道活跃", event)
    },
    handleWsCloseEvent(event){
      console.log("websocket 连接通道关闭", event)

    },
    handleWsErrorEvent(event){
      console.log("websocket 连接出错", event)

    },
    handleWsMessageEvent(event){
      console.log("websocket 连接消息", event)
    },

  },
  mounted(){
    // 初始化WebSocket
    ws.addEventListener('open', this.handleWsOpenEvent.bind(this), false)
    ws.addEventListener('close', this.handleWsCloseEvent.bind(this), false)
    ws.addEventListener('error', this.handleWsErrorEvent.bind(this), false)
    ws.addEventListener('message', this.handleWsMessageEvent.bind(this), false)
    console.log("消息列表的连接通道Channel的编号：", this.$store.state.channelId)
  }
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
.message_wrapper {
  min-height: 370px;
  max-height: 370px;
  padding: 10px 0px;
  box-sizing: border-box;
  overflow-y: auto;
  border-bottom: 1px solid #e7e7e7;
}
.message_item {
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
.friend_avatar {
  float: left;
  margin-left: 15px;
  border-radius: 3px;
}
.message_content {
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
.message_content {
  background-color: #b2e281;
}

/* 发送内容框 */
.message_send {
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
.emoji_logo {
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