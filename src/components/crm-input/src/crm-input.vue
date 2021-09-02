<template>
  <section class="crm-input">
    <el-input v-model.trim="inner_data_model"
              :class="['crm-input--'+size]"
              :size="size"
              :placeholder="placeholder"
              @input="_handle_change"
              clearable />
  </section>
</template>

<script>
  export default {
    name: 'crm-input',
    props: {
      dataModel: {
        type: String,
        default: null
      },
      size: {
        type: String,
        default: 'normal'
      },
      placeholder: {
        type: String,
        default: '请输入'
      }
    },
    data() {
      return {
        inner_data_model: ''
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

<style lang="scss" src="./crm-input.scss" />