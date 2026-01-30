import LoadingSpinner from './LoadingSpinner.vue'

export default {
  title: 'Components/LoadingSpinner',
  component: LoadingSpinner,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: 'text',
    },
    message: {
      control: 'text',
    },
  },
}

export const Default = {
  args: {},
}

export const WithMessage = {
  args: {
    message: 'Loading stories...',
  },
}

export const Small = {
  args: {
    size: 'sm',
    message: 'Loading...',
  },
}

export const Large = {
  args: {
    size: 'lg',
    message: 'Please wait...',
  },
}

export const CustomColor = {
  args: {
    color: 'border-blue-500',
    message: 'Custom color spinner',
  },
}
