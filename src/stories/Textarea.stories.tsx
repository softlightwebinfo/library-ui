import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Textarea } from "../components/Textarea/Textarea";

export default {
  title: 'Base/Textarea/Default',
  component: Textarea,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => <Textarea { ...args } />;
export const Default = Template.bind({});
Default.args = {
  placeholder: "Description",
};
