---
title: Toast 文字提示
---

# Toast 文字提示

**使用方法**

### this.\$toast('信息内容')

#### 预览

<ClientOnly>
<toast-demo-1></toast-demo-1>
</ClientOnly>

#### 示例代码

```vue
<i-button @click="$toast('点击弹出提示')">上方弹出</i-button>
<i-button
  @click="$toast('点击弹出提示', { position: 'middle' })">中间弹出</i-button>
<i-button
  @click="$toast('点击弹出提示', { position: 'bottom' })">下方弹出</i-button>
```

### 设置关闭按钮

#### 预览

<ClientOnly>
<toast-demo-2></toast-demo-2>
</ClientOnly>

#### 示例代码

```vue
<template>
  <div>
    <i-button @click="onClickButton">上方弹出</i-button>
  </div>
</template>
<script>
export default {
  methods: {
    onClickButton() {
      this.$toast("你知道我在等你吗？", {
        closeButton: {
          text: "知道了",
          callback: () => {
            console.log("他说知道了");
          },
        },
      });
    },
  },
};

```

# options

|      参数      |           说明           |  类型   |              可选值               |              默认值               |
| :------------: | :----------------------: | :-----: | :-------------------------------: | :-------------------------------: |
|    message     | 显示内容，函数第一个参数 | String  |                --                 |                --                 |
|    options     |   函数接受的第二个参数   | Object  | autoClose, closeButton,, position |                --                 |
|    position    |     弹出框出现的位置     | String  |        top、middle、bottom        |                top                |
|   autoClose    |       是否自动关闭       | Boolean |            true、false            |               true                |
| autoCloseDelay |       关闭延时时间       | Number  |              自定义               |                3s                 |
|  closeButton   |       设置关闭按钮       | Object  |                --                 | {text:'关闭', callback:undefined} |
