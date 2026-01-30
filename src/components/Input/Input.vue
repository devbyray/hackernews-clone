<template>
  <div class="relative">
    <input
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="modelValue"
      :class="inputClasses"
      @input="$emit('update:modelValue', $event.target.value)"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
    />
    <slot name="icon" />
  </div>
</template>

<script setup>
import { computed } from 'vue'

/**
 * Input Component
 * 
 * Reusable input field component with multiple types and sizes
 * 
 * @prop {String} type - Input type: 'text', 'email', 'search', 'password'
 * @prop {String} placeholder - Placeholder text
 * @prop {String} size - Input size: 'sm', 'md', 'lg'
 * @prop {Boolean} disabled - Disabled state
 * @prop {String} modelValue - v-model value
 */

const props = defineProps({
  type: {
    type: String,
    default: 'text',
    validator: (value) => ['text', 'email', 'search', 'password', 'number'].includes(value)
  },
  placeholder: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: [String, Number],
    default: ''
  }
})

defineEmits(['update:modelValue', 'focus', 'blur'])

const inputClasses = computed(() => {
  const baseClasses = 'w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-hn-orange focus:border-transparent transition-colors'
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }
  
  const disabledClasses = props.disabled ? 'bg-gray-100 cursor-not-allowed opacity-50' : 'bg-white'
  
  return [
    baseClasses,
    sizeClasses[props.size],
    disabledClasses
  ].join(' ')
})
</script>
