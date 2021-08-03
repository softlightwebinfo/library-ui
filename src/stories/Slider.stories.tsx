import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { TagPicker } from "../components/TagPicker/TagPicker";

export default {
  title: 'Base/TagPicker/Default',
  component: TagPicker,
  argTypes: {},
  args: {
    data: [
      {
        "label": "Eugenia",
        "value": "Eugenia",
        "role": "Master",
      },
      {
        "label": "Kariane",
        "value": "Kariane",
        "role": "Master",
      },
      {
        "label": "Louisa",
        "value": "Louisa",
        "role": "Master",
      },
      {
        "label": "Marty",
        "value": "Marty",
        "role": "Master",
      },
      {
        "label": "Kenya",
        "value": "Kenya",
        "role": "Master",
      },
      {
        "label": "Hal",
        "value": "Hal",
        "role": "Developer",
      },
      {
        "label": "Julius",
        "value": "Julius",
        "role": "Developer",
      },
      {
        "label": "Travon",
        "value": "Travon",
        "role": "Developer",
      },
      {
        "label": "Vincenza",
        "value": "Vincenza",
        "role": "Developer",
      },
      {
        "label": "Dominic",
        "value": "Dominic",
        "role": "Developer",
      },
      {
        "label": "Pearlie",
        "value": "Pearlie",
        "role": "Guest",
      },
      {
        "label": "Tyrel",
        "value": "Tyrel",
        "role": "Guest",
      },
      {
        "label": "Jaylen",
        "value": "Jaylen",
        "role": "Guest",
      },
      {
        "label": "Rogelio",
        "value": "Rogelio",
        "role": "Guest",
      },
    ],
  },
} as ComponentMeta<typeof TagPicker>;

const Template: ComponentStory<typeof TagPicker> = (args) => <TagPicker { ...args } />;

export const Default = Template.bind({});
Default.args = {};
export const Block = Template.bind({});
Block.args = {
  block: true,
};
export const Style = Template.bind({});
Style.args = {
  style: { maxWidth: 400, width: "100%" },
  styleButton:{ maxWidth: 400, width: "100%" }
};
