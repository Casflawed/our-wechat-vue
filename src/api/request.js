import request from '@/api/axios'
import qs from 'qs'

export const loginByAccount = (key, code, user_account) => request({
    // 路径参数直接拼接在url中
    url: '/api/login/account/' + key + '/' + code,
    method: 'POST',
    // axios默认参数类型为application/json，restful风格的响应默认也是application/json
    data: user_account
})