## 什么是JSON

JSON 指的是 JavaScript 对象表示法（**J**ava**S**cript **O**bject **N**otation）

JSON 是轻量级的文本数据交换格式

JSON 独立于语言：JSON 使用 Javascript语法来描述数据对象，但是 JSON 仍然独立于语言和平台。JSON 解析器和 JSON 库支持许多不同的编程语言。 目前非常多的动态（PHP，JSP，.NET）编程语言都支持JSON。

JSON 具有自我描述性，更易理解

## JSON.parse()

JSON 通常用于与服务端交换数据

在接收服务器数据时一般是字符串

我们可以使用 JSON.parse() 方法将数据转换为 JavaScript 对象

```js light
var obj = JSON.parse('{ "name":"runoob", "alexa":10000, "site":"www.runoob.com" }');
```

## JSON.stringify()

JSON 通常用于与服务端交换数据

在向服务器发送数据时一般是字符串

我们可以使用 JSON.stringify() 方法将 JavaScript 对象转换为字符串

```js light
var obj = { "name":"runoob", "alexa":10000, "site":"www.runoob.com"};
var myJSON = JSON.stringify(obj);
```

