# express-react
服务端渲染React组件
该项目实现了服务端渲染react组件。点击按钮 在控制台输出 hello
我的实现思路是这样的：服务端渲染react组件成字符串，然后填充到ejs模板中，客户端获得html页面后 还要render 一遍 react组件。既然客户端还要render 一遍组件 那么就得在客户端再引用一遍react组件文件。
说明：对同一个组件，服务端渲染“可视的”一部分( render/componentWillMount部分代码  )，为确保组件有完善的生命周期及事件处理，客户端需要再次渲染。即：服务端渲染，实际上也是需要客户端进行 再次地、但开销很小的二次渲染。

下一步学习目标是 node+express+ejs+react 配合 react-route 使用

这是一个express项目。
运行步骤：
1. npm install   安装依赖包
2. set DEBUG=erp & npm start  //运行项目
3. 打开 http://localhost:3000/
