import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Game } from '../components/Game';

export default {
  title: 'components/Game',
  component: Game,
} as ComponentMeta<typeof Game>;

const Template: ComponentStory<typeof Game> = (args) => <Game {...args} />;
export const index = Template.bind({});
index.args = {};
