import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Content } from "../components/Content/Content";
import { Table } from "../components/Table/Table";

export default {
  title: 'Base/Table/Default',
  component: Table,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table { ...args } />;

export const Default = Template.bind({});
Default.args = {

};
