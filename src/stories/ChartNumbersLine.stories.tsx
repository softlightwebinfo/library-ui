import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ChartNumbersLine } from "../components/ChartNumbersLine/ChartNumbersLine";

export default {
  title: 'Charts/ChartNumbersLine/Default',
  component: ChartNumbersLine,
  argTypes: {},
  args: {
    days: 30,
  },
} as ComponentMeta<typeof ChartNumbersLine>;

const Template: ComponentStory<typeof ChartNumbersLine> = (args) => <ChartNumbersLine { ...args } />;

export const Default = Template.bind({});
Default.args = {
  data: {
    1: {
      value: 20,
      label: "0:30",
    },
    3: {
      value: 50,
      label: "1:30",
    },
    7: {
      value: 100,
      label: "2:20",
    },
  },
};
