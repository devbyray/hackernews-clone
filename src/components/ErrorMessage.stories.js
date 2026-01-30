import ErrorMessage from './ErrorMessage.vue'

export default {
  title: 'Components/ErrorMessage',
  component: ErrorMessage,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    message: { control: 'text' },
    retryable: { control: 'boolean' },
    dismissible: { control: 'boolean' },
  },
}

export const Default = {
  args: {
    title: 'Error',
    message: 'Something went wrong. Please try again.',
  },
}

export const WithRetry = {
  args: {
    title: 'Failed to load stories',
    message: 'Network connection failed. Please check your internet and try again.',
    retryable: true,
  },
}

export const Dismissible = {
  args: {
    title: 'Warning',
    message: 'Some features may not be available.',
    dismissible: true,
  },
}

export const WithBoth = {
  args: {
    title: 'Connection Error',
    message: 'Unable to reach the server.',
    retryable: true,
    dismissible: true,
  },
}

export const TitleOnly = {
  args: {
    title: 'Not Found',
  },
}
