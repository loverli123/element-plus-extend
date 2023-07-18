// 导入组件，组件必须声明 name
import dateRange from './dateRange.vue'

// 为组件添加 install 方法，用于按需引入
dateRange.install = function (App : any) {
    App.component(dateRange.name, dateRange)
}

export default dateRange