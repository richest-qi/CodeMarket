// webpack.dev.js

const path = require("path");
const {merge} = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common,{
    mode:"development",
    devtool:"cheap-source-map",
    devServer:{
        port:3000,
        contentBase:path.resolve(__dirname,'dist'),
        hot:true
    }
})