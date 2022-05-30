import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: '/home',
        name: 'Home',
        // 按需引入
        component: () => import('../src/views/Home.vue')
    },
    {
        path: '/user',
        name: 'User',
        // 按需引入
        component: () => import('../src/views/User.vue')
    }
];

const routers = new VueRouter({
    mode: "history",
    routes
})

export default routers