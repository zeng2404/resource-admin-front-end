const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
    // entry: './src/index.js',
    entry : {
        app: ["babel-polyfill", "./src/index.js"]
    },
    output: {
        filename: 'bundle.[hash].js',
        path: path.join(__dirname, '/dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
                // use: ['style-loader', 'css-loader']
            },
            {
                test: /(\.jsx|\.js)$/,
                use:[{
                    loader:"babel-loader",
                    options:{
                        presets:[
                            "react","es2015"
                        ]
                    }}],
                exclude:/node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|svg|ttf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: path.posix.join('static', 'img/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin()
    ]
};