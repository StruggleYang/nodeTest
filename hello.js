'use strict';

var s = 'Hello';

function greet(name) {
    console.log(s + ',greet ' + name + '!');
}

function greet2(name) {
    console.log(s + ',greet2 ' + name + '!');
}

// 把函数greet作为模块的输出暴露出去
// 这样其他模块就可以使用greet函数了

// 1
// module.exports = {
//     greet:function(){return greet},
//     greet2:function(){return greet2}
// };

// 2
module.exports = {
    greet:greet,
    greet2:greet2
};