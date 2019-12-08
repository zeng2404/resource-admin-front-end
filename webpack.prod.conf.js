const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const GeneraterAssetPlugin = require('generate-asset-webpack-plugin')
const serverConfig = require('./serverConfig.json')
const createJson = function(compilation) {
    return JSON.stringify(serverConfig);
};


console.log(__dirname);
module.exports = merge(baseConfig, {
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
        new GeneraterAssetPlugin({
            filename: 'serverConfig.json',
            fn: (compilation, cb) => {
                cb(null, createJson(compilation));
            }
        })
    ]
});
