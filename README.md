
> A Mpvue project-- wmp

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
代码编写注意
1.模板使用函数不支持，复杂表达式也不支持，只支持computed，因此如果数据复杂，要先做好处理
2.img 标签不支持引用本地图片等资源，可以用使用小程序image标签或者引用服务器上的图片
3.所有页面里面的created生命周期函数 都会在小程序加载的时候， 一次性执行，而不是每进入一个页面执行一次，用mounted或者onLoad或者onReady代替
4.渲染部分会转成 wxml ，wxml 不支持过滤器，所以这部分功能不支持。
5.小程序样式使用rpx代替px,可以根据屏幕宽度进行自适应,在 iPhone6上，1rpx = 0.5px = 1物理像素。
6.eslint工具：使用全等===
For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
