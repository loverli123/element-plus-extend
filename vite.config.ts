import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import prismjs from 'vite-plugin-prismjs'

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    lib:{
      entry:"packages/index.ts",
      name:'element-plus-extend',
      fileName:'ep-extend'
    }
  },
  plugins: [
    vue(),
    prismjs({
      "languages": ["javascript", "css", "markup"],
      "plugins": ["toolbar", "line-numbers", "copy-to-clipboard"], //配置显示行号插件
      // 主题名称,支持的主题可以在 node_moduels中安装此库的目录下寻找。
      theme: "tomorrow",
      css: true
    })
  ]
})
