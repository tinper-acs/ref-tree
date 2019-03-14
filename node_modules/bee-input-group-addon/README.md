# bee-input-group-addon
[![npm version](https://img.shields.io/npm/v/bee-input-group-addon.svg)](https://www.npmjs.com/package/bee-input-group-addon)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-input-group-addon/master.svg)](https://travis-ci.org/tinper-bee/bee-input-group-addon)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-input-group-addon/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-input-group-addon?branch=master)

InputGroupAddon 作为FormControl的边标签容器存在,修饰补充FormControl.比如文字说明，货币说明。


## 使用

使用单独的bee-input-group-addon包
#### 组件引入
先进行下载bee-input-group-addon包
```
npm install --save bee-input-group-addon
```
组件调用
```js
import InputGroupAddon from 'bee-input-group-addon';
React.render(<div>
    <InputGroupAddon/>
</div>, document.getElementById('target'));
```
#### 样式引入
- 可以使用link引入dist目录下bee-input-group-addon.css
```
<link rel="stylesheet" href="./node_modules/build/bee-input-group-addon.css">
```
- 可以在js中import样式
```js
import "./node_modules/src/InputGroupAddon.scss"
//或是
import "./node_modules/build/bee-input-group-addon.css"
```



## API

|参数|说明|类型|默认值|
|:--|:---:|:--:|---:|

#### 开发调试

```sh
$ git clone https://github.com/tinper-bee/bee-input-group-addon
$ cd bee-input-group-addon
$ npm install
$ npm run dev
```
