import Vue from 'vue'
// 引入Element-ui及其样式
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue'
import SvgIcon from '@/components/SvgIcon'
// 导入symbol代码
import './assets/font/iconfont.js'
// 兼容Fond class样式
import './assets/font/iconfont.css'
// 导入路由
import router from './router'
// 导入axios二次封装工具
import service from '@/api/axios'
import store from './store';
import websocket from './websocket'

Vue.component("SvgIcon", SvgIcon) // 全局注册SvgIcon组件
Vue.use(Element);

Vue.prototype.$websocket = websocket // 注册websocket全局变量
Vue.prototype.$service = service; // 由于axios不是组件，只有通过这种方式才能全局引入
Vue.config.productionTip = false


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#index')

