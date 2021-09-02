<template>
  <div :class="['crm-empty-panel',height === 'auto'?'auto':'']" :style="style">
    <div :class="wrapClass" :style="wrapStyle">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'crm-empty-panel',
  props: {
    height: { // 高度   auto:自适应
      type: [String, Number],
      default: ''
    },
    transparent: { // true : wrap 透明
      type: Boolean,
      default: false
    },
    direction: { // 排列方向
      type: String,
      default: 'column'
    },
    textAlign: { // 文字对齐方向
      type: String,
      default: '' // right: 右对齐
    },
    padding: { // 内边距
      type: String,
      default: '' // T: top:25;     TB： top：10px bottom: 10px ；    none ：上右下左 全部 0； 其他自定义格式（10px auto）
    }
  },
  computed: {
    style() {
      const style = {}
      const {height} = this

      if (!isNaN(parseFloat(height))) {
          style.height = `${height}px`
      }

      return style
    },

    wrapClass() {
      const {padding} = this
      const clazz = ['crm-empty-panel__wrap']

      if (this.transparent) {
          clazz.push('transparent')
      }

      if (this.direction === 'row') {
          clazz.push('direction-row')
      }

      if (this.textAlign === 'right') {
          clazz.push(this.direction === 'column' ? 'align-items-flex-end' : 'justify-content-flex-end')
      }

      if (padding && (padding === 'T' || padding === 'TB' || padding === 'none')) {
          clazz.push(`padding-${padding.toLowerCase()}`)
      }

      return clazz
    },

    wrapStyle() {
      const style = {}
      const {padding} = this

      if (padding && padding !== 'T' && padding !== 'TB' && padding !== 'none') {
        const p = padding.split(' ')
        const len = p.length;
        const [top, right, bottom, left = 'auto'] = p

        if (len === 1) {
          style.padding = padding
        } else if (len === 2) {
          if (top !== 'auto') {
              style.paddingTop = top
              style.paddingBottom = top
          }
          if (right !== 'auto') {
            style.paddingRight = right
            style.paddingLeft = right
          }
        } else {
          if (top !== 'auto') {
              style.paddingTop = top
          }
          if (right !== 'auto') {
              style.paddingRight = right
          }
          if (bottom !== 'auto') {
              style.paddingBottom = bottom
          }
          if (left !== 'auto') {
              style.paddingLeft = left
          }
        }
      }
      return style
    }
  }
}
</script>

<style lang="scss" src="./empty-panel.scss" />
