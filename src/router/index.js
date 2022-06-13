import Vue from "vue";
import VueRouter from "vue-router";
import MainFriend from '@/views/MainFriend'
import MainChat from '@/views/MainChat'
import Login from "../views/Login";
import Register from "../views/Register";
Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes:[
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
            path:'/friend',
            name:'MainFriend',
            component:MainFriend
        },
        {
            path:'/chat',
            name:'MainChat',
            component:MainChat
        }
    ]
})