'use strict';

var ExtractTextPlugin = require("extract-text-webpack-plugin");  //css单独打包
var webpack = require('webpack');
module.exports = {
    devtool: 'eval-source-map',
    entry: {
        app:'./src/components/App.js',
        frame:'./src/frame/index.jsx',
        variableEditor:'./src/variable/index.jsx',
        constantEditor:'./src/constant/index.jsx',
        parameterEditor:'./src/parameter/index.jsx',
        actionEditor:'./src/action/index.jsx',
        packageEditor:'./src/package/index.jsx',
        flowDesigner:'./src/flow/index.jsx',
        ruleSetEditor:'./src/editor/urule/index.jsx',
        decisionTableEditor:'./src/editor/decisiontable/index.jsx',
        scriptDecisionTableEditor:'./src/editor/scriptdecisiontable/index.jsx',
        decisionTreeEditor:'./src/editor/decisiontree/index.jsx',
        clientConfigEditor:'./src/client/index.jsx',
        ulEditor:'./src/editor/ul/index.jsx',
        scoreCardTable:'./src/scorecard/index.jsx',
        permissionConfigEditor:'./src/permission/index.jsx'
    },
    output: {
        path: __dirname +  '/dist',
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(jsx|js)?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015'],
                    compact:true
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
                loader: 'url-loader?limit=1000000&name=[name]-[hash].[ext]'
            }
        ]
    },
    postcss: [
        require('autoprefixer')    //调用autoprefixer插件,css3自动补全
    ],
    devServer: {
        contentBase: './src/views' , //本地服务器所加载的页面所在的目录
        port: 8888,
        colors: true,  //终端中输出结果为彩色
        historyApiFallback: true,  //不跳转
        inline: true  //实时刷新
    },

    plugins: [
        new ExtractTextPlugin('main.css'),
    ]
}
