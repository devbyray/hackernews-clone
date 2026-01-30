import Input from './Input.vue'
import { ref } from 'vue'

export default {
	title: 'Components/Input',
	component: Input,
	tags: ['autodocs'],
	argTypes: {
		type: {
			control: 'select',
			options: ['text', 'email', 'search', 'password', 'number']
		},
		size: {
			control: 'select',
			options: ['sm', 'md', 'lg']
		}
	}
}

export const Text = {
	args: {
		type: 'text',
		placeholder: 'Enter text...',
		size: 'md'
	},
	render: args => ({
		components: { Input },
		setup() {
			const value = ref('')
			return { args, value }
		},
		template: '<Input v-bind="args" v-model="value" />'
	})
}

export const Email = {
	args: {
		type: 'email',
		placeholder: 'Enter your email...',
		size: 'md'
	},
	render: args => ({
		components: { Input },
		setup() {
			const value = ref('')
			return { args, value }
		},
		template: '<Input v-bind="args" v-model="value" />'
	})
}

export const Search = {
	args: {
		type: 'search',
		placeholder: 'Search...',
		size: 'md'
	},
	render: args => ({
		components: { Input },
		setup() {
			const value = ref('')
			return { args, value }
		},
		template: '<Input v-bind="args" v-model="value" />'
	})
}

export const Small = {
	args: {
		type: 'text',
		placeholder: 'Small input',
		size: 'sm'
	},
	render: args => ({
		components: { Input },
		setup() {
			const value = ref('')
			return { args, value }
		},
		template: '<Input v-bind="args" v-model="value" />'
	})
}

export const Large = {
	args: {
		type: 'text',
		placeholder: 'Large input',
		size: 'lg'
	},
	render: args => ({
		components: { Input },
		setup() {
			const value = ref('')
			return { args, value }
		},
		template: '<Input v-bind="args" v-model="value" />'
	})
}

export const Disabled = {
	args: {
		type: 'text',
		placeholder: 'Disabled input',
		disabled: true
	},
	render: args => ({
		components: { Input },
		setup() {
			const value = ref('')
			return { args, value }
		},
		template: '<Input v-bind="args" v-model="value" />'
	})
}
