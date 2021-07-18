import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Content} from "../components/Content/Content";

export default {
    title: 'Base/Content/Default',
    component: Content,
    argTypes: {},
    args: {
        children: "Content"
    }
} as ComponentMeta<typeof Content>;

const Template: ComponentStory<typeof Content> = (args) => <Content {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: "Content",
    preview: true,
}