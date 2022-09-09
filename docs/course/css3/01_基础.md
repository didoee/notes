## CSS3简介

- 对CSS3已完全向后兼容，所以不必改变现有的设计。浏览器将永远支持CSS2

- CSS3被拆分为"模块"。旧规范已拆分成小块，还增加了新的

## 选择器

### 属性选择器

- E[att^="val"]  属性att的值以"val"开头的元素    

- E[att$="val"]  属性att的值以"val"结尾的元素      

- E[att*="val"]  属性att的值包含"val"字符串的元素

### 结构伪类选择器（过滤选择器）

- E:root 匹配文档的根元素，对于HTML文档，就是HTML元素  

- E:nth-child(n) 匹配其父元素的第n个子元素  

- E:first-child 选中第一个元素

- E:last-child 选中最后一个元素  

- E:empty 匹配一个不包含任何子元素的元素，注意，文本节点也被看作子元素 

  ```css light
  p:empty {
  	background:#ff0;
  }
  ```

## 边框
用 CSS3，你可以创建圆角边框，添加阴影框，并作为边界的形象而不使用设计程序，如 Photoshop。
边框属性：`border-radius` `box-shadow`

### border-radius

允许你为元素添加圆角边框

border-radius 属性可以接受一到四个值。规则如下：

四个值 - border-radius: 15px 50px 30px 5px;（依次分别用于：左上角、右上角、右下角、左下角）

三个值 - border-radius: 15px 50px 30px;（第一个值用于左上角，第二个值用于右上角和左下角，第三个用于右下角）

两个值 - border-radius: 15px 50px;（第一个值用于左上角和右下角，第二个值用于右上角和左下角）

一个值 - border-radius: 15px;（该值用于所有四个角，圆角都是一样的）

::: info

border-radius 属性实际上是以下属性的简写属性

 `border-top-left-radius | border-top-right-radius | border-bottom-right-radius | border-bottom-left-radius`

:::

### border-shadow

应用阴影于元素，语法：box-shadow: h-shadow v-shadow blur spread color inset;

- h-shadow：必需的。水平阴影的位置。允许负值
- v-shadow：必需的。垂直阴影的位置。允许负值
- blur：可选。模糊距离
- spread:可选。阴影的大小
- color:可选。阴影的颜色
- inset:可选。从外层的阴影（开始时）改变阴影内侧阴影

## 文本溢出

### 单行溢出
### 多行溢出

## 变量

```css light
:root {
    --blue: #1e90ff;
    --white: #ffffff;
}
div{
    background: var(--blue);
    color: var(--white);
}
```

## 媒体查询
媒体查询由一种媒体类型组成，并可包含一个或多个表达式，这些表达式可以解析为 true 或 false。CSS3 媒体类型：

- all		用于所有媒体类型设备
- print	用于打印机
- screen	用于计算机屏幕、平板电脑、智能手机等等
- speech	用于大声“读出”页面的屏幕阅读器

```css light
下面的例子在视口宽度为 480 像素或更宽时将背景颜色更改为浅绿色（如果视口小于 480 像素，则背景颜色会是粉色）：
@media screen and (min-width: 480px) {
    body {
        background-color: lightgreen;
    }
}
```

## box-sizing

允许我们在元素的总宽度和高度中包括内边距（填充）和边框

假如不指定 CSS box-sizing 属性,默认情况下，元素的宽度和高度是这样计算的：

- width + padding + border = 元素的实际宽度
- height + padding + border = 元素的实际高度

这意味着：当您设置元素的宽度/高度时，该元素通常看起来比您设置的更大（因为元素的边框和内边距已被添加到元素的指定宽度/高度中）

- box-sizing 属性解决了这个问题
- border-box;，则宽度和高度会包括内边距和边框
  content-box	正常计算
- Inherit	从父元素继承 box-sizing 属性的值

## 渐变
CSS3 渐变（gradients）可以让你在两个或多个指定的颜色之间显示平稳的过渡

以前，你必须使用图像来实现这些效果。但是，通过使用 CSS3 渐变（gradients），你可以减少下载的事件和宽带的使用。此外，渐变效果的元素在放大时看起来效果更好，因为渐变（gradient）是由浏览器生成的

CSS3 定义了两种类型的渐变（gradients）：

- 线性渐变（Linear Gradients）- 向下/向上/向左/向右/对角方向
- 径向渐变（Radial Gradients）- 由它们的中心定义

语法：

- background: linear-gradient(direction, color-stop1, color-stop2, ...);
- background: radial-gradient(shape size at position, start-color, ..., last-color);

### 线性渐变

```css light
语法：
background: linear-gradient(direction, color-stop1, color-stop2, ...);
 从上到下（默认情况下）
background: linear-gradient(red, blue); 
线性渐变 - 从左到右
background: linear-gradient(to right, red , blue);
对角
background: linear-gradient(to bottom right, red , blue);
使用角度
角度是指水平线和渐变线之间的角度，逆时针方向计算。换句话说，0deg 将创建一个从下到上的渐变，90deg 将创建一个从左到右的渐变。
background: linear-gradient(180deg, red, blue);
```

### 径向渐变

```css light
语法：
background: radial-gradient(shape size at position, start-color, ..., last-color);
颜色节点均匀分布
background: radial-gradient(red, yellow, green);
颜色节点不均匀分布
background-image: radial-gradient(red 5%, yellow 15%, green 60%);
形状为圆形
background-image: radial-gradient(circle, red, yellow, green);
```

## 转换
CSS3转换，我们可以移动，比例化，反过来，旋转，和拉伸元素。2D变换方法：

- translate()	
- rotate()
- scale()
- skew()

```css light
使用`transform`属性设置以上属性值即可实现转换

translate()方法，根据左(X轴)和顶部(Y轴)位置给定的参数，从当前元素位置移动
语法：transform: translate(50px,100px);

rotate()方法，在一个给定度数顺时针旋转的元素。负值是允许的，这样是元素逆时针旋转
语法：transform: rotate(30deg);

scale()方法，该元素增加或减少的大小，取决于宽度（X轴）和高度（Y轴）的参数
语法：transform: scale(2,4);

skew() 方法，包含两个参数值，分别表示X轴和Y轴倾斜的角度，如果第二个参数为空，则默认为0，参数为负表示向相反方向倾斜
skewX( );表示只在X轴(水平方向)倾斜
skewY( );表示只在Y轴(垂直方向)倾斜
语法：transform: skew(30deg,20deg);
```

## 过渡
- CSS3中，我们为了添加某种效果可以从一种样式转变到另一个的时候，无需使用Flash动画或JavaScript。用鼠标移过下面的元素：

- CSS3 过渡是元素从一种样式逐渐改变为另一种的效果

- 要实现这一点，必须规定两项内容：

  - 指定要添加效果的CSS属性

  - 指定效果的持续时间

- 语法：transition:width 2s：

  - transition  简写属性，用于在一个属性中设置四个过渡属性

  - transition-property   规定应用过渡的 CSS 属性的名称

  - transition-duration 定义过渡效果花费的时间。默认是 0

  - transition-timing-function	规定过渡效果的时间曲线。默认是 "ease"

  - transition-delay 规定过渡效果何时开始。默认是 0

## 动画
- CSS3 可以创建动画，它可以取代许多网页动画图像、Flash 动画和 JavaScript 实现的效果

- 要创建 CSS3 动画，你需要了解 @keyframes 规则：

  - @keyframes 规则是创建动画

  - @keyframes 规则内指定一个 CSS 样式和动画将逐步从目前的样式更改为新的样式

  - 当在 @keyframes 创建动画，把它绑定到一个选择器，否则动画不会有任何效果

- 指定至少这两个CSS3的动画属性绑定向一个选择器：

  - 规定动画的名称

  - 规定动画的时长
