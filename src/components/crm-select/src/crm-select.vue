<template>
  <section class="crm-select">
    <el-select v-model.trim="inner_data_model"
              :class="['crm-select--'+size]"
              :size="size"
              :placeholder="placeholder"
              @input="_handle_change">
      <!-- option -->
      <el-option v-for="item in data"
                 :key="item.value"
                 :label="item.label"
                 :value="item.value" />
    </el-select>
  </section>
</template>

<script>
export default {
  name: 'crm-select',
  props: {
    data: {
      type: Array,
      default: []
    },
    dataModel: {
      type: Number,
      default: null
    },
    size: {
      type: String,
      default: 'normal'
    },
    placeholder: {
      type: String,
      default: '请选择'
    }
  },
  data() {
    return {
      inner_data_model: '全部'
    }
  },
  watch: {
    dataModel: {
      immediate: true,
      handler(data) {
        this.inner_data_model = data
      }
    }
  },
  methods: {
    _handle_change() {
      this.$emit('update:data-model', this.inner_data_model)
    }
  }
}
</script>

<style lang="scss" src="./crm-select.scss" />