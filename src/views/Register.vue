<template>
  <div class="register_container">
    <!-- 整个注册盒子 -->
    <div class="registerbox">
      <!-- 左侧的注册盒子 -->
      <div class="registerbox_in">
        <div class="registerbox_form">
          <p class="register_title"> 注册界面 </p>
          <el-form :rules="rules" :model="user" ref="user">
            <!-- 用户名 -->
            <el-form-item prop="wexinId">
              <el-input
                  type="text"
                  placeholder="请输入微信ID（2-12）"
                  prefix-icon="el-icon-user"
                  v-model="user.wexinId"/>
            </el-form-item>
            <!-- 密码 -->
            <el-form-item prop="password">
              <el-input
                  type="password"
                  placeholder="请输入密码（6-15）"
                  prefix-icon="el-icon-key"
                  show-password
                  v-model="user.password"/>
            </el-form-item>
            <!-- 确认密码 -->
            <el-form-item prop="re_password">
              <el-input
                  type="password"
                  placeholder="确认密码"
                  prefix-icon="el-icon-lock"
                  show-password
                  v-model="user.re_password"/>
            </el-form-item>
            <!-- 邮箱 -->
            <el-form-item prop="email">
              <el-input
                  type="email"
                  placeholder="邮箱"
                  prefix-icon="el-icon-message"
                  v-model="user.email"/>
            </el-form-item>
            <el-form-item class="verify">
              <el-input
                  placeholder="验证码"
                  prefix-icon="el-icon-timer"
                  v-model="code"
              />
              <!-- 倒计时按钮 -->
              <el-button type="primary" :disabled="disable" :class="{ codeGeting:isGeting }" @click="getVerifyCode">
                {{ getCode }}
              </el-button>
            </el-form-item>
            <el-form-item>
              <el-button style="margin-left: 80px;margin-top: 10px" @click="register('user')">Register</el-button>
            </el-form-item>
          </el-form>

        </div>

        <div class="haha">@bigchen</div>
        <!-- 跳转注册页 -->
        <router-link to="/login" class="to_login">返回登录页</router-link>
      </div>
      <!-- 右侧的注册盒子 -->
      <div class="background">
        <!--        <el-carousel trigger="click" height="400px" >-->
        <!--          <el-carousel-item v-for="image in images" :key="image">-->
        <!--            <img :src="image" alt="nothing" style="width: 100%;height: 100%">-->
        <!--          </el-carousel-item>-->
        <!--        </el-carousel>-->
        <div class="title">Welcome to WeChat</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {

    // 确认两次密码一致的规则
    var checkPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.user.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };

    return {
      // images: [
      //   'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
      // ],

      user: {
        wexinId: '',
        password: '',
        re_password: '',
        address: '',
        email: '',
      },
      code: '',
      key: '',  // 验证码key

      // ******* 获取验证码按钮 *********
      getCode: '获取验证码',
      isGeting: false, // 是否获取验证码
      count: 120,  // 验证码计数器
      disable: false,   // 是否不可用
      // ******* end *********


      // 校验规则
      rules: {
        wexinId: [
          {required: true, message: '请输入微信ID', trigger: 'blur'},
          {min: 2, max: 15, message: '长度在 2 到 15 个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur'}
        ],
        re_password: [
          {validator: checkPassword, trigger: 'blur'}
        ],
        address: [
          {required: true, message: '请输入地址', trigger: 'blur'},
          {min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur'}
        ],
        email: [
          {required: true, message: '请输入邮箱地址', trigger: 'blur'},
          {type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}
        ]
      }
    }
  },
  methods: {
    // 判断邮箱格式是否正确
    checkEmail(email) {
      return RegExp(/^([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/).test(email);
    },
    // 获取验证码
    getVerifyCode() {
      if (this.user.email === '' || !this.checkEmail(this.user.email)) {
        // alert(this.user.email)
        this.$alert('邮箱格式不正确', '提示信息', {
          confirmButtonText: '确定'
        });
      } else {
        const _this = this
        // 向后端发送请求
        this.$service.get('/api/register/emailCode?email=' + this.user.email)
            .then(res => {
              // 获取key值
              _this.key = res
              var countDown = setInterval(() => {
                if (this.count < 1) {
                  this.isGeting = false
                  this.disable = false
                  this.getCode = '获取验证码'
                  this.count = 6
                  clearInterval(countDown)
                } else {
                  this.isGeting = true
                  this.disable = true
                  this.getCode = this.count-- + 's后重发'
                }
              }, 500)
            })
            .catch(() => {

            })
      }
    },

    // 注册
    register(formName) {
      this.$refs[formName].validate((valid) => {
        // 通过校验
        if (valid) {
          // 判断验证码是否为空
          if (this.code.length !== 4) {
            this.$message({
              type: 'error',
              message: '验证码错误！'
            });
          } else {
            const _this = this
            // 向后端发送请求
            this.$service.post('/api/register/user/' + this.key + "/" + this.code, this.user)
                .then(() => {
                  this.$message({
                    type: 'success',
                    message: '注册成功'
                  });
                  // 跳转到登录页
                  setTimeout(() => {
                    _this.$router.push("/login")
                  }, 500)
                })
                .catch(() => {

                })
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  }
}
</script>

<style scoped>

/*/deep/ .el-carousel{*/
/*  height: 400px;*/
/*}*/

/*.el-carousel__item {*/
/*  margin: 0;*/
/*}*/

/*.el-carousel__item:nth-child(2n) {*/
/*  background-color: #99a9bf;*/
/*}*/

/*.el-carousel__item:nth-child(2n+1) {*/
/*  background-color: #d3dce6;*/
/*}*/

/* 注册容器 */
.registerbox {
  display: flex;
  position: absolute;
  width: 800px;
  height: 400px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 #4E655D;
}

/* 左侧 */
.registerbox_in {
  /*background-color:#89AB9E;*/
  background-color: #e6e6e6;
  width: 240px;
}

/* 右侧图片 */
.background {
  width: 570px;
  background-image: url('../assets/img/wx.png');
  background-size: 100% 100%;
  /*background-size:cover;*/
  font-family: sans-serif;
}

/* 右侧文字样式 */
.title {
  width: 100%;
  margin-top: 320px;
  font-weight: bold;
  font-size: 20px;
  color: #4E655D;
  text-align: center;
}

/* 右侧文字浮动效果 */
.title:hover {
  font-size: 21px;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
}

.register_title {
  text-align: center;
  margin-top: 20px;
  color: #409EFF;
  font-size: 18px;
  margin-bottom: 18px;
  letter-spacing: 2px;
}

/* 获取验证码按钮 */
/deep/ .el-col .el-button {
  width: 80px;
  font-size: 1px;
  border-radius: 12px;
  padding: 10px 12px;
}

/* 点击获取验证码后的样式 - 变灰色 */
.codeGeting {
  background: #cdcdcd;
  border-color: #cdcdcd;
}

/* form表单样式 */
/deep/ .el-form {
  text-align: center;
}

/* 输入框 */
/deep/ .el-input {
  height: 35px;
  padding: 0 2px;
  /*margin-right: 10px;*/
  width: 80%;
}

/* item之间的间距 */
/deep/ .el-form-item {
  margin-bottom: 10px;
}

/* 错误提示信息 */
/deep/ .el-form-item__error {
  top: 30%;
  left: 80%;
  font-size: 12px;
  padding-top: 0px;
  width: 150px;
}

/* 验证码输入框 */
/deep/ .verify .el-input {
  width: 110px;
}

/* 获取验证码按钮 */
/deep/ .el-button {
  width: 80px;
  font-size: 1px;
  border-radius: 12px;
  padding: 10px 12px;
}

/* @bigchen */
.haha {
  position: absolute;
  top: 340px;
  left: 20px;
  font-weight: bold;
  font-size: 12px;
}

/* 跳转注册页 */
.to_login {
  position: absolute;
  top: 350px;
  background-color: transparent; /* Green */
  /*text-decoration: none;*/
  font-size: 12px;
  color: #4E655D;
  text-decoration: underline;
  display: flex;
  margin-left: 25px;
  outline: none;
  margin-top: 10px;

}

.to_login:hover {
  font-weight: bold;
  cursor: pointer;
}
</style>