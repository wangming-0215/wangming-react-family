var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var HtmlWebapckPlugin = require("html-webpack-plugin")

module.exports = {
    devtool: "inline-source-map",
    resolve: {
        extensions: ['.js', '.json'],
    },
    entry: [path.resolve(__dirname, '../js/source/app.js')],
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, '../js/build'),
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: "babel-loader",
            exclude: /node_modules/,
        },
        {
            test: /\.(css|scss)$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[name]__[local]___[hash:base64:5]',
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
        },
        {
            test: /\.(png|jpg|gif|svg)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: '[name].[ext]'
                    }
                }
            ]
        }],
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({
            filename: 'css/[name].css',
            allChunks: true,
        }),
        new HtmlWebapckPlugin({
            template: path.resolve(__dirname, '../js/source/public/index.html'),
        }),
    ],
}