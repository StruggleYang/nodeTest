// 启用严格模式
'use strict'
// 导入模块hello
var hello = require('./modules/hello')
var fsHello = require('./modules/fsHello')

function mainTest() {
    var s = 'Michael';
    // 调用模块hello中的greet方法
    hello.greet(s);
    hello.greet2(s);

    // fs 模块
    fsHello.fsReadFile('./static/test.txt');
    fsHello.fsReadFileSync('./static/test.txt');
    fsHello.writeFile("./out/out.txt", 'Hello, Node.js');
    fsHello.writeFileSync("./out/out1.txt", 'sync Hello, Node.js');
    fsHello.stat("./out/out1.txt");
    fsHello.statSync("./out/out1.txt");



    // 程序即将退出时的回调函数:
    process.on('exit', function (code) {
        console.log('about to exit with code: ' + code);
    });
    // process.nextTick()将在下一轮事件循环中调用:
    process.nextTick(function () {
        console.log('nextTick callback!');
    });
    console.log('nextTick was set!');

    // 判断js运行环境
    if (typeof (window) === 'undefined') {
        console.log('node.js');
    } else {
        console.log('browser');
    }
}

module.exports = {
    hello: hello,
    fsHello: fsHello,
    mainTest: mainTest
}