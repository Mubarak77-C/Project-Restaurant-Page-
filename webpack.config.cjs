const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // <-- 1. Require the plugin

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devtool: 'eval-source-map',
    devServer: {
        static: './dist',
    },
    plugins: [ // <-- 2. Add the plugins array
        new HtmlWebpackPlugin({
            template: './src/template.html', // points to your source template
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};