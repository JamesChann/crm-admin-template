import EmptyPanel from './src/empty-panel'

EmptyPanel.install = (Vue) => {
  Vue.component(EmptyPanel.name, EmptyPanel)
}

export default EmptyPanel