const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  
  // userinfo getters
  userinfo: (state) => {
    state.app.userinfo = JSON.parse(localStorage.getItem('userinfo'))
    return state.app.userinfo
  }
}
export default getters
