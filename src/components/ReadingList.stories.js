import ReadingList from './ReadingList.vue'

export default {
  title: 'Components/ReadingList',
  component: ReadingList,
  tags: ['autodocs'],
}

export const Default = {
  render: () => ({
    components: { ReadingList },
    template: '<ReadingList />',
  }),
}
