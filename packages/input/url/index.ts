// 导入组件，组件必须声明 name
import Url from './url.vue'

// 为组件添加 install 方法，用于按需引入
Url.install = function (App : any) {
    App.component('lc-' + Url.name, Url)
}

export default Url