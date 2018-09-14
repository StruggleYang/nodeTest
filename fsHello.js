'use strict';
/**
 * fs 模块 ，文件读写
 */
var fs = require('fs');
// 异步读取文件
function fsReadFile(filePath) {
    console.log("==============>fsReadFileSys")
    // 当读取二进制文件时，不传入文件编码时，回调函数的data参数将返回一个Buffer对象。在Node.js中，Buffer对象就是一个包含零个或任意个字节的数组（注意和Array不同）。
    // Buffer对象可以和String作转换，例如，把一个Buffer对象转换成String：
    fs.readFile(filePath, 'utf-8', function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });
}

// 同步读文件
function fsReadFileSync(filePath) {
    console.log("==============>fsReadFileSync")
    try {
        var data = fs.readFileSync(filePath, 'utf-8');
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

// 异步写文件
function writeFile(outputPath, data) {
    console.log("==============>writeFile")
    fs.writeFile(outputPath, data, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('ok.');
        }
    });
}

// 同步写文件
function writeFileSync(outputPath, data) {
    console.log("==============>writeFileSync")
    try {
        fs.writeFileSync(outputPath, data);
        console.log("ok ");
    } catch (err) {
        console.log(err);
    }
}

// 异步获取文件信息
function stat(filePath) {
    console.log("==============>stat")
    fs.stat(filePath, function (err, stat) {
        if (err) {
            console.log(err);
        } else {
            // 是否是文件:
            console.log('isFile: ' + stat.isFile());
            // 是否是目录:
            console.log('isDirectory: ' + stat.isDirectory());
            if (stat.isFile()) {
                // 文件大小:
                console.log('size: ' + stat.size);
                // 创建时间, Date对象:
                console.log('birth time: ' + stat.birthtime);
                // 修改时间, Date对象:
                console.log('modified time: ' + stat.mtime);
            }
        }
    });
}
// 同步获取文件信息
function statSync(filePath) {
    console.log("==============>statSync")
    try {
        var stat = fs.statSync(filePath);
        // 是否是文件:
        console.log('isFile: ' + stat.isFile());
        // 是否是目录:
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            // 文件大小:
            console.log('size: ' + stat.size);
            // 创建时间, Date对象:
            console.log('birth time: ' + stat.birthtime);
            // 修改时间, Date对象:
            console.log('modified time: ' + stat.mtime);
        }
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    fsReadFile: fsReadFile,
    fsReadFileSync: fsReadFileSync,
    writeFile: writeFile,
    writeFileSync: writeFileSync,
    stat: stat,
    statSync: statSync
};