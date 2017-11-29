const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    context: path.join(__dirname, 'src/app'),

    entry: {
        mainPage: './main'

    },

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    resolve: {
        extensions: ['.js', '.ts', 'json']
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'MentoringTask',
            template: './index.html'
        })
    ],

    module: {
        rules: [{
            test: /\.ts$/,
            loader: 'awesome-typescript-loader',
            options: {
                useCache: true
            }
        }]
    }

}