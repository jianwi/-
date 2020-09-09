//　<你不知道的javascript 上>
// this实际上是在函数被调用时发生的绑定，它指向什么完全取决于函数在哪里被调用。
// 当一个函数被调用时，会创建一个活动记录（执行上下文）。
// 这个记录会包含函数在哪里被调用（调用栈）、函数的调用方式、传入的参数等信息。this就是这个记录的一个属性，会在函数执行的过程中用到。


function testThis() {
    console.log(this)
}

// testThis() // 全局对象,nodejs下global, 浏览器下为 window，因为在window环境下调用

// 严格模式
function testThis() {
    "use strict"
    console.log(this)
}
// testThis() // undefined


// 隐式调用　this
let Person = {
    te: testThis,
}

// Person.te() // Person 对象
// 当函数引用有上下文对象时，隐式绑定规则会把函数调用中的this绑定到这个上下文对象
//　虽然　testThis　并不是在　Person 里定义的，但是当　te　引用时，确实调用了对　Person　的引用
//　隐式绑定规则会把函数调用中的　this 绑定到这个上下文对象．

a1 = {
    ttt : testThis,
    description:"a1"
}
a2 = {
    a1:a1,
    description:"a2"
}

// a2.a1.ttt()   // a1 对象
//对象属性引用链中只有上一层或者说最后一层在调用位置中起作用。
//虽然bar是obj.foo的一个引用，但是实际上，它引用的是foo函数本身，因此此时的bar()其实是一个不带任何修饰的函数调用，因此应用了默认绑定。

let out_a = a1.ttt
// out_a() // undefind

let testObj  = {
    t:function () {
        console.log(this)
    }
}

let out_b = testObj.t
// out_b()　// testObj