const path = require("path")
module.exports = {
    mode:"production", // 设置打包的模式：production 表示生产模式  development 开发模式
    // entry:"./hello/hello.js", // 用来指定打包时的主文件 默认 ./src/index.js
    // entry:["./src/a.js","./src/b.js"],
    // entry:{
    //     a:"./src/a.js",
    //     b:"./src/b.js",
    // },
    // entry:"./src/a.js",

    output:{
        path:path.resolve(__dirname," dist"), //指定打包的目录，必须要绝对路径
        // filename:"main.js" ,// 打包后的文件名 
        // filename:"[name]-[id]-[hash].js",   // []里面的表示变量，比如entry是对象时打包两个文件可以 [name].js
        // clean:true , // 自动清理打包目录
    },  //配置代码打包后的地址
    /* 
        webpack 默认情况下，只会处理js文件，如果我们希望他可以处理其他类型的文件，则需要为其引入loader

        - 以css为例：
            - 使用css-loader 可以处理js中的样式
            - 使用步骤：
                1，安装：yarn add css-loader -D
                2, 配置：
    */
   module:{
        rules:[
            {
                test:/\.css$/i,
                use:["style-loader","css-loader"]  // 引入的loader数组是从后往前执行，顺序不能反，先执行css再执行style
            },
            {
                test:/\.jpg$/i,
                type:"asset/resource" //图片这种直接资源类型的数据，可以通过指定type来处理，相当于一个webpack内置的loader
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              }
        ]
   }

}