import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import ElementPlusExtend from '../../../packages'
const exampleComponents = (import.meta as any).globEager("../../examples/*.vue");

import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './custom.css';

import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn';

import DefaultTheme from 'vitepress/theme'

export default {
  ...DefaultTheme,
  enhanceApp: ({ app }) => {
    app.use(ElementPlus,{
      locale: zhCn,
    })
    app.use(ElementPlusExtend)
    // icon
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
    // 演示
    for (const key in exampleComponents) {
      const component = exampleComponents[key];
      const name = key.replace("../../examples/", "").replace(".vue", "");
      app.component(name, component.default);
    }
  },
}
