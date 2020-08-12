const path = require('path');
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
    mode:"development",
    devtool:"cheap-source-map",
    // mode:"production",
    devServer:{
        port:3030,
        contentBase:path.resolve(__dirname,'dist')
    },
    entry:{
        "index":"./src/index.js"
    },
    output:{
        filename:"[name].bundle.js",
        path:path.resolve(__dirname,"dist")
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test:/\.css$/,
                loader:[
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.js$/,
                loader:'babel-loader'
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:'./index.html'
        })
    ],
    optimization:{
        splitChunks:{
            cacheGroups:{
                vendor:{
                    test:/[\\/]node_modules[\\/]/,
                    name:"vendor",
                    chunks:"initial",
                    minChunks:1
                }
            }
        }
    },
    resolve:{
        modules:[path.resolve(__dirname,'node_modules')],
        alias:{
            "vue$":"vue/dist/vue.esm.js"
        }
    }   
}

