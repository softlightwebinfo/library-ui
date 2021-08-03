import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Slider } from "../components/Slider/Slider";

export default {
  title: 'Base/Slider/Default',
  component: Slider,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => <Slider { ...args } />;

export const Default = Template.bind({});
Default.args = {
  defaultValue: 20,
};
