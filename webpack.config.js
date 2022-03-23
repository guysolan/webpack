const path = require("path");
const HtmlPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackCdnPlugin = require('webpack-cdn-plugin');

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const { loadConfig } = require('@babel/core/lib/config/files');
const { template } = require('@babel/core');



module.exports = {
    mode: 'development',
    entry: "./src/index.js",
    output: {
        filename: 'bundle.[fullhash].js',
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [{
                test: /\.(css)$/,
                use: [
                    MiniCssExtractPlugin.loader, // instead of style-loader
                    'css-loader',
                    // 'style-loader'
                ],
            },
            // {
            //     test: /\.html$/,
            //     use: ['html-loader']
            // },
            {
                test: /\.(png|svg|jpeg|jpg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: "[name].[ext]",
                        outputPath: "images"
                    }
                }

            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
             



            }
        ],

    },
    // optimization: {
    //     minimizer: [
    //         new CssMinimizerPlugin()
    //     ],
    // },
    optimization: {
        minimize: true,
      },
    plugins: [
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
        new HtmlPlugin({
            template: './src/template.html',
            favicon: './src/favicon/favicon.ico'
        })
    ],
    devtool: "source-map",
    // devServer: {
    //     static: './dist/'
    // },
}