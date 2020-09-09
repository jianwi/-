// 函数声明方式的js

function testThis() {
    console.log(this)
}

// testThis() // 全局对象,nodejs下global, 浏览器下为 window

// 严格模式
function testThis() {
    "use strict"
    console.log(this)
}
// testThis() // undefined


// 函数表达式, 和函数声明方式的一样
let test = function () {
    console.log(this)
}
test = function() {
    "use strict"
    console.log(this)
}

// 对象中方法调用　this


