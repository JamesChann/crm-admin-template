import _import from '../router/_import'

function addRouter(routerlist) {
  routerlist.forEach(e => {
    delete e.id
    e.component = _import(e.component)

    if (e.redirect === '') {
      delete e.redirect
    }

    if (e.name === '') {
      delete e.name
    }

    if (e.icon !== '' && e.title !== '') {
      e.meta = {
        title: e.title,
        icon: e.icon
      }
    } else if (e.icon === '' && e.title !== '') {
      e.meta = {
        title: e.title
      }
    }

    delete e.icon
    delete e.title

    if (e.children != null) {
      // always show menu
      e.alwaysShow = true
      
      addRouter(e.children)
    }
  })

  return routerlist
}

export { addRouter }