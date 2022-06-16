import request from '@/api/axios'
import qs from 'qs'

export const loginByAccount = (key, code, user_account) => request({
    // 路径参数直接拼接在url中
    url: '/api/login/account/' + key + '/' + code,
    method: 'POST',
    // axios默认参数类型为application/json，restful风格的响应默认也是application/json
    data: user_account
})

export const loginByEmail = (key, code, email) => request({
    // 路径参数直接拼接在url中
    url: '/api/login/email/' + key + '/' + code + "?email=" + email,
    method: 'POST',
})

// 获取图片验证码
export const getImgCode = ( ) => request({
    // 路径参数直接拼接在url中
    url: "/api/login/captcha?" + new Date().getTime(), //加时间戳，防止浏览器利用缓存
    method: 'GET',
})

// 获取邮箱验证码
export const getVerifyEmailCode = (email) => request({
    // 路径参数直接拼接在url中
    url: "/api/login/emailCode?email=" + email,
    method: 'GET',
})

// 注册用户
export const register = (key, code, user) => request({
    // 路径参数直接拼接在url中
    url: '/api/register/user/' + key + "/" + code,
    method: 'POST',
    data: user
})