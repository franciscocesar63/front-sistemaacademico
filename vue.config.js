module.exports = {
    devServer: {
        proxy: {
            '/V1': {
                target: 'http://localhost:8090',
                changeOrigin: true,
                pathRewrite: {
                    '^/V1': ''
                }
            },


        }
    }
}