<template>
  <section :class="[namespace, 'crm-main-panel']">
    <slot />
  </section>
</template>

<script>
export default {
  name: 'crm-main-panel',
  props: {
    namespace: {
      type: String,
      default: 'default-space'
    }
  }
}
</script>

<style lang="scss" src="./main-panel.scss" />
