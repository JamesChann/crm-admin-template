<template>
    <el-date-picker v-if="linkage"
                    v-model="dates"
                    :type="type"
                    :align="align"
                    :range-separator="rangeSeparator"
                    :format="format"
                    :value-format="format"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    @change="rangeChange">
    </el-date-picker>

    <div v-else :class="['crm-date-picker--'+size, 'crm-date-picker']">
        <div class="crm-date-picker__start">
            <el-date-picker v-model="innerStartDate"
                            :type="dateType"
                            :align="align"
                            :format="format"
                            :value-format="format"
                            :placeholder="startDatePlaceholder"
                            @change="handlerDateChange"/>
        </div>
        <span class="crm-date-picker__separator">{{rangeSeparator}}</span>
        <div class="crm-date-picker__end">
            <el-date-picker v-model="innerEndDate"
                            :type="dateType"
                            :align="align"
                            :format="format"
                            :value-format="format"
                            :placeholder="endDatePlaceholder"
                            @change="handlerDateChange"/>
        </div>
    </div>
</template>

<script>
import moment from 'moment'

export default {
  name: "crm-date-picker",
  props: {
      align: {
        type: String,
        default: 'left'
      },
      rangeSeparator: {
        type: String,
        default: '至'
      },
      type: {
        type: String,
        default: 'daterange'
      },
      size: {
        type: String,
        default: 'normal'
      },
      format: { // yyyy-MM-dd HH:mm:ss
        type: String,
        default: 'yyyy-MM-dd'
      },
      linkage: {
        type: Boolean,
        default: true
      },
      dateType: {
        type: String,
        default: 'datetime'
      },
      startDate: {
        type: String,
        default: null
      },
      endDate: {
        type: String,
        default: null
      },
      startDatePlaceholder: {
        type: String,
        default: '开始日期'
      },
      endDatePlaceholder: {
        type: String,
        default: '结束日期'
      }
  },
  data() {
    return {
      dates: [],
      innerStartDate: '',
      innerEndDate: ''
    }
  },
  computed: {},
  watch: {
    startDate: {
      immediate: true,
      handler(date) {
          this.innerStartDate = date;
          this.setDates(date, 0);
      }
    },

    endDate: {
      immediate: true,
      handler(date) {
          this.innerEndDate = date;
          this.setDates(date, 1);
      }
    }
  },
  methods: {
    setDates(date, index) {
        if (!this.dates) {
            this.dates = []
        }
        this.dates[index] = date;
    },

    rangeChange(dates) {
        this.$emit('update:start-date', dates ? dates[0] : '')
        this.$emit('update:end-date', dates ? dates[1] : '')
    },

    startChange(date) {
        this.$emit('update:start-date', date)
    },

    endChange(date) {
        this.$emit('update:end-date', date)
    },

    handlerDateChange() {
      const {innerStartDate, innerEndDate} = this;
      if (innerStartDate && innerEndDate && !moment(innerStartDate).isBefore(innerEndDate) && !moment(innerStartDate).isSame(innerEndDate)) { // 判断 innerStartDate <= startEnd
          this.innerStartDate = innerEndDate;
          this.innerEndDate = innerStartDate;
      }
      this.$emit('update:start-date', this.innerStartDate ? this.innerStartDate : '');
      this.$emit('update:end-date', this.innerEndDate ? this.innerEndDate : '');
    }
  }
}
</script>

<style lang="scss" src="./date-picker.scss" />