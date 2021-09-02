import Hamburger from './src/hamburger'

Hamburger.install = (Vue) => {
  Vue.component(Hamburger.name, Hamburger)
}

export default Hamburger