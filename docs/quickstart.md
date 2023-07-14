# 快速开始 [![npm](https://img.shields.io/npm/v/element-plus-extend.svg)](https://www.npmjs.com/package/element-plus-extend)

## 特性

- Vue 3 Composition AP
- TypeScript 编写

数据配置

- 数据配置表单/表格，极简的思想，完全的数据驱动，拥有绝对的灵活性。

扩展组件

- 更多丰富的扩展组件，在 ElementPlus 没有找到的这里或许会有。

快捷使用

- 适配双语言，黑暗模式，完整的 typescript 提示，更方便的全局配置。

## 安装

`npm install element-plus-extend -s`

## 全局引用

```js
// main.ts
import { createApp } from 'vue'
import ElementPlus from "element-plus";
import ElementPlusExtend from "element-plus-crx";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus);
app.use(ElementPlusExtend);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.mount('#app')
```

## 按需引用

每个组件有对应依赖的组件，需按照文档全局注册。

```js
import { LcInput, LcInputNumber, LcInputSearch } from "element-plus-extend";

app.component(LcInput.name, LcInput);
app.component(LcInputNumber.name, LcInputNumber);
app.component(LcInputSearch.name, LcInputSearch);
```

## Typescript 支持

如果您使用 Volar，请在 `tsconfig.json` 中通过 `compilerOptions.type` 指定全局组件类型。

```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["element-plus/global", "element-plus-extend/global"]
  }
}
```

:::tip
组件源码是用 Typescript 编写，未做打包处理，如果你用的不是官方 vite 脚手架创建的 vue3 项目，则需要考虑添加 typescript 支持。
:::
