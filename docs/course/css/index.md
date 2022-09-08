## 什么是CSS

CSS叫做层叠样式表，美化网页的，样式可以进行覆盖。

## CSS的使用方式

#### 内联样式（行类样式）[一般情况下不用]

​	在标签内添加`style` 属性，`style` 的值就是样式规则，样式同样是以key-value书写，多个样式之间使用分号隔开

```html light
    <p style="color: red; font-size: 20px">hello world!!!!</p>
    <p style="color: red; font-size: 20px">你好，世界！！！</p>
```

#### 内部样式 [学习的时候使用]

​	在`head` 中新增 `style` 标签，在里边写样式规则，这个时候只要是被选中的元素都会生效

​	标签{

​    属性1：值；

​    属性2：值；

​    }

```html light
  <style>
    p {
      color: red;
      font-size: 20px;
    }
  </style>

  <p>轻轻的我走了</p>
  <p>正如我轻轻的来</p>
  <p>我轻轻的招手</p>
  <p>作别西天的云彩</p>
```

#### 外部样式 [开发时]

​	在css文件夹下边新建一个.css文件，在文件里写样式规则，在html页面中使用link标签引入css文件

```css light
/* css/style.css */
p{
  color: red;
  font-size: 20px;
}
```

```html light
  <!-- 03_外部样式.html -->
  <link rel="stylesheet" href="./css/style.css" />

  <p>轻轻的我走了</p>
  <p>正如我轻轻的来</p>
  <p>我轻轻的招手</p>
  <p>作别西天的云彩</p> 
```

## 基础选择器

选择器能够帮助我们选中html标签，更方便的设置样式

#### 标签选择器

​	通过标签名称选中，就叫做标签选择器

```html light
    <style>
      p {
        color: red;
        font-size: 20px;
      }
    </style>
  
    <p>轻轻的我走了</p>
    <p>正如我轻轻的来</p>
    <p>我轻轻的招手</p>
    <p>作别西天的云彩</p>
```

#### id选择器

给标签上添加`id` 属性，在css中使用#选中，然后设置样式

```html light
  <style>
    #title1 {
      color: red;
      font-size: 20px;
    }
    #title2 {
      color: blue;
    }
    #title3 {
      color: yellow;
    }
    #title4 {
      color: green;
    }
  </style>

  <p id="title1">轻轻的我走了</p>
  <p id="title2">正如我轻轻的来</p>
  <p id="title3">我轻轻的招手</p>
  <p id="title4">作别西天的云彩</p>
```

#### class 选择器（类选择器）

​	给标签添加`class` 添加属性，通过.选中设置样式规则

```html light
  <style>
    .title {
      font-size: 25px;
    }
    .title1 {
      color: red;
    }
    .title2 {
      color: yellow;
    }
    .title3 {
      color: blue;
    }
    .title4 {
      color: pink;
    }
  </style>

  <p class="title title1">轻轻的我走了</p>
  <p class="title title2">正如我轻轻的来</p>
  <p class="title title3">我轻轻的招手</p>
  <p class="title title4">作别西天的云彩</p>
```

#### id和class的区别

​	`	id ` 的值只能设置一个，给多个标签设置同一个id，样式是可以生效的，但是在JavaScript中只能选中第一个

​	`	class` 的值可以设置多个（推荐使用class）

## 文字颜色

```html light
  <style>
    .title1 {
      /* 字体颜色:可以是英文单词，也可以是16进制的颜色码，还可以是rgb三原色组成的颜色 */
      color: red;
      /* 计算机使用的二进制 0 1  人使用的十进制 八进制 十六进制*/
      color: #0a84d6;
      /* rgb 0-255 */
    }
    .title2 {
      color: rgb(10, 200, 200);
    }
    .title3 {
      /* 透明度 0-1 */
      color: rgba(10, 200, 200, 1);
    }
  </style>

  <p class="title title1">轻轻的我走了</p>
  <p class="title title2">正如我轻轻的来</p>
  <p class="title title3">我轻轻的招手</p>
  <p class="title title4">作别西天的云彩</p>
```

## 字体样式

` font-size` 字体大小

`font-family` 字体

`font-style` 字体风格

`font-weight` 字体粗细

```html light
  <style>
    .title1 {
      /* 字体大小 */
      font-size: 20px;
      /* 字体 */
      font-family: "宋体";
      /* 字体风格 oblique italic*/
      font-style: italic;
    }
    .title2 {
      /* 字体大小 */
      font-size: 20px;
      font-family: "黑体";
    }
    .title3 {
      /* 字体的粗细 100-900 整百的数 默认的字体粗为400*/
      font-weight: 900;
    }
  </style>
  <p class="title title1">轻轻的我走了</p>
  <p class="title title2">正如我轻轻的来</p>
  <p class="title title3">我轻轻的招手</p>
  <p class="title title4">作别西天的云彩</p>
  
```

## 内容的水平对齐方式

`text-align`:`left | center | right`

```html light
    <style>
      .title1 {
        text-align: left;
      }
      .title2 {
        text-align: center;
      }
      .title3 {
        text-align: right;
      }
    </style>

    <p class="title title1">轻轻的我走了</p>
    <p class="title title2">正如我轻轻的来</p>
    <p class="title title3">我轻轻的招手</p>
    <p class="title title4">作别西天的云彩</p>
```

## 内容的垂直对齐方式

`line-height` 当行高等于容器的高度，就可以达到垂直居中

```html light
  <style>
    .title1 {
      height: 50px;
      /* 边框 */
      border: 1px solid red;
      /* 行高 */
      line-height: 50px;
    }
  </style>

  <p class="title title1">轻轻的我走了</p>
  <p class="title title2">正如我轻轻的来</p>
  <p class="title title3">我轻轻的招手</p>
  <p class="title title4">作别西天的云彩</p>
```

## 背景

默认情况下body是没有高度的，他的高度是被内容撑开的，当没有内容高度0，此时需要给`html`标签设置高度100%，body继承html的高度

```html light
  <style>
    html {
      height: 100%;
    }
    body {
      height: 100%;
      /* 背景颜色 */
      background-color: red;
      /* 背景图片 */
      /* background-image: url(./img/bg.gif); */
      /* 平铺 repeat-y repeat-x repeat  no-repeat*/
      /* background-repeat: no-repeat; */
      /* 背景大小 */
      background-size: 100% 100%;
      /* 统一设置 */
      background: url(./img/bg.gif) no-repeat;
    }
  </style>
  <body></body>
```

## 轮廓

```html light
  <style>
    input {
      width: 100%;
      height: 35px;
      /* 取消轮廓 0 none */
      /* outline: none; */
      /* solid 实线 dotted 点状线 double 双线 */
      outline: 1px double #36cbbe;
    }
  </style>
  
  <input type="text" />
  <button>按钮</button>
```

## 线

```html light
  <style>
    a {
      /* text-decoration: none; */
      /* 删除线 line-through*/
      text-decoration: line-through;
      /* 上划线  overline*/
      text-decoration: overline;
      /* 下划线 underline */
      text-decoration: underline red;
    }
  </style>

  <a href="">百度</a>
```

## 列表样式

```html light
  <style>
    ul {
      /* 取消列表的默认样式 */
      list-style: none;
    }
    ol {
      list-style: none;
    }
  </style>

  <ul>
    <li>张三</li>
    <li>李四</li>
    <li>王五</li>
  </ul>
  <ol>
    <li>张三</li>
    <li>李四</li>
    <li>王五</li>
  </ol>
```

## 行类元素和块级元素的区别（面试题）

行类元素(内联元素): 在一行显示，不会自动换行，并且不能设置宽度和高度，只能通过内容撑开

a span strong b em i del

块级元素：独占一行，可以设置宽高

p h1-h6 ul ol li form div table tr td

行类块级元素：既在一行显示，还可以设置宽高

button input select option

## 行类元素和块级元素的相互转化

`display` inline 行类元素 block 块级元素 inline-block 行类块级元素

```html light
    <style>
      a {
        height: 200px;
        width: 200px;
        background: red;
        /* inline 行类元素 block 块级元素 inline-block 行类块级元素 */
        display: inline-block;
      }
      .box {
        width: 200px;
        height: 200px;
        background: blue;
        display: inline;
      }
    </style>

    <a href="">百度</a>
    <a href="">新浪</a>
    <div class="box">这是一个盒子</div>
```

