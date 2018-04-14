// const path = require('path');

// module.exports = {
//     // из файла
//     entry: './src/main.js',
//     // в файл
//     output: {
//         filename: 'index.js'
//         // path: path.resolve(__dirname, 'dist')
//     },
//     watch: true
// };

webpack.config.js
module.exports = {
    devtool: 'eval',
    entry: './src/main',
    output: {
        filename: 'index.js'
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 100
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'es2015',
                        ]
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            }

        ]

    }
};