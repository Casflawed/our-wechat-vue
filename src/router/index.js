import Vue from "vue";
import VueRouter from "vue-router";
import MainFriend from '@/views/MainFriend'
import MainChat from '@/views/MainChat'
Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes:[
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