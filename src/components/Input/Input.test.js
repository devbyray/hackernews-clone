import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Input from './Input.vue'

describe('Input', () => {
	it('renders with default props', () => {
		const wrapper = mount(Input)

		expect(wrapper.find('input').exists()).toBe(true)
		expect(wrapper.find('input').attributes('type')).toBe('text')
	})

	it('applies placeholder', () => {
		const wrapper = mount(Input, {
			props: { placeholder: 'Enter text' }
		})

		expect(wrapper.find('input').attributes('placeholder')).toBe('Enter text')
	})

	it('binds v-model value', async () => {
		const wrapper = mount(Input, {
			props: { modelValue: 'test value' }
		})

		expect(wrapper.find('input').element.value).toBe('test value')
	})

	it('emits update:modelValue on input', async () => {
		const wrapper = mount(Input)
		const input = wrapper.find('input')

		await input.setValue('new value')

		expect(wrapper.emitted('update:modelValue')).toBeTruthy()
		expect(wrapper.emitted('update:modelValue')[0]).toEqual(['new value'])
	})

	it('applies email type', () => {
		const wrapper = mount(Input, {
			props: { type: 'email' }
		})

		expect(wrapper.find('input').attributes('type')).toBe('email')
	})

	it('applies size classes', () => {
		const wrapper = mount(Input, {
			props: { size: 'lg' }
		})

		expect(wrapper.find('input').classes()).toContain('px-6')
	})

	it('disables input when disabled prop is true', () => {
		const wrapper = mount(Input, {
			props: { disabled: true }
		})

		expect(wrapper.find('input').attributes('disabled')).toBeDefined()
	})

	it('emits focus and blur events', async () => {
		const wrapper = mount(Input)
		const input = wrapper.find('input')

		await input.trigger('focus')
		expect(wrapper.emitted('focus')).toBeTruthy()

		await input.trigger('blur')
		expect(wrapper.emitted('blur')).toBeTruthy()
	})
})
