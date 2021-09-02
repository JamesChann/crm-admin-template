import MainPanel from './main-panel'
import ScrollPanel from './scroll-panel'
import OperationPanel from './operation-panel'
import EmptyPanel from './empty-panel'
import Breadcrumb from './breadcrumb'
import Hamburger from './hamburger'
import Datepicker from './date-picker'
import CrmInput from './crm-input'
import CrmSelect from './crm-select'
import CrmButton from './crm-button'
import CrmTable from './crm-table'
import Dialog from './dialog/dialog'

const components = {
  MainPanel,
  ScrollPanel,
  OperationPanel,
  EmptyPanel,
  Breadcrumb,
  Hamburger,
  Datepicker,
  CrmInput,
  CrmSelect,
  CrmButton,
  CrmTable
}

const install = function (Vue) {
  for (const component of Object.values(components)) {
    Vue.component(component.name, component)
  }

  Vue.prototype.$dialog = Dialog
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '1.0.0',
  install,
  ...components
}