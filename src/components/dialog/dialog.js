/**
 * 弹窗组件
 * @author jameschan.org
 * @date 2021-09-01
 */

import Vue from "vue"
import './dialog.scss'

let instance = null  // 弹窗控件
let level = null   // 二级弹窗控件
let zIndex = 2000

const DialogConstructor = Vue.extend({
  name: 'crm-dialog',
  data() {
    return {
      config: {
        title: '', // 弹窗标题
        width: 800, // 弹窗宽度
        view: null, // 内容组件
        params: {}, // 携带的参数
        flat: true, // 参数拉平
        action: 'add', // 操作
        level: false, // 是否二级弹窗
        visible: true, // 显示隐藏弹窗
        showClose: true, // 是否显示关闭按钮
        closeValidate: () => (true), // 关闭验证逻辑
        showFooter: false, // 是否显示底部按钮
        showCloseButton: true, // 是否显示关闭按钮
        closeButtonText: '关闭', // 关闭按钮的显示文本
        showConfirmButton: true, // 是否显示确定按钮
        confirmButtonText: '确定', // 确定按钮的显示文本
        disabled: false // 禁用
      }
    }
  },
  render(createElement) {
    const { config } = this
    return createElement('section', {
      class: 'crm-dialog',
      style: {
        display: config.visible ? 'flex' : 'none',
        zIndex
      }
    }, [
      createElement('div', {
          class: 'dialog-box', // 白色盒子
          style: {
            width: config.width + 'px'
          },
        }, 
          [
            createElement('div', {
                class: 'dialog-header'
              }, [
                createElement('p', {
                  class: 'dialog-title',
                  domProps: {
                    innerHTML: config.title
                  }
                }),
                config.showClose ?
                createElement('span', {
                  class: 'dialog-close',
                  on: {
                    click: () => {
                      this.close()
                    }
                  }
                }) : ''
              ]),
              createElement('div', {
                class: 'dialog-body'
              }, [
                createElement(config.view, {
                  props: {
                    closeDialog: this.close, // 关闭弹窗
                    params: config.params, // 参数
                    action: config.action, // 自定义动作
                    ...config.params
                  }
                })
              ]),
              config.showFooter ?
              createElement('div', {
                  class: 'dialog-footer'
                },
                [
                  config.showCloseButton ?
                  createElement('el-button', {
                    props: {
                      type: 'empty',
                      size: 'default',
                      disabled: config.disabled
                    },
                    on: {
                      click: () => {
                        this.close()
                      }
                    }
                  }, [config.closeButtonText]) : '',
                  config.showConfirmButton ?
                  createElement('el-button', {
                    props: {
                      type: 'primary',
                      size: 'default',
                      disabled: config.disabled,
                    },
                    on: {
                      click: () => {
                        this.confirm();
                      }
                    }
                  }, [config.confirmButtonText]) : ''
                ]
              ) : ''
          ]
        )
      ]
    )
  },
  methods: {
    create(option) {
      this.config = {
        title: '', // 弹窗标题
        width: 800, // 弹窗宽度
        view: null, // 内容组件
        params: {}, // 携带的参数
        action: 'add', // 操作
        level: false, // 是否二级弹窗
        visible: true, // 显示隐藏弹窗
        showClose: true, // 是否显示关闭按钮
        closeValidate: () => (true), // 关闭验证逻辑
        showFooter: false, // 是否显示底部按钮
        showCloseButton: true, // 是否显示关闭按钮
        closeButtonText: '关闭', // 关闭按钮的显示文本
        showConfirmButton: true, // 是否显示确定按钮
        confirmButtonText: '确定', // 确定按钮的显示文本
        disabled: false,
        ...option
      }
    }
  }
})

const initInstance = () => {
  const dialogBox = new DialogConstructor().$mount()
  document.body.appendChild(dialogBox.$el)
  return dialogBox
}

const Dialog = function (options) {
  const elDialog = document.querySelector('.el-dialog__wrapper')
  if (elDialog?.style?.['z-index']) {
    zIndex = parseInt(elDialog?.style?.['z-index']) + 1
  }

  if (!instance) {
    instance = initInstance()
  }

  if (options?.level && !level) {
    level = initInstance()
  }

  return new Promise((resolve, reject) => {
    if (options?.level) {
      level.create(options)
      level.resolve = resolve
      level.reject = reject
    } else {
      instance.create(options)
      instance.resolve = resolve
      instance.reject = reject
    }
  })
}

export default Dialog