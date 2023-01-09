import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Board } from '../components/Board';

export default {
  title: 'components/Board',
  component: Board,
} as ComponentMeta<typeof Board>;

const Template: ComponentStory<typeof Board> = (args) => <Board {...args} />;

export const Null = Template.bind({});
Null.args = {
  squares: Array(9).fill(null)
};

export const AllTriangle = Template.bind({});
AllTriangle.args = {
  squares: Array(9).fill('△')
};

export const AllBatsu = Template.bind({});
AllBatsu.args = {
  squares: Array(9).fill('X')
};