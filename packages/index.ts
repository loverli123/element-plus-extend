// input输入框
import idnumber from './input/idnumber'
import input from './input/input'
import search from './input/search'
import url from './input/url'

// datePicker 日期选择器
import datePicker from './datePicker/datePicker'
import dateRange from './datePicker/dateRange'

export {
  idnumber,
  input,
  search,
  url,
  datePicker,
  dateRange
}

export default {
  install: function (app: any) {
    const components = [
      idnumber,
      input,
      search,
      url,
      datePicker,
      dateRange
    ]
    components.forEach(el => app.component(el.name, el))
  },
}
