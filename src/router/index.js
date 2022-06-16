import Vue from "vue";
import VueRouter from "vue-router";
import MainFriend from '@/views/MainFriend'
import MainChat from '@/views/MainChat'
import Login from "../views/Login";
import Register from "../views/Register";
import Message from '../components/MessageList'
import store from '../store'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  // linkActiveClass:'myactive',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/friend',
      name: 'MainFriend',
      component: MainFriend
    },
    {
      path: '/',
      redirect: '/chat'
    },
    {
      path: '/chat',
      name: 'MainChat',
      component: MainChat,
      children: [
        {
          path: '/chat/message',
          name: 'Message',
          component: Message
        },
      ]
    }
  ],

})



// 全局前置路由守卫，每次路由切换之前和路由初始化时将被调用
router.beforeEach((to, from, next) => {
  console.log(to, from, next)
  if (to.path === '/login' || to.path === '/register') {
    // 1.注册和登录路由放行
    next()
    // eslint-disable-next-line no-constant-condition
  } else if (store.state.token != '') {
    // token存在，放行所有的请求
    next()
  } else {
    next('/login')
  }
})

export default router
