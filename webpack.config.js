const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    mode: 'development',

    entry: './index.ts',

    output: {
        path: Path.resolve(__dirname, './dist'),
        filename: 'app-bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [Path.resolve(__dirname, 'src')],
            }
        ]
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    plugins: [
        new HtmlWebpackPlugin({
                filename: 'index.html',
                template: Path.resolve(__dirname, 'public/index.html')
            }),
    ],
    
    devServer: {
        contentBase: Path.join(__dirname, 'dist'),
        compress: true,
        port: 3777
    }
}