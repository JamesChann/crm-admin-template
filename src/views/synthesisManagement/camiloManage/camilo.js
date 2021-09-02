/**
 * 卡密管理
 * @author jameschan.org
 * @date 2021-08-31
 */
import { TableMixin } from '@/mixins'
import { getList } from '@/api/camilo'

export default {
  name: 'camilo',
  mixins: [TableMixin],
  data() {
    return {
      MQuery: {
        camilostatus: 0,
        camilopwd: '',
        userphone: '',
        dateStart: '',
        dateEnd: ''
      },
      TableHeaders: [
        { title: 'ID', field: 'id' },
        { title: '名称', field: 'title' },
        { title: '类型', field: 'type' },
        { title: '渠道', field: 'site' },
        { title: '卡密', field: 'camilo_pwd' },
        { title: '卡密状态', field: 'status_txt' },
        { title: '激活时间', field: 'activation_time' },
        { title: '过期时间', field: 'expire_time' },
        { title: '用户手机号', field: 'phone' }
      ],
      Drop: {
        camilostatus: [
          { label: '全部', value: 0 },
          { label: '未发放', value: 1 },
          { label: '已发放未激活', value: 2 },
          { label: '已激活未使用', value: 3 },
          { label: '已使用', value: 4 },
          { label: '已使用已过期', value: 5 },
          { label: '未发放已过期', value: 6 }
        ]
      }
    }
  },
  async created() {
    await this.initTableData()
  },
  methods: {
    async initTableData() {
      this.$$setMTableData(await getList(), this.TableHeaders)
    },

    importUser() {
      console.log('开始导入用户')
      this.$dialog({
        title: '导入用户'
      })
    }
  }
}