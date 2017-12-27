const path = require('path');
const BUILD_DIR = path.resolve(__dirname, './public');
const APP_DIR = path.resolve(__dirname, './src');

const CopyWebpackPlugin = require('copy-webpack-plugin'); // copy static assets
const HtmlWebpackPlugin = require('html-webpack-plugin'); // inject js in DOM
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // css/sass

module.exports = {
    entry: [
        APP_DIR + '/index.js',
        './src/theme/scss/main.scss',
        './node_modules/font-awesome/css/font-awesome.min.css',
    ],
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.(png|jpg|gif|svg)(\?.*$|$)$/,
                loader: 'file-loader?name=img/[name].[ext]'
            },
            {
                test: /\.(css|sass|scss)$/,
                loader: ExtractTextPlugin.extract(['css-loader','sass-loader'])
            },
            {
                test: /\.(eot|ttf|woff|woff2)(\?.*$|$)$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            },
            {
                test : /\.(jsx|js)/,
                include : APP_DIR,
                loader : 'babel-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('bundle.css'),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new CopyWebpackPlugin([
            {
                from: 'src/theme/img',
                to: BUILD_DIR + '/img'
            }
        ]),
    ]
};
