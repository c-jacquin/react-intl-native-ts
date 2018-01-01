const path = require('path')
const webpack = require('webpack')
const { CheckerPlugin } = require('awesome-typescript-loader')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/index.ts')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    externals: [
        {
            react: 'react',
            'react-intl': 'react-intl',
            'react-native': 'react-native'
        }
    ],
    resolve: {
        extensions: [".ts", ".tsx"],
        modules: ['node_modules']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                options: {
                    tsConfigFile: 'tsconfig.json'                    
                }
            },
            {
                test: /\.tsx?$/,
                exclude: /^.\/src\/.*\/__tests__\/.*$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    plugins: ([
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            output: {
                comments: false
            },
            mangle: {
                screw_ie8: true
            },
            compress: {
                screw_ie8: true,
                warnings: false,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                if_return: true,
                join_vars: true,
                negate_iife: false
            }
        }),
        new CheckerPlugin()
    ])
}