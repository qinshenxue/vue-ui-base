var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, '../docs/main.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/',
        filename: 'build.js',
        chunkFilename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.vue$/, loader: 'vue'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: "url",
                query: {
                    name: 'images/[name].[ext]',
                    limit: 1
                }
            },
            {
                test: /\.css$/,
                loader: "vue-style!css"
            },
            {
                test: /\.styl/,
                loader: "vue-style!css!stylus"
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}