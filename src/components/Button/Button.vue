<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    :class="buttonClasses"
    @click="$emit('click', $event)"
  >
    <span v-if="loading" class="animate-spin">⏳</span>
    <slot v-else />
  </button>
</template>

<script setup>
import { computed } from 'vue'

/**
 * Button Component
 * 
 * Reusable button component with multiple variants and sizes
 * 
 * @prop {String} variant - Button style variant: 'primary', 'secondary', 'ghost', 'icon'
 * @prop {String} size - Button size: 'sm', 'md', 'lg'
 * @prop {String} type - HTML button type
 * @prop {Boolean} disabled - Disabled state
 * @prop {Boolean} loading - Loading state
 */

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'ghost', 'icon'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  type: {
    type: String,
    default: 'button'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  }
})

defineEmits(['click'])

const buttonClasses = computed(() => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-colors rounded focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variantClasses = {
    primary: 'bg-hn-orange text-hn-dark hover:bg-orange-600 focus:ring-hn-orange',
    secondary: 'bg-white text-hn-dark border border-gray-300 hover:bg-gray-50 focus:ring-hn-orange',
    ghost: 'bg-transparent text-hn-text hover:bg-gray-100 focus:ring-hn-orange',
    icon: 'bg-transparent text-hn-text hover:bg-gray-100 focus:ring-hn-orange p-2'
  }
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-2 text-base',
    lg: 'px-8 py-3 text-lg'
  }
  
  const disabledClasses = props.disabled || props.loading ? 'opacity-50 cursor-not-allowed' : ''
  
  return [
    baseClasses,
    variantClasses[props.variant],
    props.variant !== 'icon' ? sizeClasses[props.size] : '',
    disabledClasses
  ].filter(Boolean).join(' ')
})
</script>
