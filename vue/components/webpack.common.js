const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const fs = require("fs");
const asyncReadDir = (url) => {
    console.log(url);
    return new Promise(resolve => {
        fs.readdir(url,'utf8',(err,files) => {
            const entryObj = {};
            files.forEach(filename => {
                entryObj[filename] = path.resolve(url,filename,'index.js');
            });
            resolve(entryObj);
        })
    })
}

module.exports = {
    entry:() => asyncReadDir(path.resolve(__dirname,'src')),
    output:{
        filename:"[name].js",
        path:path.resolve(__dirname,"dist")
    },
    resolve:{
        modules:[path.resolve(__dirname,"node_modules")],
        extensions:['.js','.json'],
        alias:{
            "vue$":"vue/dist/vue.esm.js"
        }
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                include:/src/,
                exclude:/node_modules/,
                loader:'vue-loader'
            },
            {
                test:/\.js$/,
                include:/src/,
                exclude:/node_modules/,
                loader:'babel-loader'
            },
            {
                test:/\.css$/,
                loader:['vue-style-loader','css-loader']
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'index.html')
        }),
        new CleanWebpackPlugin()
    ],
    optimization:{
        runtimeChunk:"single",
        splitChunks:{
            cacheGroups:{
                vendor:{
                    name:"vendor",
                    priority:1,
                    chunks:"initial",
                    test:/[\\/]node_modules[\\/]/,
                    minChunks:1
                },
                default:{
                    name:"common",
                    chunks:"initial",
                    minChunks:2
                }
            }
        }
    }
}


// const path = require('path');
// const VueLoaderPlugin = require("vue-loader/lib/plugin");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const {CleanWebpackPlugin} = require('clean-webpack-plugin');
// module.exports = {
//     mode:"development",
//     devtool:"cheap-source-map",
//     // mode:"production",
//     devServer:{
//         port:3030,
//         contentBase:path.resolve(__dirname,'dist')
//     },
//     entry:{
//         "index":"./src/index.js"
//     },
//     output:{
//         filename:"[name].bundle.js",
//         path:path.resolve(__dirname,"dist")
//     },
//     module:{
//         rules:[
//             {
//                 test:/\.vue$/,
//                 loader:'vue-loader'
//             },
//             {
//                 test:/\.css$/,
//                 loader:[
//                     'vue-style-loader',
//                     'css-loader'
//                 ]
//             },
//             {
//                 test:/\.js$/,
//                 loader:'babel-loader'
//             }
//         ]
//     },
//     plugins:[
//         new VueLoaderPlugin(),
//         new CleanWebpackPlugin(),
//         new HtmlWebpackPlugin({
//             template:'./index.html'
//         })
//     ],
//     optimization:{
//         splitChunks:{
//             cacheGroups:{
//                 vendor:{
//                     test:/[\\/]node_modules[\\/]/,
//                     name:"vendor",
//                     chunks:"initial",
//                     minChunks:1
//                 }
//             }
//         }
//     },
//     resolve:{
//         modules:[path.resolve(__dirname,'node_modules')],
//         alias:{
//             'vue$':'vue/dist/vue.esm.js'
//         }
//     }   
// }

