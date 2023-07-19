# element-plus-extend

<p align="center">
  <a href="https://www.npmjs.org/package/element-plus-extend">
    <img src="https://img.shields.io/npm/v/element-plus-extend.svg">
  </a>
  <a href="https://npmcharts.com/compare/element-plus-extend?minimal=true">
    <img src="https://img.shields.io/npm/dm/element-plus-extend.svg">
  </a>
  <br>
</p>

<p align="center">基于Element Plus的扩展Vue.js 3组件库</p>

- 💪 Vue 3 
- 🔥 TypeScript

## 文档

- [中文说明文档](https://loverli123.github.io/element-plus-extend/) 

## 安装

```sh
pnpm install element-plus-extend
```

```ts
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

## 使用

```vue
<template>
  <lc-input v-model="val"></lc-input>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  const val = ref('');
</script>
```