import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Header} from "../components/Header/Header";

export default {
    title: 'Base/Header/Default',
    component: Header,
    argTypes: {},
    args: {
        children: "Header"
    }
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
    preview: true,
}