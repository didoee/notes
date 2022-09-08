## 什么是 HTML

HTML 的全称为超文本标记语言，是一种标记语言。它包括一系列标签．通过这些标签可以将网络上的文档格式统一，使分散的 Internet 资源连接为一个逻辑整体。HTML 文本是由 HTML 命令组成的描述性文本，HTML 命令可以是文字，图形、动画、声音、表格、链接等

## 开发工具

记事本

编写对应的 HTML 代码，更改后缀名为 html,通过浏览器方式打开

HBuilderX

[HBuilderX-高效极客技巧 (dcloud.io)](https://www.dcloud.io/hbuilderx.html)

VSCODE

[Documentation for Visual Studio Code](https://code.visualstudio.com/docs/?dv=win)

WebStorm

[WebStorm: The Smartest JavaScript IDE, by JetBrains](https://www.jetbrains.com/webstorm/)

....

## 第一个网页

```html light
<html>
	<head>
		<title>我的第一个网页</title>
	</head>
	<body>
		hello world!!!
	</body>
</html>

类似于html、head、title叫做标签（元素） html 表示网页的开始 head 网页的头部
title 网页的标题 body 网页的身体部分
```

## 完整的 html 结构

```html light
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
	</head>
	<body></body>
</html>

<!DOCTYPE html> 文档声明 html5声明 <meta charset="UTF-8" /> 设置网页的字符集
支持中文 <meta http-equiv="X-UA-Compatible" content="IE=edge" /> 支持edge浏览器
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
网页能够支持响应式布局
```

## 浏览器（代码调试工具）

IE 浏览器

谷歌浏览器（主流）

[Google Chrome 网络浏览器](https://www.google.cn/chrome/)

火狐浏览器

[Firefox 火狐浏览器 - 全新、安全、快速 | 官方最新下载](http://www.firefox.com.cn/)

EDGE

[下载 Microsoft Edge Web 浏览器 | Microsoft](https://www.microsoft.com/zh-cn/edge?r=1)

safari

[Safari 浏览器 - Apple (中国大陆)](https://www.apple.com.cn/safari/)

## 标题标签

h1-h6 随着数字越大，字体越小越细

```html light
<h1>轻轻的我走了，</h1>
<h2>正如我轻轻的来；</h2>
<h3>我轻轻的招手，</h3>
<h4>作别西天的云彩。</h4>
<h5>那河畔的金柳，</h5>
<h6>是夕阳中的新娘；</h6>
```

## 段落标签

```html light
<p>轻轻的我走了，</p>
<p>正如我轻轻的来；</p>
<p>我轻轻的招手，</p>
<p>作别西天的云彩。</p>
<p>那河畔的金柳，</p>
```

## 换行标签

```html light
轻轻的我走了，<br /><br />
正如我轻轻的来； <br />
我轻轻的招手，
```

## 水平线标签

```html light
轻轻的我走了，
<hr />
正如我轻轻的来；
<hr />
我轻轻的招手，
```

## 文字加粗

```html light
<b>文字加粗</b> <strong>文字加粗</strong>
```

## 文字倾斜

```html light
<em>文字倾斜</em> <i>文字倾斜</i>
```

## 超链接

跳转到另一个页面

```html light
<a href="https://www.baidu.com">百度</a>
<a href="https://www.qq.com">QQ</a>
<a href="./01_hello.html">hello</a>
```

## 路径

绝对路径：以某一个磁盘作为根目录，查找文件

例子：C:\Users\25547\Desktop\day01\01_hello.html

相对路径：以当前目录作为根目录，查找文件**_（推荐）_**

例子：./01_hello.html 当前目录 ../ 上一级目录 ../../ 上上一级目录

## 图片

src 属性 图片路径

alt 属性 当图片显示失败，展示的内容

title 属性 鼠标悬浮，显示的标题

width 宽度

height 图片的高度

```html light
<img
	src="./img/01.webp"
	alt="图片一"
	title="鼠标悬浮，显示标题"
	width="100"
	height="100"
/>
<img src="./img/03.webp" alt="图片二" />
```

## 无序列表

ul 无序列表开始

li 列表项

```html light
<ul>
	<li>西游记</li>
	<li>三国演义</li>
	<li>红楼梦</li>
	<li>水浒传</li>
</ul>
```

## 有序列表

```html light
<ol>
	<li>西游记</li>
	<li>三国演义</li>
	<li>红楼梦</li>
	<li>水浒传</li>
</ol>
<ol type="1">
	<li>西游记</li>
	<li>三国演义</li>
	<li>红楼梦</li>
	<li>水浒传</li>
</ol>
<ol type="A">
	<li>西游记</li>
	<li>三国演义</li>
	<li>红楼梦</li>
	<li>水浒传</li>
</ol>
<ol type="a" start="10">
	<li>西游记</li>
	<li>三国演义</li>
	<li>红楼梦</li>
	<li>水浒传</li>
</ol>
<ol type="I">
	<li>西游记</li>
	<li>三国演义</li>
	<li>红楼梦</li>
	<li>水浒传</li>
</ol>
<ol type="i">
	<li>西游记</li>
	<li>三国演义</li>
	<li>红楼梦</li>
	<li>水浒传</li>
</ol>
```

## 文字的容器标签

```html light
<span>span 文字容器</span>
```

## 注释

注释：解释说明
快捷键 ctrl /

## 实体符号

```html light
轻轻的我走了，正如我 &nbsp;&nbsp;&nbsp;轻轻的来； 版权符号 &copy;
<br />
&lt;a&gt;&trade;
```

## 基础表格

table 表格 `border`边框的宽度 `width` 表格的宽度 `height` 表格的高度 `cellpadding` 内边距 `cellspacing` 单元格之间的间隙

tr 行

td 单元格（列）

```html light
<table border="1" width="500px" height="150px" cellpadding="0" cellspacing="0">
	<tr>
		<td>姓名</td>
		<td>年龄</td>
		<td>成绩</td>
	</tr>
	<tr>
		<td>张三</td>
		<td>18</td>
		<td>80</td>
	</tr>
	<tr>
		<td>李四</td>
		<td>20</td>
		<td>90</td>
	</tr>
	<tr>
		<td>王五</td>
		<td>22</td>
		<td>85</td>
	</tr>
</table>
```

## 完整表格

caption 表格的标题

thead 表格的副标题

th 副标题表格的单元格

tbody 表格的身体

tfoot 表格的底部

`algin` 的取值可以是`left | center | right` `左 | 中 | 右`

给 table 设置的是 table 在水平方向上的位置

给 tr 设置的是行内所有单元格内容的对齐方式

给 td 设置的是当前单元格内容的对齐方式

```html light
<table border="1" width="500px" cellspacing="0">
	<caption>
		表格的标题
	</caption>
	<thead>
		<tr>
			<th>姓名</th>
			<th>年龄</th>
			<th>成绩</th>
		</tr>
	</thead>
	<tbody>
		<tr align="center">
			<td align="left">张三</td>
			<td>18</td>
			<td align="right">80</td>
		</tr>
		<tr>
			<td>张三</td>
			<td>18</td>
			<td>80</td>
		</tr>
		<tr>
			<td>张三</td>
			<td>18</td>
			<td>80</td>
		</tr>
	</tbody>
	<tfoot>
		<tr>
			<td>总计：</td>
			<td>54</td>
			<td>240</td>
		</tr>
	</tfoot>
</table>
```

## 表格的合并

`colspan` 合并单元格 值就是需要合并的单元格数量

`rowspan` 合并行 值就是需要合并的行的数量

```html light
<table border="1" width="500px" height="150px" cellpadding="0" cellspacing="0">
	<tr>
		<td>姓名</td>
		<td>年龄</td>
		<td>成绩</td>
	</tr>
	<tr>
		<td>张三</td>
		<td>18</td>
		<td>80</td>
	</tr>
	<tr>
		<td rowspan="2">李四</td>
		<td>20</td>
		<td>90</td>
	</tr>
	<tr>
		<!-- colspan 单元格合并 -->
		<td colspan="2">22</td>
	</tr>
</table>
```

## 表单

form 通常情况下用来做提交数据 登陆、注册
`action` 接口路径（后端） 提交表单数据到某一个位置
`method `提交方式 get/post 会将表单的数据以 get/post 进行提交
get: 以?的方式将参数拼接在 url 上 多个参数之间使用&拼接
不安全，长度的限制（get 请求自身没有长度限制的，但是受浏览器的影响才有长度的限制）
post: 会将请求参数放在请求体中
安全，不会受浏览器影响有长度限制

`enctype `数据的提交方式
application/x-www-form-urlencoded
multipart/form-data(文件上传)

```html light
<!-- form 通常情况下用来做提交数据 登陆、注册 -->
<!-- action 接口路径（后端） 提交表单数据到某一个位置-->
<!-- 
    method 提交方式 get/post 
    会将表单的数据以 get/post 进行提交
    get: 以?的方式将参数拼接在 url 上 多个参数之间使用&拼接
          不安全，长度的限制（get请求自身没有长度限制的，但是受浏览器的影响才有长度的限制）
    post: 会将请求参数放在请求体中
          安全，不会受浏览器影响有长度限制
  -->
<!-- enctype 数据的提交方式
      application/x-www-form-urlencoded
      multipart/form-data(文件上传)
  -->
<!-- https://www.baidu.com/?username=admin&password=123456 -->
<form
	action="https://www.baidu.com"
	method="post"
	enctype="multipart/form-data"
>
	<input type="text" name="username" />
	<input type="password" name="password" />
	<input type="submit" />
</form>
```

## 表单的控件

`type` 规定 input 的类型 text|password|radio|checkbox...

name` 规定 input 的名称(在表单提交时作为 key) title= 10

`value ` input 的值（默认值）

`placeholder` 提示

`checked` 是单选框和复选框 默认选中

`selected` 是下拉列表中默认选中

```html light
  <!--
    key 键 value 值
    type 规定input 的类型
    name 规定input 的名称(在表单提交时作为key) name = 10
    value input的值（默认值）
    placeholder 提示
    -->
  <form action="https://baidu.com">
    <p>
      输入框：
      <input type="text" name="title" value="10" placeholder="请输入标题" />
    </p>
    <p>
      密码框：
      <input type="password" name="title" value="10" />
    </p>
    <p>
      文件选择：
      <input type="file" name="file" />
    </p>
    <p>
      颜色：
      <input type="color" name="color" />
    </p>
    <p>
      滑块：
      <input type="range" name="range" />
    </p>
    <p>
      数字：
      <input type="number" name="num" />
    </p>
    <p>
      url：
      <input type="url" />
    </p>
    <p>
      邮箱：
      <input type="email" />
    </p>
    <p>
      日期：
      <input type="date" />
    </p>
    <p>
      时间日期：
      <input type="datetime-local" />
    </p>
    <p>
      周：
      <input type="week" />
    </p>
    <p>
      月：
      <input type="month" />
    </p>
    <p>
      单选：
      <input type="radio" name="sex"  checked/> 男 <input type="radio" name="sex" />女
    </p>
    <p>
      多选：
      <p>
        唱：
        <input type="checkbox" name="like" checked>
      </p>
      <p>
        跳：
        <input type="checkbox" name="like">
      </p>
      <p>
        rap：
        <input type="checkbox" name="like">
      </p>
      <p>
        蓝球：
        <input type="checkbox" name="like">
      </p>
    </p>
    <p>
      下拉列表：
      <select name="like2">
        <option value="唱">唱</option>
        <option value="跳">跳</option>
        <option value="rap">rap</option>
        <option value="篮球" selected>篮球</option>
      </select>
    </p>
    <p>
      多行文本域：
      <textarea name="" ></textarea>
    </p>
    <p>
      提交按钮：
      <input type="submit" value="注册"/>
      <button type="submit">提交按钮</button>
    </p>
    <p>
      重置按钮：
      <input type="reset" value="重置"/>
      <button type="reset">重置按钮</button>
    </p>
    <p>
      普通按钮：
      <input type="button" value="普通按钮"/>
      <button>普通按钮</button>
    </p>
  </form>
```
