<template>
  <section class="crm-button">
    <el-button :class="[type ? 'crm-button--' + type : '']"
               @click="handleClick">
      <span class="crm-button__icon"
            v-if="icon">
        <svg-icon :icon-class="icon" />
      </span>
      <slot></slot>
    </el-button>
  </section>
</template>

<script>
export default {
  name: 'crm-button',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    icon: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    }
  }
}
</script>

<style lang="scss" src="./crm-button.scss" />
