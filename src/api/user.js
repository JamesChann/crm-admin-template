import request from '@/utils/request'

// userinfo login
export function login(data) {
  return request({
    url: '/api/user/login',
    method: 'post',
    data
  })
}

// get userinfo
export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
