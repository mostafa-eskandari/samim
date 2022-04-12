module.exports = {
    chainWebpack: config => {
        config.performance
            .hints(false)
            .maxEntrypointSize(400000)
            .maxAssetSize(400000)
    },
    transpileDependencies: [
        'vuetify'
    ],
    pwa: {
        workboxOptions: {
            skipWaiting: true
        }
    },
    publicPath: '/panel',
    // devServer: {
    //     open: process.platform === 'darwin',
    //     host: '0.0.0.0',
    //     port: 443, // CHANGE YOUR PORT HERE!
    //     https: true,
    //     hotOnly: false,
    // },
}