export default file => {
  return map[file] || null
}
const map = {
  'Layout': () => import('@/layout'),
  'camiloManagement': () => import('@/views/synthesisManagement/camiloManage/camilo.vue'),
  'userManagement': () => import('@/views/systemManagement/userManage/user.vue'),
  'roleManagement': () => import('@/views/systemManagement/roleManage/role.vue'),
  'menuManagement': () => import('@/views/systemManagement/menuManage/menu.vue'),
  'systemLog': () => import('@/views/systemManagement/systemLog/log.vue'),
  'performanceMonitoring': () => import('@/views/systemManagement/performanceMonitoring/monitoring.vue'),
  'timingSchedule': () => import('@/views/systemManagement/timingSchedule/schedule.vue'),

  'menu1': () => import('@/views/nested/menu1/index'),
  'menu1-1': () => import('@/views/nested/menu1/menu1-1'),
  'menu1-2': () => import('@/views/nested/menu1/menu1-2'),
  'menu1-2-1': () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
  'menu1-2-2': () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
  'menu1-3': () => import('@/views/nested/menu1/menu1-3'),
  'menu2': () => import('@/views/nested/menu2/index')
}