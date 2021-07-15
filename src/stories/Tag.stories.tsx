import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Tag} from "../components/Tag";

export default {
    title: 'Base/Tag/Default',
    component: Tag,
    argTypes: {},
    args: {}
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: "Text"
}
export const Closeable = Template.bind({});
Closeable.args = {
    children: "Closeable",
    closeable: true,
}
