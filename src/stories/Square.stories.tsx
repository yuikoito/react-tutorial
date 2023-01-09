import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Square } from '../components/Square';

export default {
  title: 'components/Square',
  component: Square,
} as ComponentMeta<typeof Square>;

const Template: ComponentStory<typeof Square> = (args) => <Square {...args} />;

export const Maru = Template.bind({});
Maru.args = {
  value: 'O'
};

export const Batsu = Template.bind({});
Batsu.args = {
  value: 'X'
};

export const Null = Template.bind({});
Null.args = {
  value: null
};
