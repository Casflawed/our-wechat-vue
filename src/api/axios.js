import axios from "axios";
import store from '../store'

// 创建另一个axios实例
const service = axios.create({
    // 功能1：配置请求基础路径和请求超时时间，注意请求的服务器是开启的代理服务器
    baseURL: 'http://localhost:5000',
    timeout: 5000,
});

// 配置请求、响应拦截器，二次封装axios（添加额外功能）
service.interceptors.request.use((config) => {
    // 返回请求报文
    console.log('请求',store)
    if(store.state.token != ''){
        // 登录后，每次请求头带上token
        config.headers['token'] = store.state.token
    }
    return config
});

service.interceptors.response.use(
    (response) => {
        let res = response.data;
        // 功能2：配置获取到的响应就是我们需要的数据
        if (res.code === 0) {
            return res.data
        } else {
            Element.Message.error(res.msg, {duration: 2 * 1000})
            return Promise.reject(response.data)
        }
    },
    (error) => {
        // 功能3：统一处理错误

        // 抛出错误，可在catch中捕获并由自己处理具体错误
        return Promise.reject(error);
    }
);

export default service