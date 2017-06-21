var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    // entry: './app/index.js',
    entry: {
        main: './app/index.js',
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [ {
            test: /\.css$/,
            // use: [ 'style-loader', 'css-style' ],
            use: ExtractTextPlugin.extract({
                use: 'css-loader',
            }),
        },
        {
            test: /\.(eot|woff|woff2|ttf|svg)$/,
            use: 'file-loader',
        }],
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor', // 指定公共bundle的名字
            minChunk: function (module) {
                return module.context && module.context.indexOf('node_modules') !== -1;
            },
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest', //But since there are no more common modules between them we end up with just the runtime code included in the manifest file
        }),
    ],
};