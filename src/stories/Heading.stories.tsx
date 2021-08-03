import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Heading } from "../components/Heading/Heading";

export default {
  title: 'Base/Heading/Default',
  component: Heading,
  argTypes: {},
  args: {
    children: "Hello",
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading { ...args } />;

export const Default = Template.bind({});
export const As = Template.bind({});
As.args = {
  children: "Subhead",
  as: "h3",
};
