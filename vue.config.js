
const test = 'http://gc169.justprice.cn'
module.exports = {
    // 选项...
    publicPath:process.env.NODE_ENV === 'development'?'':'/',
    outputDir:'dist',
    assetsDir:'',
    indexPath:'index.html',
    productionSourceMap: false,
    lintOnSave: true,
    devServer: {// 环境配置
        host: 'localhost',
        port: 1234,
        https: false,
        hotOnly: false,
        open: false, //配置自动启动浏览器
        proxy: {// 配置多个代理(配置一个 proxy: 'http://localhost:4000' )
            '/api': {
                target: test + ':3000',
                pathRewrite: { '^/api': '' },
                ws: true,
                changeOrigin: true,
                secure: false
            },
        }
    }
}