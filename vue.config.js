module.exports = {
    devServer: {
        proxy: {
            '/weibo': {
                target: 'https://m.weibo.cn/api',
                changeOrigin: true,
                pathRewrite: {
                    '^/weibo': ''
                },
            }
        },
    },
}