<template>
  <div class="crm-operation-panel">
    <div class="crm-operation-panel__wrap">
      <span>
        <slot /></span>
      <span>
        <slot name="right" /></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'crm-operation-panel'
  }
</script>

<style lang="scss" scoped src="./operation-panel.scss" />