const Mock = require('mockjs')

Mock.Random.extend({
  phone: function() {
    var phonePrefixs = ['132', '135', '187']
    return this.pick(phonePrefixs) + Mock.mock(/\d{8}/)
  }
})

const data = Mock.mock({
  'items|5': [{
    id: '@id',
    'title|1': ['视频医生', '电话医生', '重疾绿通', '专家门诊'],
    'type|1': ['月卡', '季卡'],
    'site|1': ['和缓', '联通', '互联网'],
    camilo_pwd: '@integer(10000, 90000)',
    'status|1': [1, 2, 3, 4, 5],
    'status_txt|1': ['未发放', '已发放未激活', '已激活未使用', '已使用', '已使用已过期', '未发放已过期'],
    activation_time: '@datetime',
    expire_time: '@datetime',
    'phone|1': ['@phone']
  }]
})

module.exports = [
  {
    url: '/api/table/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: 15,
          list: items
        }
      }
    }
  }
]
