import Vue from 'vue'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
// 1.导入icon字体样式
import './assets/font/iconfont.css'



Vue.config.productionTip = false
Vue.use(Element);

new Vue({
  render: h => h(App),
}).$mount('#app')
