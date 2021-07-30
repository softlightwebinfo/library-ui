import { faLayerGroup, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Icon } from "../components";
import { SelectPicker } from "../components/SelectPicker/SelectPicker";

export default {
  title: 'Base/SelectPicker/Default',
  component: SelectPicker,
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
} as ComponentMeta<typeof SelectPicker>;

const Template: ComponentStory<typeof SelectPicker> = (args) => <SelectPicker { ...args } />;
export const Default = Template.bind({});
Default.args = {};
export const Group = Template.bind({});
Group.args = {
  groupBy: "role",
};
export const Functions = Template.bind({});
Functions.args = {
  groupBy: "role",
  placeholder: "Select user",
  renderMenuItem: (label, item) => (
    <div>
      <Icon icon={ faLayerGroup }/> { label }
    </div>
  ),
  renderMenuGroup: (label, item) => {
    return (
      <div>
        <Icon icon={ faUsers }/> { label } - ({ item.children.length })
      </div>
    );
  },
  renderValue: (value, item) => {
    return (
      <div>
        <span style={ { color: '#868484' } }>
          <Icon icon={ faUser }/> User:
        </span> { value }
      </div>
    );
  },
};
