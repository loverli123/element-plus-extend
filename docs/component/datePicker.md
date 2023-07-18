# DatePicker 日期选择器

快速的数据化配置一个下拉框，常用于搭配数据表单。

依赖组件： `ElDatePicker`，需先全局注册。

:::tip

日期第一天修改为星期一
```ts
import locale from 'element-plus/lib/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'

// 将自动设置 Day.js 的国际化设置为 'zh-cn'
app.use(ElementPlus, { locale })
```

:::

## 日期选择

<ClientOnly>
  <DatePickerDefault />
</ClientOnly>


::: details 查看源码
::: code-group
```vue [使用]
<lc-date-picker v-model="value1"></lc-date-picker>
<lc-date-picker type="week" v-model="value2"></lc-date-picker>
<lc-date-picker type="month" v-model="value3"></lc-date-picker>
<lc-date-picker type="year" v-model="value4"></lc-date-picker>
```
<<< ../../packages/datePicker/datePicker/datePicker.vue[源码]
:::

## 日期范围选择

<ClientOnly>
  <DatePickerRange />
</ClientOnly>

::: details 查看源码
::: code-group
```vue [使用]
 <lc-date-range v-model="val"></lc-date-range>
```
<<< ../../packages/datePicker/dateRange/dateRange.vue[源码]
:::

## 属性

| 属性          |      类型           |  默认值 | 说明  |
| :-----------: | :-----------:       | :----:  | ---   |
| placeholder   | `string`            | 请选择日期   | ---   |
| start-placeholder   | `string`      | 请选择开始时间   | ---   |
| end-placeholder   | `string`        | 请选择结束时间   | ---   |
| value-format   | `string`           | YYYY-MM-DD HH:mm:ss   | ---   |
| ......        |   -     |    -     | [DatePicker其他 属性](https://element-plus.gitee.io/zh-CN/component/date-picker.html#attributes)|
