import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import ElementPlusExtend from '../../../packages'
const exampleComponents = (import.meta as any).globEager("../../examples/*.vue");

import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './custom.css';

import DefaultTheme from 'vitepress/theme'

export default {
  ...DefaultTheme,
  enhanceApp: ({ app }) => {
    
    app.use(ElementPlusExtend)
    app.use(ElementPlus)
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
