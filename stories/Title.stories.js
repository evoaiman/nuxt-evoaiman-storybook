import Title from './Title.vue';

export default {
  title: 'Example/Title',  // Define where it appears in the Storybook sidebar
  component: Title,
  argTypes: {
    text: { control: 'text' },
    color: { control: 'color' },
    size: { control: 'number' },
  },
};

const Template = (args) => ({
  components: { Title },
  setup() {
    return { args };
  },
  template: '<Title v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  text: 'Hello Storybook',
  color: '#000',
  size: 24,
};

export const Custom = Template.bind({});
Custom.args = {
  text: 'Custom Title',
  color: '#FF0000',
  size: 40,
};
