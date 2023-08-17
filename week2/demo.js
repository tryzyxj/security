// 一、判断题
// 1.Java 是编译型语言 -> 错；Java 编译为 class 文件，交由 JVM 解释执行；Java 热点代码会编译成本地代码执行
// 2.Javascript 中，不区分大小写字母，也就是说 A 和 a 是同一个变量 -> 错
// 3.Javascript 中的常量包括 String、Number、Boolean、Null、Undefined -> 错，包括数字、字符串、布尔
// 4.String 字符串的语法中既可以使用单引号，也可以使用双引号 -> 对
// 5.typeof 是用来判断变量类型，不可以当作运算符使用 -> 错
// 6.任何值和 undefined 运算，undefined 可看做 0 运算 -> 错，null 可看做 0

// 二、请分别描述下列代码中“+”的作用
// 1.console.log(“年龄:” + 20); -> 字符串拼接
// 2.console.log(11+22+33); -> 算术运算符
// 3.console.log(“网络 + 安全”); -> 代表一个字符
/* 4.var a = 1;
     var b = 2;
     console.log(“a” + b);
     -> 字符串拼接
*/
/* 5.var a = 1;
     var b = 2;
     console.log(“a + b”);
     -> 代表一个字符
*/ 

// 三、计算下述代码的打印值
var a = 10;
var b = 10;
console.log(a++); // 10
console.log(++a); // 12
console.log(--b); // 9
console.log(b--); // 9