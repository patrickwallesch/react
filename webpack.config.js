let ExtractTextPlugin = require('extract-text-webpack-plugin');

let path = require('path');

let BUILD_DIR = path.resolve(__dirname, './public');
let APP_DIR = path.resolve(__dirname, './src');

const Dotenv = require('dotenv-webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: [
        APP_DIR + '/index.js',
        './src/theme/scss/main.scss'
    ],
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.(png|jpg|gif|svg)(\?.*$|$)$/,
                loader: 'file?name=img/[name].[ext]'
            },
            {
                test: /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract(['css-loader','sass-loader'])
            },
            {
                test: /\.(eot|ttf|woff|woff2)(\?.*$|$)$/,
                loader: 'file?name=fonts/[name].[ext]'
            },
            {
                test : /\.(jsx|js)/,
                include : APP_DIR,
                loader : 'babel-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('bundle.css'),
        new Dotenv({
            path: './.env', // Path to .env file (this is the default)
        }),
        HtmlWebpackPluginConfig
    ],
    resolve: {
        modules: [path.resolve(__dirname, '/src'), 'node_modules/'],
        descriptionFiles: ['package.json'],
        extensions : ['.js', '.jsx']
    }
};
