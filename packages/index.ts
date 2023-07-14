import idnumber from './input/idnumber'
import input from './input/input'
import search from './input/search'
import url from './input/url'

export {
  idnumber,
  input,
  search,
  url
}

export default {
  install: function (app: any) {
    const components = [
      idnumber,
      input,
      search,
      url
    ]
    components.forEach(el => app.component('lc-' + el.name, el))
  },
}
