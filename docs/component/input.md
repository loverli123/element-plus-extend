# Input 输入框

快速的数据化配置一个输入框，常用于搭配数据表单。

依赖组件： `ElInput` `ElSelect`，需先全局注册。

## 基础使用

<ClientOnly>
  <InputDefault />
</ClientOnly>


::: details 查看源码
::: code-group
```vue [使用]
 <lc-input v-model="val"></lc-input>
```
<<< ../../packages/input/input/input.vue[源码]
:::

## 搜索框

<ClientOnly>
  <InputSearch />
</ClientOnly>

::: details 查看源码
::: code-group
```vue [使用]
 <lc-input-search v-model="val"></lc-input-search>
```
<<< ../../packages/input/search/search.vue[源码]
:::

## 身份证件

<ClientOnly>
  <InputIdnumber />
</ClientOnly>


::: details 查看源码
::: code-group
```vue [使用]
<lc-input-idnumber v-model="val" v-model:xuanZe="xuanZe"></lc-input-idnumber>
<lc-input-idnumber v-model="val" :showXuanZe="false"></lc-input-idnumber>
```
<<< ../../packages/input/idnumber/idnumber.vue[源码]
:::

## URL

<ClientOnly>
  <InputUrl />
</ClientOnly>

::: details 查看源码
::: code-group
```vue [使用]
 <lc-input-url v-model="val"></lc-input-url>
```
<<< ../../packages/input/url/url.vue[源码]
:::

## 属性

| 属性          |      类型             |  默认值 | 说明  |
| :-----------: | :-----------:        | :----:  | ---   |
| placeholder   | `string`             | 请输入   | ---   |
| maxlength     |  `string` / `number` |   50    |---   |
| ......        |   -     |    -     | [Input其他 属性](https://element-plus.gitee.io/zh-CN/component/input.html#attributes)|


