# 大数据管理页面
# 说明
1. `templates`文件夹中的`EPMS.html`文件是管理页面的主要页面元素文件，另外两个`demo`的`html`均为测试使用。管理页面使用的是[Layui开源前端框架](https://layui.dev/docs/2/layout/)，下载完`layui`的包以后直接复制相应元素的代码到`html`文件中（要把`layui`的`js`文件导入），就能够实现框架的简单功能。
2. `static`文件夹说明：
   - `font`文件夹储存的是文字的样式
   - `image`文件夹是素材图片
   - `js`文件夹是画图的`js`代码，主要是`WEIZHEN.js`文件，`index.js`测试用， 与项目无关。其他的都是库。
   - `HTML`文件夹是每个菜单栏的嵌入的`iframe`元素代码在`ESPM.html`文件中：
   ```html
   <div class="layui-body" style="padding-top: 10px;padding-bottom: 0; ">
    <!-- 内容主体区域 -->
      <iframe id="xiangmuzonglan" src="/static/HTML/项目总览.html" style="height: 100%;width: 100%; padding-top: 50px; display: block"></iframe>
      <iframe id="weiyijiance" src="/static/HTML/位移监测.html" style="height: 100%;width: 100%; padding-top: 50px; display: none; "></iframe>
      <iframe id="weizhenjiance" src="/static/HTML/微震监测.html" style="height: 100%;width: 100%; padding-top: 50px; display: none"></iframe>
    </div>
    ```
    其中的`index.html`是测试用的初始页面，模拟点击链接调整到管理页面，可以直接打开看看效果。
    位移监测、微震监测、项目总览分别是菜单栏不同的选项想要展示的页面。内容最丰富的是微震监测页面，有一个表格和几个微震监测数据的曲线，绘图的代码在`WEIZHEN.js`中，包含点击x坐标，以及弹窗功能。读取的是`weizhen_1和2.json`


# 使用
运行`app.py`，返回一个本地域名`http://127.0.0.1:5000`点击或者使用浏览器进入即可