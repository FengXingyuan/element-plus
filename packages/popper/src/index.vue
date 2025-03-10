<script lang="ts">
import {
  createVNode,
  defineComponent,
  Fragment,
  Teleport,
  onBeforeUnmount,
  onDeactivated,
  onActivated,
  onMounted,
  renderSlot,
  toDisplayString,
  withDirectives,
} from 'vue'

import throwError from '@element-plus/utils/error'
import { PatchFlags, renderBlock } from '@element-plus/utils/vnode'

import usePopper from './use-popper/index'
import defaultProps from './use-popper/defaults'

import { renderPopper, renderTrigger, renderArrow } from './renderers'
import { ClickOutside } from '@element-plus/directives'

const compName = 'ElPopper'
const UPDATE_VISIBLE_EVENT = 'update:visible'

export default defineComponent({
  name: compName,
  props: defaultProps,
  emits: [UPDATE_VISIBLE_EVENT, 'after-enter', 'after-leave', 'before-enter', 'before-leave'],
  setup(props, ctx) {
    if (!ctx.slots.trigger) {
      throwError(compName, 'Trigger must be provided')
    }
    // this is a reference that we need to pass down to child component
    // to obtain the child instance

    // return usePopper(props as IPopperOptions, ctx as SetupContext)
    const popperStates = usePopper(props, ctx)

    const forceDestroy = () => popperStates.doDestroy(true)
    onMounted(popperStates.initializePopper)
    onBeforeUnmount(forceDestroy)
    onActivated(popperStates.initializePopper)
    onDeactivated(forceDestroy)

    return popperStates
  },

  render() {
    const {
      $slots,
      appendToBody,
      class: kls,
      effect,
      hide,
      onPopperMouseEnter,
      onPopperMouseLeave,
      onAfterEnter,
      onAfterLeave,
      onBeforeEnter,
      onBeforeLeave,
      popperClass,
      popperId,
      popperStyle,
      pure,
      showArrow,
      transition,
      visibility,
      stopPopperMouseEvent,
    } = this

    const isManual = this.isManualMode()
    const arrow = renderArrow(showArrow)
    const popper = renderPopper(
      {
        effect,
        name: transition,
        popperClass,
        popperId,
        popperStyle,
        pure,
        stopPopperMouseEvent,
        onMouseEnter: onPopperMouseEnter,
        onMouseLeave: onPopperMouseLeave,
        onAfterEnter,
        onAfterLeave,
        onBeforeEnter,
        onBeforeLeave,
        visibility,
      },
      [
        renderSlot($slots, 'default', {}, () => {
          return [toDisplayString(this.content)]
        }),
        arrow,
      ],
    )

    const _t = $slots.trigger?.()

    const triggerProps = {
      ariaDescribedby: popperId,
      class: kls,
      ref: 'triggerRef',
      ...this.events,
    }

    const trigger = isManual
      ? renderTrigger(_t, triggerProps)
      : withDirectives(renderTrigger(_t, triggerProps), [[ClickOutside, hide]])

    return renderBlock(Fragment, null, [
      trigger,
      createVNode(
        Teleport as any, // Vue did not support createVNode for Teleport
        {
          to: 'body',
          disabled: !appendToBody,
        },
        [popper],
        PatchFlags.PROPS,
        ['disabled'],
      ),
    ])
  },
})
</script>
