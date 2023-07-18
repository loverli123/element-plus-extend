import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    lib:{
      entry:"packages/index.ts",
      name:'element-plus-extend',
      fileName:'ep-extend'
    },
    rollupOptions: {
      output:{
        manualChunks(id) {
          if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  },
  plugins: [
    vue(),
  ]
})
