const path = require('path')

module.exports = {
    entry: './src/app.js',

    output: {
        path:  path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    }
}