// 导入组件，组件必须声明 name
import Input from './input.vue'

// 为组件添加 install 方法，用于按需引入
Input.install = function (App : any) {
    App.component('lc-' + Input.name, Input)
}

export default Input