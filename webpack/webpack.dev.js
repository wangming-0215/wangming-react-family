var webpackConfig = require('./webpack.config');
var Merge = require('webpack-merge');
var webpack = require('webpack');

var host = 'localhost';
var port = 8080

webpackConfig.entry.unshift('webpack/hot/only-dev-server');
webpackConfig.entry.unshift(`webpack-dev-server/client?http://${ host }:${ port }`);
webpackConfig.entry.unshift('react-hot-loader/patch');

var config = function () {
    return Merge(webpackConfig, {
        devServer: {
            port: port,
            hot: true,
            historyApiFallback: true,
            inline: true,
            stats: {
                colors: true,
                process: true,
            },
        },
        plugins: [
            // 开发模式
            // new webpack.optimize.UglifyJsPlugin({
            //     beautify: false,
            //     mangle: {
            //         screw_ie8: true,
            //         keep_fname: true,
            //     },
            //     compress: {
            //         screw_ie8: true,
            //     },
            //     comments: false,
            // }),
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('development'),
                },
            }),
        ],
    });
};
module.exports = config();