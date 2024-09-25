import Title from './Title.vue';

export default {
  title: 'Example/Title',  // Define where it appears in the Storybook sidebar
  component: Title,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    color: { control: 'text' },
    size: { control: 'text' },
  },
};

export const Default = {
  args: {
    text: 'Hello Storybook',
    color: 'black',
    size: '2xl',
  },
};

export const Custom = {
  args: {
    text: 'Custom Title',
    color: 'purple-500',
    size: '4xl',
  },
};
