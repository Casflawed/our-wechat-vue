import jwtDecode from 'jwt-decode'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


// 业务逻辑，请求方法
const actions = {

    getToken({commit}, data){
        commit('GET_TOKEN', data)
    },

}


const mutations = {


    GET_TOKEN:(state, data) =>{
        state.token = data
        // 解析token
        const decodeToken = jwtDecode(data)
        state.userId = decodeToken.userId
        state.avatarUrl = decodeToken.avatarUrl
        state.weixinId = decodeToken.weixinId
    }
}

const state = {
    token: '',
    userId: '',
    avatarUrl: '',
    weixinId: '',
}


export default new Vuex.Store({
    actions,
    mutations,
    state
})