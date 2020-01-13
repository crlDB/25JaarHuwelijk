/// -----------------------------------------------------------------
/// webpack.dev.bat     -> bundle app for development
/// webpack.prod.bat    -> bundle app for production
/// webpack.vendor.bat  -> bundle vendor-lib for production
/// -----------------------------------------------------------------

/// webpack --version
/// webpack --help

/// webpack --config-name vendor --mode production --progress --color
/// webpack --config-name app-config --mode development --progress --color --watch
/// webpack --config-name app-data --mode development --progress --color --watch
/// webpack --config-name app-runtime --mode development --progress --color --watch





/// <binding />
var path = require('path');
var webpack = require('webpack');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");          // 20181115
var DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
var HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

// vendor - libs
var vendorAlias = {
    lib_jqueryposition: "jquery-ui/ui/position.js",
    lib_jquerydraggable: "jquery-ui/ui/widgets/draggable.js"

};


module.exports = [
    {
        name: 'vendor',
        target: 'web',
        entry: {
            "lib.vendor1": [
                'jquery',                       // npm
                'd3',                           // npm
                'bootstrap',                    // npm
                'lib_jqueryposition',            // alias
                'lib_jquerydraggable'            // alias

            ]                  
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        test: /vendor1/,
                        name: "lib.vendor1",
                        //enforce: true
                        chunks: "all"
                    }
                }
            }
        },


        output: {
            path: path.resolve(__dirname, ''),
            filename: '[name].bundle.js',
            library: "vendor_[hash]"
        },
        resolve: {
            alias: vendorAlias,
            extensions: ['.ts', '.tsx', '.js']
        },
        plugins: [
            new webpack.ProvidePlugin({
                jQuery: 'jquery',
                $: 'jquery',
                'window.jQuery': 'jquery',
                'window.$': 'jquery'
                //jsPanel: 'lib_jspanel4',
                //'window.jsPanel': 'lib_jspanel4'
            }),

            new webpack.DllPlugin({
                name: "vendor_[hash]",
                path: path.resolve(__dirname, 'manifest.json')
            })

        ]//,
        //watch: false
    },
    {
        name: 'app',
        target: 'web',
        devtool: 'source-map',
        entry: {
            "app": './src/ts/app.ts'
        },

        output: {
            path: path.resolve(__dirname, ''),
            filename: '[name].bundle.js'
        },
        resolve: {
            alias: vendorAlias,
            extensions: ['.ts', '.tsx', '.js']
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader"
                    ]
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: [
                        'file-loader?name=/image/[name].[ext]'
                    ]
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use: [
                        'file-loader?name=/fonts/[name].[ext]'
                    ],
                }

            ]
        },
        plugins: [
            new webpack.ProvidePlugin({
                jQuery: 'jquery',
                $: 'jquery',
                'window.jQuery': 'jquery',
                'window.$': 'jquery'
            }),

            new webpack.DllReferencePlugin({
                manifest: path.resolve(__dirname, "manifest.json")
            }),

            new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "[id].css"
            }),
            new HardSourceWebpackPlugin()
        ]//,
        //watch: false
    }
 ];


