var webpack = require("webpack");
var config = require('./webpack.prod.config');
var fs = require('fs');
var path = require('path');
// 构建之前先清空dist目录
clearFolder(path.resolve(__dirname, '../dist/'));
// 开始打包
webpack(config, function (err, stats) {
    process.stdout.write(stats.toString());
    // 构建完成后ftp上传到xx目录
});
// 清空文件夹
function clearFolder(path) {
    var files = [];
    if (fs.existsSync(path)) {
        files = fs.readdirSync(path);
        files.forEach(function (file, index) {
            var curPath = path + "/" + file;
            if (fs.statSync(curPath).isDirectory()) {
                clearFolder(curPath);
            } else {
                fs.unlinkSync(curPath);
                console.log(curPath);
            }
        });
        fs.rmdirSync(path);
    }
}