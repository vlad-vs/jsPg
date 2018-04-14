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
                use: [ 'style-loader', 'css-loader' ]
            }
        ]

    }
};