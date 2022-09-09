## 什么是BOM 

 ECMAScript无疑是JavaScript的核心，但是要想在浏览器中使用JavaScript，那么BOM（浏览器对象模型）才是真正的核心

BOM 提供了很多对象，用于访问浏览器的功能，这些功能与任何网页内容无关

BOM将浏览器中的各个部分转换成了一个一个的对象，我们通过修改这些对象的属性，调用他们的方法，从而 控制浏览器的各种行为

## window对象

window对象是BOM的核心，它表示一个浏览器的实例

在浏览器中我们可以通过window对象来访问操作浏览器，同时window也是作为全局对象存在的

全局作用域：window对象是浏览器中的全局对象，因此所有在全局作用域中声明的变量、对象、函数都会变成window对象的属性和方法

## 窗口大小

浏览器中提供了四个属性用来确定窗口的大小

网页窗口的大小：`innerWidth ` `innerHeight`

浏览器本身的尺寸： `outerWidth `  `outerHeight`

## 系统对话框

浏览器通过 `alert()` 、 `confirm()` 和` prompt()  `方法可以调用系统对话框向用户显示消息

它们的外观由操作系统及（或）浏览器设置决定，而不是由 CSS 决定

显示系统对话框时会导致程序终止，当关闭对话框程序会恢复执行

## location对象

location对象提供了与当前窗口中加载的文档有关的信息，还提供了一些导航功能

`href属性`： 可以获取或修改当前页面的完整的URL地址，使浏览器跳转到指定页面

`replace()方法`：功能一样，只不过使用replace方法跳转地址不会体现到历史记录中

`reload() 方法`：用于强制刷新当前页面

## navigator对象

navigator 对象包含了浏览器的版本、浏览器所支持的插件、浏览器所使用的语言等各种与浏览器相关的信息

我们有时会使用navigator的`userAgent属性`来检查用户浏览器的版本

## history对象

history 对象保存着用户上网的历史记录， 从窗口被打开的那一刻算起

`go()`：使用 go() 方法可以在用户的历史记录中任意跳 转，可以向后也可以向前

`back()`： 向后跳转 

`forward()`：向前跳转

## document对象

document对象也是window的一个属性， 这个对象代表的是整个网页的文档对象

我们对网页的大部分操作都需要以 document对象作为起点