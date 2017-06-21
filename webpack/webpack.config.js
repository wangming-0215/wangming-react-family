var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var HtmlWebapckPlugin = require("html-webpack-plugin")

module.exports = {
    context: path.resolve(__dirname, '../src'),
    devtool: "inline-source-map",
    resolve: {
        extensions: ['.js', '.json'],
    },
    entry: ['./app/app.js'],
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: "babel-loader",
            exclude: /node_modules/,
        }, {
            test: /\.(css|scss)$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            loaclIndetName: '[name]__[local]___[hash:base64:5]',
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            }),
        }],
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({
            filename: 'css/[name].css',
            allChunks: true,
        }),
        new webpack.NamedModulesPlugin(),
        new HtmlWebapckPlugin({
            template: 'app/public/index.html',
            favicon: 'app/public/favicon.ico',
        }),
    ],
}