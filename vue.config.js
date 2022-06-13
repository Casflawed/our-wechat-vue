module.exports = {
    lintOnSave:false,
    devServer: {
        port:5000,
        proxy: {
            "/api": {
                target: 'http://localhost:8080', // 目标服务器的根路径
                // pathRewrite: {"^/api":""}, // 重写路径，将'/api'转换成空字符串
                // 开启websocket
                ws: true,
                // 开启端口号欺骗，值为true代理服务器会更改自己的端口号为目标服务器的端口号
                changeOrigin: true,
            }
        }
    }
}
// module.exports = {
//     devServer: {
//       proxy: 'http://localhost:8080'
//     }
// }