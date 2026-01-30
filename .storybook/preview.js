import { setup } from '@storybook/vue3'
import '../src/style.css'

setup(app => {
	// You can configure your app here
})

/** @type { import('@storybook/vue3').Preview } */
const preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	}
}

export default preview
