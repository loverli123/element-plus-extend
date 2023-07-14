// 导入组件，组件必须声明 name
import Idnumber from './idnumber.vue'

// 为组件添加 install 方法，用于按需引入
Idnumber.install = function (App : any) {
    App.component('lc-' + Idnumber.name, Idnumber)
}

export default Idnumber