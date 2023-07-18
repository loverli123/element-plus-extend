// 导入组件，组件必须声明 name
import Search from './search.vue'

// 为组件添加 install 方法，用于按需引入
Search.install = function (App : any) {
    App.component(Search.name, Search)
}

export default Search