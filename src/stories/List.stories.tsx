import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {List} from "../components/List/List";
import {ListItem} from "../components/List/ListItem";

export default {
    title: 'Base/List/Default',
    component: List,
    argTypes: {},
    args: {}
} as ComponentMeta<typeof List>;
const data = ['Roses are red', 'Violets are blue', 'Sugar is sweet', 'And so are you'];
const Template: ComponentStory<typeof List> = (args) => (
    <List {...args}>
        {data.map((item, index) => (
            <ListItem key={index} index={index}>
                {item}
            </ListItem>
        ))}
    </List>
);

export const Default = Template.bind({});
Default.args = {}
export const Size = Template.bind({});
Size.args = {
    size: "lg",
}

export const Bordered = Template.bind({});
Bordered.args = {
    bordered: true,
}

export const Hover = Template.bind({});
Hover.args = {
    hover: true,
}