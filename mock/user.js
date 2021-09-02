// mock tokens
const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

// mock router
const router_admin = [{
    'id': 1,
    'path': '/synthesis',
    'component': 'Layout',
    'redirect': '/synthesis/camilo',
    'title': '综合管理',
    'icon': 'example',
    'children': [{
        'id': 2,
        'path': '/synthesis/camilo',
        'component': 'camiloManagement',
        'title': '卡密管理'
      }
    ]
  },
  {
    'id': 4,
    'path': '/system',
    'component': 'Layout',
    'redirect': '/system/user',
    'title': '系统管理',
    'icon': 'system-manage',
    'children': [{
      'id': 5,
      'path': '/system/user',
      'component': 'userManagement',
      'title': '用户管理'
    },{
      'id': 6,
      'path': '/system/role',
      'component': 'roleManagement',
      'title': '角色管理',
    },{
      'id': 7,
      'path': '/system/menu',
      'component': 'menuManagement',
      'title': '菜单管理'
    },{
      'id': 8,
      'path': '/system/log',
      'component': 'systemLog',
      'title': '系统日志'
    },{
      'id': 9,
      'path': '/system/monitoring',
      'component': 'performanceMonitoring',
      'title': '性能监控'
    },{
      'id': 10,
      'path': '/system/schedule',
      'component': 'timingSchedule',
      'title': '定时调度'
    }]
  }
]

const router_editor = [
  {
    'id': 1,
    'path': '/synthesis',
    'component': 'Layout',
    'redirect': '/synthesis/camilo',
    'title': '综合管理',
    'icon': 'example',
    'children': [{
      'id': 2,
      'path': '/synthesis/camilo',
      'component': 'camiloManagement',
      'title': '卡密管理'
    }]
  },
  {
    'id': 3,
    'path': '/menu1',
    'component': 'Layout',
    'redirect': '/three/menu1-1',
    'title': '三级菜单测试',
    'icon': 'example',
    'children': [{
        'id': 4,
        'path': '/three/menu1-1',
        'component': 'menu1-1',
        'title': '儿子菜单1',
        'children': [{
          'id': 5,
          'path': '/three/menu1-1',
          'component': 'menu1-2-1',
          'title': '孙子菜单1',
        }, {
          'id': 6,
          'path': '/three/menu1-1',
          'component': 'menu1-2-2',
          'title': '孙子菜单2',
        }]
      },{
        'id': 7,
        'path': '/three/menu1',
        'component': 'menu1-2',
        'title': '儿子菜单2'
      }
    ]
  }
]

// mock users
const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: '../../../static/head_icons/head_icon1.jpg',
    name: 'Super Admin',
    routers: router_admin
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: '../../../static/head_icons/head_icon2.jpg',
    name: 'Normal Editor',
    routers: router_editor
  }
}

module.exports = [
  // user login
  {
    url: '/api/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      const token = tokens[username]

      // mock error
      if (!token) {
        return {
          code: 60204,
          message: '账号和密码不正确.'
        }
      }

      return {
        code: 20000,
        message: '登录成功!',
        data: token
      }
    }
  },

  // get user info
  {
    url: '/vue-admin-template/user/info\.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

      // mock error
      if (!info) {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details.'
        }
      }

      return {
        code: 20000,
        data: info
      }
    }
  },

  // user logout
  {
    url: '/vue-admin-template/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]
