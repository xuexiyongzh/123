var a = new Array();
var b = [];

a[0] = "dog";
a[1] = "cat";
a[5] = "tiger";

a.reverse();//倒序a数组
a.pop();//减去a（倒序后的）中最后一项

console.log(a);
console.log(a[0]);
console.log(a[3]);

b = ["dog","cat","tiger"];

b.push("sheep");//向b中追加一个新项

console.log(b);

for (let i = 0; i < b.length; i++) {
    console.log(b[i])
}

//新建函数
let c = 1;
function add(x) {
    c = c + x;
}
add(2)
console.log(c);


//求和函数

