import Header from './Header.vue'

export default {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
}

export const Default = {
  render: () => ({
    components: { Header },
    template: '<Header />',
  }),
}
