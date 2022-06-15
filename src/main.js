import Vue from 'vue'
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

Vue.component("SvgIcon", SvgIcon) // 全局注册SvgIcon组件
Vue.use(Element);

Vue.prototype.$service = service; // 由于axios不是组件，只有通过这种方式才能全局引入
Vue.config.productionTip = false


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
