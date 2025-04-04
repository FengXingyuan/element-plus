import { computed, ref, watch, nextTick, onMounted } from 'vue'

import isServer from '@element-plus/utils/isServer'
import { UPDATE_MODEL_EVENT } from '@element-plus/utils/constants'
import PopupManager from '@element-plus/utils/popup-manager'
import { clearTimer } from '@element-plus/utils/util'
import { useLockScreen, useRestoreActive, useModal } from '@element-plus/hooks'

import type { UseDialogProps } from './dialog'
import type { SetupContext } from '@vue/runtime-core'

export const CLOSE_EVENT = 'close'
export const OPEN_EVENT = 'open'
export const CLOSED_EVENT = 'closed'
export const OPENED_EVENT = 'opened'
export { UPDATE_MODEL_EVENT }

export default function(props: UseDialogProps, ctx: SetupContext) {
  const visible = ref(false)
  const closed = ref(false)
  const dialogRef = ref(null)
  const openTimer = ref<TimeoutHandle>(null)
  const closeTimer = ref<TimeoutHandle>(null)
  const zIndex = ref(props.zIndex || PopupManager.nextZIndex())
  const modalRef = ref<HTMLElement>(null)

  const style = computed(() => {
    const style = {} as CSSStyleDeclaration
    if (!props.fullscreen) {
      style.marginTop = props.top
      if (props.width) {
        style.width = props.width
      }
    }
    return style
  })

  function afterEnter() {
    ctx.emit(OPENED_EVENT)
  }

  function afterLeave() {
    ctx.emit(CLOSED_EVENT)
    ctx.emit(UPDATE_MODEL_EVENT, false)
  }

  function open() {
    clearTimer(closeTimer)
    clearTimer(openTimer)
    if (props.openDelay && props.openDelay > 0) {
      openTimer.value = window.setTimeout(() => {
        openTimer.value = null
        doOpen()
      }, props.openDelay)
    } else {
      doOpen()
    }
  }

  function close() {
    // if (this.willClose && !this.willClose()) return;
    clearTimer(openTimer)
    clearTimer(closeTimer)

    if (props.closeDelay && props.closeDelay > 0) {
      closeTimer.value = window.setTimeout(() => {
        closeTimer.value = null
        doClose()
      }, props.closeDelay)
    } else {
      doClose()
    }
  }

  function hide(shouldCancel: boolean) {
    if (shouldCancel) return
    closed.value = true
    visible.value = false
  }

  function handleClose() {
    if (props.beforeClose) {
      props.beforeClose(hide)
    } else {
      close()
    }
  }

  function onModalClick() {
    if (props.closeOnClickModal) {
      handleClose()
    }
  }

  function doOpen() {
    if (isServer) {
      return
    }

    // if (props.willOpen?.()) {
    //  return
    // }
    visible.value = true
  }

  function doClose() {
    visible.value = false
  }

  if (props.lockScroll) {
    useLockScreen(visible)
  }

  if (props.closeOnPressEscape) {
    useModal({
      handleClose,
    }, visible)
  }

  useRestoreActive(visible)

  watch(() => props.modelValue, val => {
    if (val) {
      closed.value = false
      open()
      ctx.emit(OPEN_EVENT)
      // this.$el.addEventListener('scroll', this.updatePopper)
      nextTick(() => {
        if (dialogRef.value) {
          dialogRef.value.scrollTop = 0
        }
      })
    } else {
      // this.$el.removeEventListener('scroll', this.updatePopper
      close()
      if (!closed.value) {
        ctx.emit(CLOSE_EVENT)
      }
    }
  })

  onMounted(() => {
    if (props.modelValue) {
      visible.value = true
      open()
    }
  })

  return {
    afterEnter,
    afterLeave,
    handleClose,
    onModalClick,
    closed,
    dialogRef,
    style,
    modalRef,
    visible,
    zIndex,
  }
}
