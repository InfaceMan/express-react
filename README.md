# express-react
服务端渲染React组件
该项目只是实现了服务端渲染react组件到客户端，但渲染出来的组件没有响应事件。如你所见，本来渲染在客户端的button 在触发点击事件后会在控制台打印出 ‘hello’。但结果不是预想中的那样，客户端报错了 ‘react is not defined’。
我的实现思路是这样的：服务端渲染react组件成字符串填充到ejs模板中，然后在ejs模板引用这个组件。这样的思路会有毛病吗？

这是一个express项目。
运行步骤：
1. npm install   安装依赖包
2. set DEBUG=erp & npm start  //运行项目
3. 打开 http://localhost:3000/
