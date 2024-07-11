const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'public'),
            filename: 'bundle.js',
        },
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            }, ],
        },
        plugins: [
                new CopyWebpackPlugin({
                        patterns: [{
                            from: 'src/index.html',
                            to: 'index.html',
                        }, ],
                    }
                }