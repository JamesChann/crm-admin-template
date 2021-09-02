import CrmTable from './src/crm-table'

CrmTable.install = (Vue) => {
  Vue.component(CrmTable.name, CrmTable)
}

export default CrmTable