# Orange-UI

[![Build Status](https://travis-ci.org/Orange-ice/Ice-UI.svg?branch=master)](https://travis-ci.org/Orange-ice/Ice-UI)
![npm](https://img.shields.io/npm/v/ice-vue-ui)

## 介绍

Orange-UI 是一个基于 Vue 的 UI 组件库，目前包括有 Button、Input、Grid、Layout、Toast 组件。项目尚未完工，持续更新中。

## 开始使用

1. 添加 CSS 样式

使用本框架前，请在 CSS 中开启 border-box

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

IE 8 及以上浏览器都支持此样式。

2. 安装 ice-vue-ui

```bash
npm i --save Orange-vue-ui
```

3. 引入 ice-vue-ui

```js
import { Button, ButtonGroup, Icon } from "Orange-vue-ui";
import "Orange-vue-ui/dist/index.css";

export default {
  name: "app",
  components: {
    "i-button": Button,
    "i-icon": Icon,
  },
};
```

## 文档

[前往官网](https://chensheng01.github.io/hhhh/)
