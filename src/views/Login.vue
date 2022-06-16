<template>
  <div class="login_container">
    <!-- 整个注册盒子 -->
    <div class="loginbox">
      <!-- 左侧的注册盒子 -->
      <div class="loginbox_in">
        <!-- 选择栏 -->
        <el-tabs v-model="activeName">
          <!-- 账号 -->
          <el-tab-pane label="账号登录" name="account">
            <el-form
              ref="user_account"
              :model="user_account"
              label-width="60px"
              :rules="account_rules"
            >
              <el-form-item label="微信id" prop="wexinId">
                <el-input v-model="user_account.wexinId"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input v-model="user_account.password"></el-input>
              </el-form-item>
              <el-form-item label="验证码" class="vertify" prop="code">
                <el-col :span="11">
                  <el-input v-model="user_account.code"></el-input>
                </el-col>
                <el-col :span="11">
                  <el-image
                    style="width: 75px; height: 32px; margin-top: 5px"
                    :src="imgUrl"
                    fit="cover"
                    @click="getImgCode"
                  >
                  </el-image>
                </el-col>
              </el-form-item>
              <el-form-item class="login_reset_btn">
                <el-button @click="login_account('user_account')"
                  >Login</el-button
                >
                <el-button @click="reset('user_account')">Reset</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <!-- 邮箱 -->
          <el-tab-pane label="邮箱登录" name="email">
            <br />
            <el-form
              ref="user_email"
              :model="user_email"
              label-width="60px"
              :rules="email_rules"
            >
              <el-form-item label="邮箱" prop="email">
                <el-input v-model="user_email.email"></el-input>
              </el-form-item>
              <el-form-item label="验证码" class="vertify" prop="code">
                <el-col :span="11">
                  <el-input v-model="user_email.code"></el-input>
                </el-col>
                <el-col :span="11">
                  <!-- 倒计时按钮 -->
                  <el-button
                    type="primary"
                    :disabled="disable"
                    :class="{ codeGeting: isGeting }"
                    @click="getVerifyEmailCode"
                  >
                    {{ getCode }}
                  </el-button>
                </el-col>
              </el-form-item>
              <el-form-item class="login_reset_btn">
                <el-button @click="login_email('user_email')">Login</el-button>
                <el-button @click="reset('user_email')">Reset</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>

        <div class="haha">@bigchen</div>
        <!-- 跳转注册页 -->
        <router-link to="/register" class="to_register"
          >若无账号请点击注册</router-link
        >
      </div>
      <!-- 右侧的注册盒子 -->
      <div class="background">
        <div class="title">Welcome to WeChat</div>
      </div>
    </div>
  </div>
</template>

<script>
import {getImgCode, loginByAccount, loginByEmail, getVerifyEmailCode} from '../api/request'
export default {
  name: "Login",
  data() {
    return {
      user_account: {
        wexinId: "",
        password: "",
        key: "",
        code: "",
      },
      user_email: {
        email: "",
        key: "",
        code: "",
      },
      // 图片验证码
      imgUrl:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",

      activeName: "account",

      // ******* 获取验证码按钮 *********
      getCode: "获取验证码",
      isGeting: false,
      count: 120,
      disable: false,
      // ******* 获取验证码按钮 *********

      // 校验规则
      account_rules: {
        wexinId: [
          { required: true, message: "请输入微信ID", trigger: "blur" },
          {
            min: 2,
            max: 15,
            message: "长度在 2 到 15 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
        code: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { min: 4, max: 4, message: "长度为4个字符串", trigger: "blur" },
        ],
      },

      email_rules: {
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"],
          },
        ],
        code: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { min: 4, max: 4, message: "长度为4个字符串", trigger: "blur" },
        ],
      },
    };
  },
  methods: {

    // 重置表单
    reset(formName) {
      this.$refs[formName].resetFields();
    },

    // 判断邮箱格式是否正确
    checkEmail(email) {
      return RegExp(
          /^([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
      ).test(email);
    },

    // 获取邮箱验证码
    getVerifyEmailCode() {
      if (!this.checkEmail(this.user_email.email)) {
        this.$alert("邮箱格式不正确", "提示信息", {
          confirmButtonText: "确定",
        });
      } else {
        const _this = this;
        // 向后端发送请求
        getVerifyEmailCode(this.user_email.email)
          .then((res) => {
            // 获取key值
            _this.user_email.key = res;
            var countDown = setInterval(() => {
              if (this.count < 1) {
                this.isGeting = false;
                this.disable = false;
                this.getCode = "获取验证码";
                this.count = 120;
                clearInterval(countDown);
              } else {
                this.isGeting = true;
                this.disable = true;
                this.getCode = this.count-- + "s后重发";
              }
            }, 500);
          })
          .catch(() => {});
      }
    },

    // 获取图片验证码
    getImgCode() {
      const _this = this;
      getImgCode()
        .then((res) => {
          _this.imgUrl = res.captchaImg;
          _this.user_account.key = res.key;
        });
    },

    // 账号登录
    login_account(formName) {
      this.$refs[formName].validate((valid) => {
        // 通过校验
        if (valid) {
          // 向后端发送请求
          loginByAccount(this.user_account.key, this.user_account.code, this.user_account)
          .then(response => {
              console.log(response)
              // 保存用户token信息
              this.$store.dispatch('getToken', response);
              // 提示信息
              this.$message({
                type: "success",
                message: "登录成功",
              });
              // 跳转到主页
              setTimeout(() => {
                this.$router.replace("/chat");
              }, 1000);
          })
          .catch(error => {
              console.log(error)
          })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },

    // 邮箱登录
    login_email(formName) {
      this.$refs[formName].validate((valid) => {
        // 通过校验
        if (valid) {
          const _this = this;
          // 向后端发送请求
          loginByEmail(this.user_email.key, this.user_email.code, this.user_email.email)
            .then((response) => {
              // 存储用户相关的信息
              alert('用户信息' + response)
              // 成功提示信息
              this.$message({
                type: "success",
                message: "登录成功",
              });
              // 跳转到首页
              setTimeout(() => {
                _this.$router.replace("/chat");
              }, 1000);
            })
            .catch(() => {});
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },

  created() {
    this.getImgCode();
  },
};
</script>

<style scoped>
/* 登录容器 */
.loginbox {
  display: flex;
  position: absolute;
  width: 800px;
  height: 400px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 #4e655d;
}

/* 左侧 */
.loginbox_in {
  /*background-color:#89AB9E;*/
  background-color: #e6e6e6;
  width: 240px;
}

/* 右侧图片 */
.background {
  width: 570px;
  background-image: url("../assets/img/wx.png");
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
  color: #4e655d;
  text-align: center;
}

/* 右侧文字浮动效果 */
.title:hover {
  font-size: 21px;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
}

/* nav滑动条 */
/deep/ .loginbox_in .el-tabs__nav-scroll {
  overflow: hidden;
  margin-left: 40px;
  margin-top: 15px;
}

/* 输入框 */
/deep/ .loginbox_in .el-input__inner {
  height: 35px;
  padding: 0 7px;
  margin-right: 10px;
  width: 90%;
}

/* 验证码输入框 */
/deep/ .loginbox_in .vertify .el-input {
  width: 85px;
}

/* 错误提示信息 */
/deep/ .el-form-item__error {
  top: 30%;
  left: 100%;
  font-size: 12px;
  padding-top: 0px;
  width: 150px;
}

/**/
/deep/ .loginbox_in .el-form-item__label {
  /*text-align: unset;*/
  /*margin-left: 10px;*/
  font-size: 12px;
}

/* item之间的间距 */
/deep/ .loginbox_in .el-form-item {
  margin-bottom: 3px;
}

/* 按钮样式 */
/deep/ .loginbox_in .el-button {
  border-radius: 12px;
  padding: 10px 12px;
}

/* nav导航栏与top距离 */
/deep/ .el-tabs__nav-wrap {
  margin-top: 45px;
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

/* 登录重置按钮样式 */
/deep/ .loginbox_in .login_reset_btn .el-button {
  margin-top: 17px;
}

.haha {
  position: absolute;
  top: 340px;
  left: 20px;
  /*margin-top:30px;*/
  /* margin-right:120px; */
  /*margin-left:20px;*/
  /*margin-bottom: 5px;*/
  font-weight: bold;
  font-size: 12px;
}

/* 跳转注册页 */
.to_register {
  position: absolute;
  top: 350px;
  background-color: transparent; /* Green */
  /*text-decoration: none;*/
  font-size: 12px;
  color: #4e655d;
  text-decoration: underline;
  display: flex;
  margin-left: 25px;
  outline: none;
  margin-top: 10px;
}

.to_register:hover {
  font-weight: bold;
  cursor: pointer;
}
</style>